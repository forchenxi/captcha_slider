import requests
import json
import re
import random
import execjs
from urllib.parse import urlencode
from PIL import Image
from io import BytesIO
import numpy as np
from yolo_test import YOLO


class JiangSu:
    header = {
        "User-Agent": ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/"
                       "537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"),
        "Referer": "https://etax.jiangsu.chinatax.gov.cn/",
        "Host": "c.dun.163.com",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "cross-site"
    }
    header1 = {
        "User-Agent": ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/"
                       "537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"),
        "Referer": "https://etax.jiangsu.chinatax.gov.cn/",
        "Host": "ac.dun.163.com",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-type": "application/x-www-form-urlencoded",
        "Origin": "https://etax.jiangsu.chinatax.gov.cn",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site"
    }

    def __init__(self):
        self._captcha_content = None
        self._captcha_url = None
        self._fingerprint = None
        self._cb = None
        self._token = None
        self._yolo = YOLO()
        self.user_agent = {
            'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36"}
        # 加载浏览器环境
        with open('js/dom.js', 'r', encoding="utf-8") as f:
            self._dom_js = f.read()
        with open(r'js/fingerprint.js', "r", encoding="utf-8") as f:
            self._fingerprint_js = f.read()
        with open(r'js/fp.js', "r", encoding="utf-8") as f:
            self._fp = f.read()
        with open(r'js/main.js', "r", encoding="utf-8") as f:
            self._main_js = f.read()
        with open(r'js/d_param.js', 'r', encoding='utf-8') as f:
            self._d_param_js = f.read()
        with open(r'js/actoken.js', "r", encoding="utf-8") as f:
            self._actoken_js = f.read()
        # self._fp_ctx = execjs.compile(self._dom_js+self._fingerprint_js)
        self._main_ctx = execjs.compile(self._main_js)
        self._d_param_ctx = execjs.compile(self._d_param_js)
        self._actoken_js = execjs.compile(self._actoken_js)
        self._fp_ctx = execjs.compile(self._fp)

    @staticmethod
    def download_captcha(url):
        for _ in range(3):
            try:
                res = requests.get(url)
            except Exception as _e:
                print(_e)
            else:
                if res.status_code == 200:
                    return res.content

    def get_captcha_url(self):
        for _ in range(3):
            # fingerprint可以复用，cb不可以
            if not self._fingerprint:
                # self._fingerprint = self._fp_ctx.call("get_fingerprint")
                # url = "http://127.0.0.1:8082/get_fp"
                # resp = requests.get(url, headers=self.user_agent, timeout=5)
                # self._fingerprint = resp.text
                self._fingerprint = self._fp_ctx.call("get_fp")
            self._cb = self._main_ctx.call("get_cb")
            paras = {
                "id": "1a623022803d4cbc86fa157ec267bb36",
                "fp": self._fingerprint,
                "https": "true",
                "type": "2",
                "version": "2.14.1",
                "dpr": "1",
                "dev": "1",
                "cb": self._cb,
                "ipv6": "false",
                "runEnv": "10",
                "group": "",
                "scene": "",
                "width": "310",
                "token": "",
                "referer": "https://etax.jiangsu.chinatax.gov.cn/portal/queryapi/commonPage.do",
                "callback": "__JSONP_35tfmn2_0"
            }
            url = f"https://c.dun.163.com/api/v2/get?{urlencode(paras)}"
            req = requests.get(url, headers=self.header)
            if req.status_code == 200:
                result = json.loads(req.text[18:-2])
                bg_url = result.get("data", {}).get("bg", [])[0]
                ft_url = result.get('data', {}).get('front', [])[0]
                self._token = result.get('data', {}).get('token')
                return bg_url, ft_url
            else:
                self._fingerprint = None
                self._cb = None

    def get_distance(self, content):
        results = self._yolo.get_distance(content)
        for result in results:
            left, top = result
            if left > 50 and top > 10:
                return left

    @staticmethod
    def get_x_list_new(dis):
        """
        拿到移动轨迹，模仿人的滑动行为，先匀加速后匀减速
        匀变速运动基本公式：
        ①v=v0+at
        ②s=v0t+½at²
        ③v²-v0²=2as
        :param dis: 需要移动的距离
        :return: 存放每0.3秒移动的距离
        """
        # 初速度
        v = 50
        # 单位时间为0.02s来统计轨迹，轨迹即0.02内的位移
        t = 0.02
        # 位移/轨迹列表，列表内的一个元素代表0.02s的位移
        tracks = []
        # 当前的位移
        current = 0
        # 到达mid值开始减速
        mid = dis * 3 / 5

        while current < dis:
            if current < mid:
                # 加速度越小，单位时间的位移越小,模拟的轨迹就越多越详细
                a = 50
            else:
                a = -75
                # 初速度
            v0 = v
            # 0.02秒时间内的位移
            s = v0 * t + 0.5 * a * (t ** 2)
            # 当前的位置
            current += s
            # 添加到轨迹列表
            tracks.append(round(current))

            # 速度已经达到v,该速度作为下次的初速度
            v = v0 + a * t
        tracks[-1] = int(round(dis))
        return tracks

    @staticmethod
    def get_y_list(num):
        # 上下浮动值，设置几个比较小的备选值
        # y_option = [0, 1, 2, 3, 4, 5, 6, 7, -7, -6, -5, -4, -3, -2, -1]
        change_point = num // 5
        y_list = []
        # 先不考虑负值
        for i in range(num):
            if i <= change_point:
                y_list.append(random.randint(0, 1))
            elif change_point < i <= change_point * 2:
                y_list.append(random.randint(1, 2))
            elif change_point * 2 < i <= change_point * 3:
                y_list.append(random.randint(2, 3))
            elif change_point * 3 < i <= change_point * 4:
                y_list.append(random.randint(3, 4))
            elif i > change_point * 4:
                y_list.append(random.randint(4, 5))
        return y_list

    @staticmethod
    def get_time_list(num):
        # 开始滑动的时间，设置几个随机值(单位毫米)
        init_times = [87, 75, 91, 103, 116, 121, 137, 140, 154]
        # 预计滑动需要的时间，设置几个随机值(单位毫秒)
        # total_time = [1020, 1234, 1106, 988, 1356, 1407]
        # 随机每步增长的时间大小
        stride_time = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        init_time = random.choice(init_times)
        time_list = [init_time]
        for i in range(num - 1):
            init_time += random.choice(stride_time)
            time_list.append(init_time)
        return time_list

    def get_tracks(self, dis):
        # dis = round(dis) + 10  # 据观察，实际缺口的位置与滑动距离相差10
        x_list = self.get_x_list_new(dis)
        y_list = self.get_y_list(len(x_list))
        time_list = self.get_time_list(len(x_list))
        traces = []
        for x, y, t in zip(x_list, y_list, time_list):
            traces.append([x, y, t])
        print(traces)
        return traces

    def generate_data(self, traces, left):
        jigsaw_style_left = left-10
        para_data = self._main_ctx.call("get_data", traces, self._token, jigsaw_style_left)
        return para_data

    def execute_d_request(self):
        url = 'https://ac.dun.163.com/v3/d'
        paras = self._d_param_ctx.call("get_dd_param")
        req = requests.post(url, headers=self.header1, data=paras)
        if req.status_code == 200:
            response_text = req.text
            results = re.findall(r'(\[.*?\])', response_text)
            if results:
                results = json.loads(results[0])
                return results[2], results[3]

    def execute_b_request(self, d2, d3):
        url = 'https://ac.dun.163.com/v3/b'
        paras = self._d_param_ctx.call("get_bd_param", d2, d3)
        req = requests.post(url, headers=self.header1, data=paras)
        if req.status_code == 200:
            print(req.text)
            print("b请求验证成功")

    def get_actoken(self, d3):
        act = self._actoken_js.call("get_actoken", d3)
        return act

    def check_captcha(self, para_data, act):
        self._cb = self._main_ctx.call("get_cb")
        paras = {
            "id": "1a623022803d4cbc86fa157ec267bb36",  # CaptchaId
            "token": self._token,
            "acToken": act,
            "data": "",
            "width": "310",
            "type": "2",
            "version": "2.14.1",
            "cb": self._cb,
            "extraData": "",  # 可能为空
            "runEnv": "10",
            "referer": "https://etax.jiangsu.chinatax.gov.cn/portal/queryapi/commonPage.do",
            "callback": "__JSONP_rmtgpay_1"
        }
        paras.update({"data": para_data})
        url = f"https://c.dun.163.com/api/v2/check?{urlencode(paras)}"
        req = requests.get(url, headers=self.header)
        print(req.text)

    @staticmethod
    def get_tracks_new(dis):
        header = {"Content-Type": "application/x-www-form-urlencoded"}
        post_data = {"query_arg": str(int(round(dis)))}
        try:
            res = requests.post(f'http://192.168.20.162:8080/test', data=post_data)
        except Exception as _e:
            print(_e)
        else:
            print(res)
            x, t, y = res.text.split("#")
            x_list = x.split("_")
            t_list = t.split("_")
            y_list = y.split("_")
            traces = []
            for x, y, t in zip(x_list, y_list, t_list):
                traces.append([int(x), int(y), int(t)])
            return traces

    @staticmethod
    def get_trace_list(offset):
        # if not isinstance(offset, int):
        #     offset = 0
        # distance = 10 + offset
        distance = int(round(offset))
        t_list = [random.randint(50, 160)]
        x_list = [random.randint(5, 11)]
        y_list = list()
        # 生成x坐标轨迹, 生成t坐标轨迹
        for i in range(1, distance):
            x_list.append(x_list[i - 1] + random.randint(2, 4))
            if x_list[i] > distance:
                break
        diff = x_list[-1] - distance
        for i in range(diff):
            x_list.append(x_list[-1] + random.randint(-2, -1))
            if x_list[-1] <= distance:
                x_list[-1] = distance
                break
        length = len(x_list)
        # 生成y坐标轨迹
        for i in range(1, length + 1):
            if i < int(length * 0.4):
                y_list.append(0)
            elif i < int(length * 0.65):
                y_list.append(-1)
            elif i < int(length * 0.77):
                y_list.append(-2)
            elif i < int(length * 0.95):
                y_list.append(-3)
            else:
                y_list.append(-4)
            t_list.append(t_list[i - 1] + random.randint(20, 80))
        # 生成t的坐标
        xyt = list(zip(x_list, y_list, t_list))
        for i in range(length):
            xyt[i] = list(xyt[i])
        print(xyt)
        return xyt


if __name__ == "__main__":
    yd = JiangSu()
    for _ in range(10):
        # 首先发送d请求
        d_res2, d_res3 = yd.execute_d_request()
        print(d_res2, d_res3)

        # 获取验证码链接,包括背景图和滑块
        background_url, front_url = yd.get_captcha_url()
        # 下载背景图
        background_content = yd.download_captcha(background_url)
        # 调用深度学习模型识别验证码
        distance = yd.get_distance(background_content)
        if not distance:
            print("模型未识别出目标")
            continue
        print(distance)

        # 然后发送b请求验证d请求
        yd.execute_b_request(d_res2, d_res3)
        # 生成actoken参数
        actoken = yd.get_actoken(d_res3)

        # 模拟生成轨迹
        trace = yd.get_tracks(distance)
        # trace = yd.get_trace_list(distance)
        # 生成data参数
        data = yd.generate_data(trace, distance)
        # 发送验证请求
        yd.check_captcha(data, actoken)
