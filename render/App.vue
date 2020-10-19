<template>
  <div>
     <input type="file" multiple @change="changePlayList"><br/>
    <div>
      <p class="playing-music-title" v-if="playIndex > -1">{{ playIndex + 1 }}.{{ musicList[playIndex].name }}</p>
    </div>
    <div>
      <input class="playing-music-progress" type="range" step="any" style="width:100%" min="0" 
        v-if="playIndex > -1"
        :value="processTime"
        :max="musicList[playIndex].duration"
        @mousedown="onDownMusicTime"
        @mousemove="onMoveMusicTime"
        @mouseup="onUpMusicTime">
    </div>

    <button @click="play()">播放</button>
    <button @click="pause()">暂停</button>
    <button @click="play(playIndex-1)">上一首</button>
    <button @click="play(playIndex+1)">下一首</button>

    <progress 
      v-if="playIndex > -1"
      :value="musicList[playIndex].time"
      :max="musicList[playIndex].duration" style="width:100%"></progress>

    <!-- <p v-if="playIndex > -1">{{ musicList[playIndex].time }} / {{ musicList[playIndex].duration }}</p> -->
    <p v-if="playIndex > -1">{{ formatTime(musicList[playIndex].time) }}</p>

    <div v-for="(music, index) in musicList">
      <p>{{ index }}, {{ music.name }}</p>
      <button @click="play(index)">播放{{ music.name }}</button>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash'
import { Howl } from 'howler'
// import './style/App.less'

export default {
  name: 'App',
  data() {
    return {
      musicList: [],
      playIndex: -1,
      mode: '', // 列表随机, 列表顺序
      again: '', // 单曲循环, 列表循环, 不循环
      processTime: 0,
      controlProcess: false
    }
  },
  methods: {
    changePlayList(event) {
      this.musicList = _.map(event.target.files, function(file) {
        return {  
          name: file.name,
          path: file.path,
          time: 0,
          duration: 0,
          sound: null
        }
      })
      this.playIndex = 0
    },
    onDownMusicTime(event) {
      this.controlProcess = true
    },
    onMoveMusicTime(event) {
      if(!this.controlProcess) {
        return
      }
      const value = event.target.value
      this.processTime = value
    },
    onUpMusicTime(event) {
      this.controlProcess = false

      const value = event.target.value
      this.musicList[this.playIndex].sound.seek(value)
      this.musicList[this.playIndex].time = value
    },
    onClickMusicTime(event) {
      const value = event.target.value
      this.musicList[this.playIndex].sound.seek(value)
      this.musicList[this.playIndex].time = value
      this.processTime = value
    },
    onChangeMusicTime(event) {
      // this.controlProcess = false
    },
    init(index) {
      const music = this.musicList[index]
      const sound = new Howl({
          src: music.path,
          onplay: () => {
            console.log(`play: ${music.name}`)
            // this.musicDuration = Math.round(sound.duration())
            this.musicList[index].duration = sound.duration()
            window.requestAnimationFrame(this.step)
          },
          onload: () => {
            console.log(`load: ${music.name}`)
          },
          onend: () => {
            this.play(this.playIndex + 1)
            console.log(`end: ${music.name}`)
          },
          onpause: () => {
            console.log(`pause: ${music.name}`)
          },
          onstop: () => {
            console.log(`stop: ${music.name}`)
          },
          onseek: () => {
            console.log(`seek: ${music.name}`)
            // window.requestAnimationFrame(this.step)
          }
      });
      return sound
    },
    play(index) {
      // 全局开关
      if(typeof(index) !== 'number') {
        index = this.playIndex
      }

      // 控制范围
      if(index < 0) {
        index = 0
      }
      if(index >= this.musicList.length) {
        index = this.musicList.length - 1
      }

      // 切换音乐
      if(index !== this.playIndex) {
        const sound = this.musicList[this.playIndex].sound
        if(sound !== null && sound.playing()) {
          sound.pause()
          sound.seek(0)
        }
      }

      // 获取音乐
      let sound
      if(this.musicList[index] && this.musicList[index].sound) {
        sound = this.musicList[index].sound
      } else {
        sound = this.musicList[index].sound = this.init(index)
      }

      
      if(!sound.playing()) {
        // 播放
        sound.play()
        this.playIndex = index
      }
    },
    pause(index) {
      // 全局开关
      if(typeof(index) !== 'number') {
        index = this.playIndex
      }

      if(index < 0) {
        return
      }

      const sound = this.musicList[index].sound
      if(!sound) {
        return
      }
      sound.pause()
    },
    step: function() {
      const sound = this.musicList[this.playIndex].sound
      if(sound === null) {
        return
      }

      this.musicList[this.playIndex].time = sound.seek()
      if(!this.controlProcess) {
        this.processTime = sound.seek()
      }
      if (sound.playing()) {
        window.requestAnimationFrame(() => this.step());
      }
    },
    formatTime: function(secs) {
      const minutes = Math.floor(secs / 60) || 0;
      const seconds = Math.round(secs - minutes * 60) || 0;

      return `${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`
    }
  }
}

</script>
