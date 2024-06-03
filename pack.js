const webpack = require('webpack');
const config = require('./webpack.config.js');

const complier = webpack(config);

complier.run((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('successful!');
  }
})
