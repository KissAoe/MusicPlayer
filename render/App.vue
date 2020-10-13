<template>
  <div>
    Hello Word

    <input :value="music">
    <button @click="init">初始化</button>
    <button @click="play">播放</button>
    <button @click="pause">暂停</button>
    <button @click="flush">刷新</button>
    <p>duration: {{ duration }}</p>
    <p>state: {{ state }}</p>
  </div>
</template>

<script>
import { Howl } from 'howler'


export default {
  name: 'App',
  data() {
    return {
      sound: null,
      music: '/Users/liyu/Downloads/临时/音乐/You Are Not Alone-Michael Jackson.flac',
      cureentPlayId: null,
      // duration: '',
      state: ''
    }
  },
  computed: {
    duration() {
      if(this.sound === null) {
        return 0
      }

      if(this.cureentPlayId === null) {
        return 0
      }

      return this.sound.duration(this.cureentPlayId)
    }
  },
  methods: {
    init() {
      this.sound = new Howl({
          src: [this.music]
        });
      },
    play() {
      if(this.cureentPlayId === null) {
        this.cureentPlayId = this.sound.play();
      } else {
        this.sound.play(this.cureentPlayId);
      }
    },
    pause() {
      this.sound.pause(this.cureentPlayId)
    },
    flush() {
      this.state = this.sound.duration(this.cureentPlayId)
    }
  }
}
</script>
