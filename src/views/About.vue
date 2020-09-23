<template>
  <div class="about">
    <input type="file">
    <h1 @click="play">This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Howl } from 'howler'

import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      file: ''
    }
  },
  methods: {
    play () {
      const sound = new Howl({
        src: ['sound.mp3']
      })

      sound.play()
    }
  }
})
</script>
