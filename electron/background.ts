// const { app, BrowserWindow } = require('electron')
import { app, BrowserWindow } from 'electron'
import { registTools } from './keyset'
import { reloadIndex, relaunchApp } from './reload'

const createWindow = () => {   
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  window.loadFile('./dist/index.html')

  registTools(window)
  reloadIndex(window)
}
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
  app.quit()
//   }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

relaunchApp(app)
// 您可以把应用程序其他的流程写在在此文件中
// 代码 也可以拆分成几个文件，然后用 require 导入。
