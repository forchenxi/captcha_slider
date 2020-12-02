# -*- coding: utf-8 -*-
"""
下载验证码图片并保存到指定文件
"""

import requests
import json
import random
import execjs
from urllib.parse import urlencode


# 改成你要保存的地址
file_path = "D:/python_project/yidun"
# 改成你想保存的图片数量
num = 300


class YiDun:
    header = {
        "User-Agent": ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/"
                       "537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"),
        "Referer": "https://dun.163.com/trial/jigsaw",
        "Host": "c.dun.163.com",
        "Upgrade-Insecure-Requests": "1"
    }

    def __init__(self):
        self._captcha_content = None
        self._captcha_url = None
        self._fingerprint = None
        self._cb = None
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
        file_name = random.random()
        for _ in range(3):
            try:
                res = requests.get(url)
            except Exception as _e:
                print(_e)
            else:
                if res.status_code == 200:
                    with open(f'{file_path}/{file_name}.jpg','wb') as f:
                        f.write(res.content)
                        return

    def get_captcha(self):
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
                "version": "2.14.0",
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
                captcha_url = result.get("data", {}).get("bg", [])[0]
                self.download_captcha(captcha_url)
                return captcha_url
            else:
                self._fingerprint = None
                self._cb = None


if __name__ == "__main__":
    test = YiDun()
    for _ in range(num):
        test.get_captcha()
