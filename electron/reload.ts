import { App, BrowserWindow } from 'electron'
import watch from 'node-watch'
import { isDev } from '../common/config'


const reloadIndex = (win: BrowserWindow) => {
  if (isDev()) {
   
    watch('dist/js', console.log)
    // watch('dist/js', (event: EventType, filename) => {
    //   console.log(`reload: ${event}, ${filename}`)
    //   win.reload()
    // })
  }
}

const relaunchApp = (app: App) => {
  if (isDev()) {
    watch('dist/electron', (event, filename) => {
      console.log(`relaunch: ${JSON.stringify(event)}, ${filename}`)
      // app.relaunch()
      // app.exit()
    })
  }
}

export { reloadIndex, relaunchApp }
