'use strict'

import 'path'
import { Howl } from 'howler'
import { ipcMain } from 'electron'

console.log('MusicService start')

ipcMain.on('playMusic', (event, arg) => {
  console.log(event)
  console.log(arg)
  const sound = new Howl({
    src: '/Users/liyu/Downloads/待处理音乐/此生不换-青鸟飞鱼.flac',
    autoplay: true,
    onplay: function () {
      console.log('onplay')
    },
    onload: function () {
      console.log('onload')
    },
    onend: function () {
      console.log('onend')
    },
    onpause: function () {
      console.log('onpause')
    },
    onstop: function () {
      console.log('onstop')
    },
    onseek: function () {
      console.log('onseek')
    }
  })
  console.log(sound)
  const num = sound.play()
  console.log(num)
})
