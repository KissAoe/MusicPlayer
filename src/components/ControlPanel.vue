<template>
    <div class="control-panel">
      <div>▶️</div>
      <div>⏹</div>
      <div>⏮</div>
      <div>⏭</div>
      <div class="control-volume-icon">
        <svg t="1600919038393" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1134" width="200" height="200"><path d="M803.413333 391.253333a42.666667 42.666667 0 1 0-60.586666 60.586667A85.333333 85.333333 0 0 1 768 512a85.333333 85.333333 0 0 1-30.293333 65.28 42.666667 42.666667 0 0 0-5.546667 60.16 42.666667 42.666667 0 0 0 60.16 5.12A170.666667 170.666667 0 0 0 853.333333 512a173.226667 173.226667 0 0 0-49.92-120.746667z m-187.733333-216.32a42.666667 42.666667 0 0 0-42.666667 5.12L369.066667 341.333333H213.333333a42.666667 42.666667 0 0 0-42.666666 42.666667v256a42.666667 42.666667 0 0 0 42.666666 42.666667h155.733334l201.813333 161.28A42.666667 42.666667 0 0 0 597.333333 853.333333a38.826667 38.826667 0 0 0 18.346667-4.266666A42.666667 42.666667 0 0 0 640 810.666667V213.333333a42.666667 42.666667 0 0 0-24.32-38.4zM554.666667 721.92l-144.213334-115.2A42.666667 42.666667 0 0 0 384 597.333333H256v-170.666666h128a42.666667 42.666667 0 0 0 26.453333-9.386667L554.666667 302.08z" p-id="1135" fill="#0000"></path></svg>
      </div>
      <div class="control-volume">
        <input type="range" min="0" max="100" step="1"/>
      </div>
    </div>
</template>

<style lang="less">

.control-panel {
    position: absolute;
    left: 20px;
    top: 240px;
    width: calc(~'100%' - 40px);
    height: 40px;
    display: flex;

    .control-volume-icon {
        width: 40px;
    }

    .control-volume {
        width: 150px;
    }

    div {
        display: flex;
        width: 70px;
        text-align: center;
        align-content: center;
    }
}

</style>
