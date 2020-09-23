'use strict'

import { Menu } from 'electron'

console.log('load menu')
export const dockMenu = Menu.buildFromTemplate([
  {
    label: 'New Window',
    click: function () { console.log('New Window') }
  }, {
    label: 'New Window with Settings',
    submenu: [
      { label: 'Basic' },
      { label: 'Pro' }
    ]
  },
  { label: 'New Command...' }
])
