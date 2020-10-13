import { App, BrowserWindow } from 'electron'
// import watch from 'node-watch'
import { isDev } from '../common/config'
import * as fs from 'fs'


const reloadIndex = (win: BrowserWindow) => {
  if (isDev()) {
    // fs.watch('dist/js', console.log)
    fs.watch('dist/js', (event, filename) => {
      console.log(`reload: ${event}, ${filename}`)
      win.reload()
    })
  }
}

const relaunchApp = (app: App) => {
  if (isDev()) {
    fs.watch('dist/electron', (event, filename) => {
      console.log(`relaunch: ${JSON.stringify(event)}, ${filename}`)
      // app.relaunch()
      // app.exit()
    })
  }
}

export { reloadIndex, relaunchApp }
