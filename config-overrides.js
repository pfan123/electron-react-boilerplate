const fs = require('fs')

module.exports = {
  devServer: (configFunction) => {
    return function(proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost)

      config.setup = (app, server) => {
        app.get('/renderer.js', (req, res) => {
          res.setHeader('Content-Type', 'text/javascript')
          const content = fs.readFileSync('./renderer.js', 'utf8')
          console.error('content', content)
          res.send(content)
        })
      }

      // Return your customised Webpack Development Server config.
      return config;
    }
  }
}
