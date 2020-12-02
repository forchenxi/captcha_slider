此项目是破解易盾滑动验证码的项目，包括`js`破解和滑块图像两部分，`js`文件夹中是破解相关的`js`文件,`core.js`是易盾的源码，不过加了一些断点和全局变量，保存轨迹等数据，用于`Fidder`替换`js`文件时，获取轨迹数据等;

`dom.js、fingerprint.js、main.js`是破解需要的核心文件，`decrypt.js`是大佬给我的`AST`还原后的易盾源码。

详细的破解过程可以查看博客：[易盾破解上篇](https://forchenxi.github.io/2020/08/01/spider-yidun1/#more)、[易盾破解下篇](https://forchenxi.github.io/2020/08/08/spider-yidun2/#more)

本项目暂时不涉及`watchman`检测。

图像检测这块内容，是直接从另一个项目拿过来的训练模型，只移植过来了模型加载运行时依赖的文件。

因为模型的文件是`235MB`，超过了`GitHub`上传限制，放百度云了，链接: https://pan.baidu.com/s/1bR9BCGqWw-sA6Ag3V4Zcxw 提取码: dwf2 。