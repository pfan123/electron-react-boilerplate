# electron-react-boilerplate

`electron-react-boilerplate` --  Electron App 开发的 react 模板。

[Electron Official Documentation](https://electronjs.org/)

[electron-builder Official Documentation](https://www.electron.build/)

# Usage

### clone 仓库

```
git@github.com:pfan123/electron-react-boilerplate.git
```

### 安装

```
yarn start
```

### 开发

``` 
yarn dev // 开发调试

yarn build  // 打包 electron、webview 文件

yarn postinstall // 正式环境同步依赖

yarn start // 预览

yarn dist // 打包安装包
```

### 构建打包

`electron-builder` A complete solution to package and build a ready for distribution Electron app for macOS, Windows and Linux with “auto update” support out of the box.

- [Icons](https://www.electron.build/icons)
- [Auto Update](https://www.electron.build/auto-update)
- [Code Signing](https://www.electron.build/code-signing)
- [Multi Platform Build](https://www.electron.build/code-signing)


>


## Electron开发桌面应用

Electron 是一款可以利用 Web技术 开发跨平台桌面应用的框架，最初是 Github 发布的 Atom 编辑器衍生出的 Atom Shell，后更名为 Electron。Electron 提供了一个能通过 JavaScript 和 HTML 创建桌面应用的平台，同时集成 Node 来授予网页访问底层系统的权限。目前常见的有[NW](http://nwjs.io/)、[heX](http://hex.youdao.com/zh-cn/index.html)、[Electron](http://electron.atom.io/)、[MacGap](http://macgapproject.github.io/)、[MacGap案例switchhost](https://github.com/oldj/SwitchHosts)，可以打造桌面应用。



![electron结构](http://img.pfan123.com/electron-construct.jpg)

## electron项目

[electronic-wechat](https://github.com/geeeeeeeeek/electronic-wechat/blob/master/README_zh.md?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)

[WeFlow](https://github.com/weixin/WeFlow)

[Hozz](https://github.com/ppoffice/Hozz)

[hummingbird](https://github.com/stormtea123/hummingbird)

[ElectronOCR](https://github.com/wxyyxc1992/ElectronOCR)

[N1](https://github.com/nylas/N1)



## Electron 运行流程

![Electron 运行流程](http://img.pfan123.com/electron_process.jpg)

## Electron 主进程和渲染进程

- `Electron` 运行 `package.json` 的 `main` 脚本的进程被称为主进程。

- 在主进程中运行的脚本通过创建 `web` 页面来展示用户界面。 一个 `Electron` 应用总是有且只有一个主进程。

- 由于 `Electron` 使用了 `Chromium`来展示 `web` 页面，所以 `Chromium` 的多进程架构也被使用到。 每个 `Electron` 中的 `web` 页面运行在它自己的渲染进程中。

- 主进程使用 `BrowserWindow` 实例创建页面。每个 `BrowserWindow` 实例都在自己的渲染进程里运行页面。 当一个 `BrowserWindow`实例被销毁后，相应的渲染进程也会被终止

![electron 主进程](http://img.pfan123.com/electron_main.jpg)



## Electron 主进程和渲染进程中的模块

![electron 模块](http://img.pfan123.com/electron_api.jpg)

## Electron remote 模块

`remote` 模块提供了一种在渲染进程(网页)和主进程之间进行进程间通讯 (`IPC`) 的简便途径

`Electron` 中, 与 `GUI` 相关的模块(如 `dialog`, `menu` 等)只存在于主进程，而不在渲染进程中 。为了能从渲染进程中使用它们，需要用`ipc`模块来给主进程发送进程间消息。使用 `remote` 模块，可以调用主进程对象的方法，而无需显式地发送进程间消息，这类似于 `Java` 的 `RMI`

## Electron快速上手demo

[electron-boilerplate](https://github.com/chuyik/electron-boilerplate)

[electron-connect](https://github.com/Quramy/electron-connect)


## 参考资料：

- [用 Electron 开发桌面应用](http://gold.xitu.io/entry/5603549660b20d2d666cf0d2)

- [Electron API文档](https://github.com/electron/electron/tree/master/docs/api)

- [Awesome Electron 大全](https://github.com/sindresorhus/awesome-electron)

