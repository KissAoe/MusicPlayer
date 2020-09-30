module.exports = {
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'electron/background.ts',
      builderOptions: {
        win: {
          icon: './public/app.ico'
        },
        mac: {
          icon: './public/app.png'
        },
        productName: '音乐播发器'
      }
    }
  }
}
