# Electron开发桌面应用

Electron 是一款可以利用 Web技术 开发跨平台桌面应用的框架，最初是 Github 发布的 Atom 编辑器衍生出的 Atom Shell，后更名为 Electron。Electron 提供了一个能通过 JavaScript 和 HTML 创建桌面应用的平台，同时集成 Node 来授予网页访问底层系统的权限。目前常见的有[NW](http://nwjs.io/)、[heX](http://hex.youdao.com/zh-cn/index.html)、[Electron](http://electron.atom.io/)、[MacGap](http://macgapproject.github.io/)、[MacGap案例switchhost](https://github.com/oldj/SwitchHosts)，可以打造桌面应用。

前不久Electron在[GitHub发布了Electron1.0版本](https://www.sdk.cn/news/3446)，[Electron Documentation](http://electron.atom.io/docs/tutorial/quick-start/)。

# electron项目

[electronic-wechat](https://github.com/geeeeeeeeek/electronic-wechat/blob/master/README_zh.md?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)

[WeFlow](https://github.com/weixin/WeFlow)

[Hozz](https://github.com/ppoffice/Hozz)

[hummingbird](https://github.com/stormtea123/hummingbird)

[ElectronOCR](https://github.com/wxyyxc1992/ElectronOCR)

[N1](https://github.com/nylas/N1)


# Electron学习资料

## Electron文档

[Electron Github](https://github.com/atom/electron)

[awesome-electron](https://github.com/sindresorhus/awesome-electron)

[Electron中文社区](https://atom-china.org/t/guan-fang-bo-ke-atom-shell-xian-zai-gai-ming-electron-liao/93)

[Electron中文手册](https://wangdashuaihenshuai.gitbooks.io/electron-zh-document/content/tutorial/README-2.html)

[electron docs-translations zh-CN](https://github.com/atom/electron/tree/master/docs-translations/zh-CN)

[Electron 中文文档](https://github.com/electron/electron/tree/master/docs-translations/zh-CN)

## Electron博文

[Electron 和 Vue.js 构建跨平台桌面应用](https://youhaosuda.com/blog/31)

[用 Electron 打造跨平台前端 App](https://segmentfault.com/a/1190000005744529?f=tt&hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)

[用Electron开发桌面应用](http://get.ftqq.com/7870.get)

[Electron入门介绍](https://segmentfault.com/a/1190000005692430?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)

[Electron开发实践1](http://www.ituring.com.cn/article/210679)

[Electron开发实践2](https://sneezry.com/2016/01/05/electron-develop-practice-part2/)

[electron-linvodb-manager leveldb的管理工具](https://cnodejs.org/topic/57271c9c5a26c4a841ecbf67?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
 

# Electron快速上手demo

[electron-boilerplate](https://github.com/chuyik/electron-boilerplate)

[electron-connect](https://github.com/Quramy/electron-connect)



# Electron开发工程

首先安装依赖

```
# Install the `electron` command globally in your $PATH
npm install electron-prebuilt -g   // 全局安装之后，就可以通过electron . 启动应用  涉及到electron-v1.2.2-darwin-x64可能引起安装不成功

# Install as a development dependency
npm install electron-prebuilt --save-dev

```
[electron-quick-start官方的一个应用demo](https://github.com/atom/electron-quick-start)，不太明白dev安装electron-prebuilt的原因本身按道理来说应该是`electron .`，其实全局安装了electron-prebuilt，dev是不需要的注意呢。

分析官方demo，其实一个 Electron 应用的目录结构大体如下：
```
app/
├── package.json
├── main.js
└── index.html
```
`package.json`的格式和 Node 的完全一致，并且那个被 main 字段声明的脚本文件是你的应用的启动脚本，它运行在主进程上。你应用里的 `package.json` 看起来应该像：

```
{
  "name"    : "app",
  "version" : "0.1.0",
  "main"    : "main.js"
}
```
注意：如果 main 字段没有在` package.json` 声明，Electron会优先加载 `index.js`。

`main.js` 应该用于创建窗口和处理系统时间，一个典型的例子如下：
```
var app = require('app');  // 控制应用生命周期的模块。
var BrowserWindow = require('browser-window');  // 创建原生浏览器窗口的模块

// 保持一个对于 window 对象的全局引用，不然，当 JavaScript 被 GC，
// window 会被自动地关闭
var mainWindow = null;

// 当所有窗口被关闭了，退出。
app.on('window-all-closed', function() {
  // 在 OS X 上，通常用户在明确地按下 Cmd + Q 之前
  // 应用会保持活动状态
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// 当 Electron 完成了初始化并且准备创建浏览器窗口的时候
// 这个方法就被调用
app.on('ready', function() {
  // 创建浏览器窗口。
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // 加载应用的 index.html
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // 打开开发工具
  mainWindow.openDevTools();

  // 当 window 被关闭，这个事件会被发出
  mainWindow.on('closed', function() {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 但这次不是。
    mainWindow = null;
  });
});
```
最后，你想展示的 `index.html `：
```
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using io.js <script>document.write(process.version)</script>
    and Electron <script>document.write(process.versions['electron'])</script>.
  </body>
</html>
```
# 运行你的应用
一旦你创建了最初的 `main.js`， `index.html` 和 `package.json` 这几个文件，你可能会想尝试在本地运行并测试，看看是不是和期望的那样正常运行。

# electron-prebuild
如果你已经用 npm 全局安装了 electron-prebuilt，你只需要按照如下方式直接运行你的应用：
```
electron .
```
如果你是局部安装，那运行：
```
./node_modules/.bin/electron .
```

# electron打包生成
electron应用开发完成之后，打包生产相应平台应用，通常推荐的工具有`electron-packager`和`asar`。
### electron-packager打包生成各平台的程序
用electron-packager打包生成各平台的程序，还是很方便的，但是有些坑。
速度慢
对某个平台第一次打包的时候，packager需要下载对应的electron包，那速度真是慢啊！
幸好淘宝有[electron镜像](http://npm.taobao.org/mirrors)。通过设置ELECTRON_MIRROR环境变量，可以大大加快速度。
```
export ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
```
如果这样还是没法下载，建议：


>直接从[electron包地址](https://github.com/electron/electron/releases)下载最新的`electron`包，然后放到｀~/.electron ｀目录下，重新执行 electron-prebuilt 即可，原理 electron-download 模块会把下载好的文件放到用户目录的 .electron 中，如果存在即不会重新下载。此方法同样适用于打包工具 electron-package、electron-builder


体积大
electron打包出来的程序，一般至少100M，对于一个小程序来说有点太大了，体积问题感觉是很多跨平台工具的通病。

```
Be careful not to include node_modules you don't want into your final app. electron-packager, electron-prebuilt and .git will be ignored by default. You can use --ignore to ignore files and folders via a regular expression. For example, --ignore=node_modules/package-to-ignore or --ignore="node_modules/(some-package[0-9]*|dev-dependency)".
```

记得使用packager的ignore参数，官方说明文档里面也说明了electron-packager、 electron-prebuilt 、.git默认会被ignore，为了减少体积，排除掉例如electron等程序运行不必要的包，如果指定了packager的输出路径在程序的目录，记得也排除掉，不然会越打包越大。

最后我使用的打包命令如下：
```
electron-packager <sourcedir> <sourcedir> --platform= <platform> win32,darwin --arch=all --version=0.33.7 --out=dist/ --overwrite --ignore=node_modules/electron-* --ignore=node_modules/.bin --ignore=.git --ignore=dist --prune
```

- `<sourcedir>`： 项目的位置
- `<sourcedir>`： 应用名
- `--platform=<platform>`： 打包的系统(darwin、win32、linux)
- `--arch=<arch>`： 系统位数(ia32、x64)
- `--icon=<icon>`： 指定应用的图标(Mac 为 .icns 文件，Windows 为 .ico 或 .png)
- `--out <out>`： 指定输出的目录
- `--version=<version>`： 指定编译的 electron-prebuilt 版本
简单例子

```
electron-packager . kaoqin --platform=win32 --arch=all --icon=./public/images/icon.ico --version=0.36.4 --out=../dist/ --overwrite=true --ignore=node_modules/electron-* --ignore=node_modules/.bin --ignore=.git --ignore=dist --prune=true
```

```
electron-packager <location of project> <name of project> <platform> <architecture> <electron version> <optional options>
把命令写在`package.json`的scripts里，比如`package`命令，则打包时运行:
```
其中，[例子](http://get.ftqq.com/7870.get)
* location of project是你项目文件夹的位置，
* name of project定义你的项目名，
* platform决定要构建的平台（*all* 包括Windows，Mac和Linux ），
* architecture决定构建哪个构架下（x86或x64，all表示两者），
* electron version让你选择要用的Electron版本

```
export ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
```

`注意`：使用`electron-packager`打包，os系统打包os.app文件，不能打包window文件，windows系统可以打包os文件以及exe文件。[electron-builder](https://github.com/electron-userland/electron-builder)打包msi、exe、dmg文件，os系统，只能打包dmg文件，window系统才能打包exe，msi文件。


## electron-builder打包配置

1.`package.json`文件需包含应用程序指定字段： name, description, version and author。

2.需在`package.json`文件配置，build字段：

```
"build": {
  "appId": "your.id",
  "app-category-type": "your.app.category.type",
  "win": {
    "iconUrl": "(windows-only) https link to icon"
  }
}
```
3.在工程根目录简历`build`文件夹包含background.png (MacOS DMG background), icon.icns (MacOS app icon) and icon.ico (Windows app icon)。

4.增加执行script：

```
"scripts": {
  "postinstall": "install-app-deps",
  "pack": "build --dir",
  "dist": "build"
}

```

### 使用asar
* 安装asar
```
npm i asar -g
npm i asar --save-dev
```
* 编辑package.json
```
"scripts": {
    "start": "electron .",
    "build": "electron-packager . MyFirstApp --ignore=node_modules/electron-* --platform=win32 --arch=x64 --version=0.32.3",
    "package": "asar pack MyFirstApp-win32-x64/resources/app MyFirstApp-win32-x64/resources/app.asar && rm -rf MyFirstApp-win32-x64/resources/app"
}
```

* 执行
```
npm run package
```


参考资料：
- [Electron打包成windows桌面程序](http://yhz.me/blog/Packaging-Electron-win32.html)
- [electron-builder](https://www.npmjs.com/package/electron-builder) - 直接打包成二进制文件
- [grunt-electron](https://github.com/sindresorhus/grunt-electron) - grunt plugin for electron-packager
- [gulp-electron](https://github.com/mainyaa/gulp-electron) - gulp plugin for electron-packager
- [electron-packager-interactive](https://github.com/Urucas/electron-packager-interactive) - an interactive CLI for electron-packager
- [nodejs+chromium 创建桌面应用程序](http://www.cnblogs.com/lmh2072005/p/5079860.html)
- [electron github教程](https://github.com/atom/electron/tree/master/docs-translations/zh-CN)
- [electron 文章](http://yuetai.larklearning.com/users/1?page=1)
- [使用 Electron 和 Vue.js 构建跨平台桌面应用](https://youhaosuda.com/blog/31)
- [用 Electron 开发桌面应用](http://gold.xitu.io/entry/5603549660b20d2d666cf0d2)
- [Electron API文档](https://github.com/electron/electron/tree/master/docs/api)
- [Awesome Electron 大全](https://github.com/sindresorhus/awesome-electron)