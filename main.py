# -*- coding: utf-8 -*-
"""
请求验证码，调用模型识别接口获取滑块位置，并生成滑动轨迹，进行验证
"""

import requests
import json
import random
import execjs
from urllib.parse import urlencode
from PIL import Image
from io import BytesIO
import numpy as np
from yolo_test import YOLO


class YiDun:
    header = {
        "User-Agent": ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/"
                       "537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"),
        "Referer": "https://dun.163.com/",
        "Host": "c.dun.163.com",
        "Upgrade-Insecure-Requests": "1"
    }

    def __init__(self):
        self._captcha_content = None
        self._captcha_url = None
        self._fingerprint = None
        self._cb = None
        self._token = None
        self._yolo = YOLO()
        # 加载浏览器环境
        with open('js/dom.js', 'r', encoding="utf-8") as f:
            self._dom_js = f.read()
        with open(r'js/fingerprint.js', "r", encoding="utf-8") as f:
            self._fingerprint_js = f.read()
        with open(r'js/main.js', "r", encoding="utf-8") as f:
            self._main_js = f.read()
        self._fp_ctx = execjs.compile(self._dom_js+self._fingerprint_js)
        self._main_ctx = execjs.compile(self._main_js)

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
                self._fingerprint = self._fp_ctx.call("get_fingerprint")
            self._cb = self._main_ctx.call("get_cb")
            paras = {
                "id": "07e2387ab53a4d6f930b8d9a9be71bdf",
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
                "width": "320",
                "token": "",
                "referer": "https://dun.163.com/trial/jigsaw",
                "callback": "__JSONP_vky5mlp_0"
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

    @staticmethod
    def get_top(response_content):
        image = Image.open(BytesIO(response_content))
        width, height = image.size
        # 逐列扫描，找到第一列透明度不为0的最上面的行
        for c in range(width):
            for r in range(height - 40):
                _, _, _, a = image.getpixel((c, r))
                if a:
                    return r

    def get_distance(self, content, r):
        results = self._yolo.get_distance(content)
        for result in results:
            left, top = result
            # 这里top和r之间允许有一定的误差
            if abs(top - r) < 5:
                return left

    @staticmethod
    def get_x_list(dis):
        stride = dis / 80
        x_list = []
        for i in range(79):
            x = random.uniform(i * stride, (i + 1) * stride)
            x_list.append(int(x))
        x_list.append(dis)
        return x_list

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
        tracks[-1] = dis
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
            elif change_point < i <= change_point*2:
                y_list.append(random.randint(1, 2))
            elif change_point*2 < i <= change_point*3:
                y_list.append(random.randint(2, 3))
            elif change_point*3 < i <= change_point*4:
                y_list.append(random.randint(3, 4))
            elif i > change_point*4:
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
        dis = round(dis)+10  # 据观察，实际缺口的位置与滑动距离相差10
        x_list = self.get_x_list_new(dis)
        y_list = self.get_y_list(len(x_list))
        time_list = self.get_time_list(len(x_list))
        traces = []
        for x, y, t in zip(x_list, y_list, time_list):
            traces.append([x, y, t])
        return traces

    def generate_data(self, traces, left):
        jigsaw_style_left = str(left)+"px"
        para_data = self._main_ctx.call("get_data", traces, self._token, jigsaw_style_left)
        return para_data

    def check_captcha(self, para_data):
        self._cb = self._main_ctx.call("get_cb")
        paras = {
            "id": "07e2387ab53a4d6f930b8d9a9be71bdf",  # CaptchaId
            "token": self._token,
            "acToken": ("9ca17ae2e6ffcda170e2e6eed5d268bca9f991ef548ceb8fa6d45f928e9ebbaa6a86909ab0c233a592fc88c22af"
                        "0feaec3b92afc8ffdbac67492a6a7b8cc4f969b8aa7d45b8ef1aaa3ca6d8e93a4b7ce7c9391ee9e"),  # 可能为定值
            "data": "",
            "width": "320",
            "type": "2",
            "version": "2.14.1",
            "cb": self._cb,
            "extraData": "",  # 可能为空
            "runEnv": "10",
            "referer": "https://dun.163.com/trial/jigsaw",
            "callback": "__JSONP_9e3su76_1"
        }
        paras.update({"data": para_data})
        url = f"https://c.dun.163.com/api/v2/check?{urlencode(paras)}"
        req = requests.get(url, headers=self.header)
        print(req.text)


if __name__ == "__main__":
    yd = YiDun()
    for _ in range(10):
        # 获取验证码链接,包括背景图和滑块
        background_url, front_url = yd.get_captcha_url()
        # 下载滑块
        front_content = yd.download_captcha(front_url)
        # 根据滑块图获取滑块左上角的坐标，主要为解决背景图干扰滑块的问题
        row = yd.get_top(front_content)
        # 下载背景图
        background_content = yd.download_captcha(background_url)
        # 调用深度学习模型识别验证码
        distance = yd.get_distance(background_content, row)
        if not distance:
            print("模型未识别出目标")
            continue
        # 模拟生成轨迹
        trace = yd.get_tracks(distance)
        # 生成data参数
        data = yd.generate_data(trace, distance)
        # 发送验证请求
        yd.check_captcha(data)
