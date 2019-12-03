const fs = require('fs')
const path = require('path')

module.exports = {
  paths: (paths, env) => {
    paths.appBuild = path.resolve(__dirname, './dist')
    paths.appPublic = path.resolve(__dirname, './webview/public')
    paths.appHtml = path.resolve(__dirname, './webview/public/index.html')
    paths.appIndexJs = path.resolve(__dirname, './webview/src/index.tsx')
    paths.appSrc = path.resolve(__dirname, './webview/src')
    paths.testsSetup = path.resolve(__dirname, './webview/src/setupTests.js')
    paths.proxySetup = path.resolve(__dirname, './webview/src/setupProxy.js')
    paths.appTypeDeclarations = path.resolve(__dirname, './webview/src/react-app-env.d.ts')
    // paths.appBuild = path.resolve(__dirname, '../dist')
		return paths
	},
  devServer: (configFunction) => {
    return function(proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost)

      config.setup = (app, server) => {
        app.get('/renderer.js', (req, res) => {
          res.setHeader('Content-Type', 'text/javascript')
          const content = fs.readFileSync('./app/renderer.js', 'utf8')
          res.send(content)
        })
      }

      // Return your customised Webpack Development Server config.
      return config
    }
  }
}
