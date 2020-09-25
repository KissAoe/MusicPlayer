<template>
    <div class="music-panel">
      <div><input type="range" min="0" max="100" step="1"/></div>
      <div>波形</div>
      <div>立体声</div>
      <div class="music-panel-state">状态: 播放</div>
    </div>
</template>

<style lang="less">
  .music-panel {
    position: absolute;
    left: 20px;
    top: 70px;
    width: 330px;
    height: 150px
  }
</style>
