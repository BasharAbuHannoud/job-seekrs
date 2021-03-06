const Dotenv = require('dotenv-webpack');
require('dotenv').config({ path: './.env' }); 

module.exports = {

  plugins: [
    new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env)
      }),
  ]

};