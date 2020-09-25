<template>
  <div id="app">
    <!-- <MusicInfo />
    <MusicPanel />
    <ControlInfo />
    <ControlPanel /> -->
    <input type="file" title="请选择" webkitdirectory multiple>
    <button @click="selectFile">选择文件</button>
    <div>
      123
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MusicInfo from '@/components/MusicInfo.vue'
import MusicPanel from '@/components/MusicPanel.vue'
import ControlInfo from '@/components/ControlInfo.vue'
import ControlPanel from '@/components/ControlPanel.vue'

import { Howl } from 'howler'
import { ipcRenderer, remote } from 'electron'

export default Vue.extend({
  components: {
    // MusicInfo, MusicPanel, ControlInfo, ControlPanel
  },
  data () {
    return {
      volume: 90
    }
  },
  methods: {
    selectFile () {
      const options = {
        title: '请选择音乐所在的目录'
      }
      ipcRenderer.send('openMusicDialog', options)
      // remote.dialog.showOpenDialog(options)
    }
  },
  mounted () {
    console.log(ipcRenderer)
    console.log(remote)
    // console.log(shell)
    // shell.beep()
    // // const sound = new Howl({
    // //   src: ['file:///Users/liyu/Downloads/待处理音乐/他一定很爱你-阿杜.flac']
    // // })

    // // sound.play()
  }
})
</script>

<style lang="less">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;

  div {
    border: 1px solid red;
  }

//   .music-info {
//     position: absolute;
//     left: 20px;
//     top: 10px;
//     width: calc(~'100%' - 40px);
//     height: 40px;
//   }

//   .music-panel {
//     position: absolute;
//     left: 20px;
//     top: 70px;
//     width: 330px;
//     height: 150px
//   }

//   .control-info {
//     position: absolute;
//     left: 370px;
//     top: 70px;
//     width: calc(~'100%' - 370px - 20px);
//     height: 150px
//   }

//   .control-panel {
//     position: absolute;
//     left: 20px;
//     top: 240px;
//     width: calc(~'100%' - 40px);
//     height: 40px;
//     display: flex;

//     .control-volume-icon {
//       width: 40px;
//     }

//     .control-volume {
//       width: 150px;
//     }

//     div {
//       display: flex;
//       width: 70px;
//       text-align: center;
//       align-content: center;
//     }
//   }
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
