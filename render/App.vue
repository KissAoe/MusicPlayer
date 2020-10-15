<template>
  <div>
    
    <input type="file" multiple @change="changePlayList">
    <p>{{ musicSeek }} / {{ musicDuration }}</p>
    <!-- <button @click="init">初始化</button>
    <button @click="play">播放</button>
    <button @click="pause">暂停</button>
    <button @click="flush">刷新</button>
    <p>duration: {{ duration }}</p>
    <p>state: {{ state }}</p> -->

    <br/>
    <div v-for="(file, index) in playlist">
      <p>{{ index }}, {{ file.name }}</p>
      <button @click="play(index)">播放</button>
      <button @click="pause(index)">暂停</button>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash'
import { Howl } from 'howler'

export default {
  name: 'App',
  data() {
    return {
      playlist: [],
      playIndex: 0,

      musicSeek: 0,
      musicDuration: 0,
      // music: '/Users/liyu/Downloads/临时/音乐/You Are Not Alone-Michael Jackson.flac',
      // duration: '',
      state: ''
    }
  },
  methods: {
    changePlayList(event) {
      this.playlist = event.target.files
    },
    init(musicList) {
      if(musicList === null) {
        musicList = [this.music]
      }
      
      this.sound = howl
    },
    play(index) {
      const music = this.playlist[index]
      let sound
      if(music.howl) {
        sound = music.howl
      } else {
        sound = music.howl = new Howl({
            src: music.path,
            onplay: () => {
              console.log(`play: ${music.name}`)
              this.musicDuration = Math.round(sound.duration())
              window.requestAnimationFrame(this.step)
            },
            onload: () => {
              console.log(`load: ${music.name}`)
            },
            onend: () => {
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
              window.requestAnimationFrame(this.step)
            }
        });
      }
      sound.play()
      this.playIndex = index
      // if(this.sound === null) {
      //   this.init()
      // }
      // if(this.cureentPlayId === null) {
      //   this.cureentPlayId = this.sound.play();
      // } else {
      //   this.sound.play(this.cureentPlayId);
      // }
    },
    pause(index) {
      const music = this.playlist[index]
      if(!music.howl) {
        return
      }
      music.howl.pause()
    },
    skipTo: function(index) {
      const sound = this.playlist[this.playIndex].howl

      if (sound) {
        sound.stop()
      }

      this.play(index)
    },
    step: function() {
      const sound = this.playlist[this.playIndex].howl

      if(!sound) {
        return
      }
      const seek = sound.seek() || 0;

      this.musicSeek = Math.round(seek)
      if (sound.playing()) {
        window.requestAnimationFrame(() => {
          this.step();
        });
      }

      // // Determine our current seek position.
      // var seek = sound.seek() || 0;
      // timer.innerHTML = self.formatTime(Math.round(seek));
      // progress.style.width = (((seek / sound.duration()) * 100) || 0) + '%';

      // // If the sound is still playing, continue stepping.
      // if (sound.playing()) {
      //   requestAnimationFrame(self.step.bind(self));
      // }
    },
    formatTime: function(secs) {
      var minutes = Math.floor(secs / 60) || 0;
      var seconds = (secs - minutes * 60) || 0;

      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
  }
}

</script>
