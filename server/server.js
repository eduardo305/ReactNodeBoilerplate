const express = require('express');
const path = require('path');
const config = require('./config/config');

const app = express();

const registerInitialEndPoint = new Promise((resolve, reject) => {
  if (process.env.NODE_ENV !== 'production') {
    const devMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('../webpack.config.js');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    const compiler = webpack(webpackConfig);
    const customWepbackMiddleware = devMiddleware(compiler, {
      stats: {
        colors: true,
        timings: true,
        hash: false,
        chunks: false,
      },
    });
    app.use(customWepbackMiddleware);
    app.use(webpackHotMiddleware(compiler));

    resolve();
  } else {
    resolve();
  }
});

registerInitialEndPoint.then(() => {
  app.use(express.static('../dist'));
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}).catch((error) => {
  console.log(error);
});

app.listen(process.env.PORT || config.port, () => {
  console.log(`Server started at port ${config.port}`);
});
