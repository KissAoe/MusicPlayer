// 快捷键设置

import { BrowserWindow, globalShortcut } from 'electron'

const registTools = (win: BrowserWindow) => {
    globalShortcut.register('F12', () => {
        console.log(`isOpen:${win.webContents.isDevToolsOpened()}`)
        if (win.webContents.isDevToolsOpened()) {
             win.webContents.closeDevTools()
        } else {
             win.webContents.openDevTools()
        }
       
    })
}

export { registTools }
