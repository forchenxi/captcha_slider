import requests
import json
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
                "width": "310",
                "token": "",
                "referer": "https://etax.jiangsu.chinatax.gov.cn/portal/queryapi/commonPage.do",
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

    def get_distance(self, content):
        results = self._yolo.get_distance(content)
        for result in results:
            left, top = result
            if left > 50 and top > 10:
                return left


if __name__ == "__main__":
    yd = JiangSu()
    # 获取验证码链接,包括背景图和滑块
    background_url, front_url = yd.get_captcha_url()
    # 下载背景图
    background_content = yd.download_captcha(background_url)
    # 调用深度学习模型识别验证码
    distance = yd.get_distance(background_content)
    if not distance:
        print("模型未识别出目标")
    print(distance)
