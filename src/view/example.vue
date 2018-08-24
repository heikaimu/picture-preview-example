<template>
  <div class="">
    <div class="group">
      <div class="title">最简单的数据格式</div>
      <div class="content">
        <div class="left">
          <PictureView v-if="pictureList" :pictureList="pictureList"></PictureView>
        </div>
        <div class="right">
          <div class="code-title">template</div>
          <div class="code">
            
          </div>
          <div class="code-title">javascript</div>
          <div class="code">
            <p>{{example1.text2}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PictureView from "vue-simple-picture-preview";
export default {
  data() {
    return {
      pictureList: [
        "http://p09vugqdu.bkt.clouddn.com/20180525091245.jpg",
        "http://p09vugqdu.bkt.clouddn.com/20180525091249.jpg",
        "http://p09vugqdu.bkt.clouddn.com/20180525091252.jpg",
        "http://p09vugqdu.bkt.clouddn.com/20180525091253.jpg"
      ],
      example1: {
        text1:
          '<PictureView v-if="pictureList" :pictureList="pictureList"></PictureView>',
        text2: `pictureList: [
          'http://p09vugqdu.bkt.clouddn.com/20180525091245.jpg',
          'http://p09vugqdu.bkt.clouddn.com/20180525091249.jpg',
          'http://p09vugqdu.bkt.clouddn.com/20180525091252.jpg',
          'http://p09vugqdu.bkt.clouddn.com/20180525091253.jpg'
        ]`
      }
    };
  },
  components: {
    PictureView
  }
};
</script>

<style scoped lang="less">
.group {
  .title {
    text-align: center;
    padding: 30px 0;
    font-size: 20px;
    letter-spacing: 1px;
  }
  .content {
    display: flex;
    .left {
      flex: 0 0 340px;
      width: 340px;
    }
    .right {
      flex: 1;
      padding-left: 20px;
      margin-right: 20px;
    }
  }
}
</style>
