<template>
    <div class="content">
        <div class="left">
        <div class="title">最简单的数据格式</div>
          <PPreview v-if="pictureList" :pictureList="pictureList"></PPreview>
        </div>
        <div class="right">
          <pageMarkedown></pageMarkedown>
        </div>
      </div>
</template>

<script>
import pageMarkedown from './markdown';
export default {
  data() {
    return {
      pictureList: [
        "http://p09vugqdu.bkt.clouddn.com/20180525091245.jpg",
        "http://p09vugqdu.bkt.clouddn.com/20180525091249.jpg",
        "http://p09vugqdu.bkt.clouddn.com/20180525091252.jpg",
        "http://p09vugqdu.bkt.clouddn.com/20180525091253.jpg"
      ]
    };
  },
  components: {
    pageMarkedown
  }
};
</script>

<style scoped lang="less">
.content {
    display: flex;
    .left {
      flex: 0 0 340px;
      width: 340px;
      .title {
        text-align: center;
        padding: 30px 0;
        font-size: 20px;
        letter-spacing: 1px;
      }
    }
    .right {
      flex: 1;
      padding-left: 20px;
      margin-right: 20px;
    }
  }
</style>
