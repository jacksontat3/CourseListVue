module.exports = {
  devServer: {
    host: 'localhost',
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/courselist/',
  // transpileDependencies: ['vuetify'],
};