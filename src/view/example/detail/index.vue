<template>
    <div class="content">
        <div class="left">
        <div class="title">复杂的数据格式</div>
          <PPreview v-if="pictureList" :pictureList="pictureList" :props="defaultProps"></PPreview>
        </div>
        <div class="right">
          <pageMarkedown></pageMarkedown>
        </div>
      </div>
</template>

<script>
import pageMarkedown from "./markdown";
export default {
  data() {
    return {
      pictureList: [
        {
          thumbnail: "/20180525091245.jpg?imageView2/5/w/200/h/200/q/75|imageslim",
          original: "/20180525091245.jpg"
        },
        {
          thumbnail: "/20180525091249.jpg?imageView2/5/w/200/h/200/q/75|imageslim",
          original: "/20180525091249.jpg"
        },
        {
          thumbnail: "/20180525091252.jpg?imageView2/5/w/200/h/200/q/75|imageslim",
          original: "/20180525091252.jpg"
        },
        {
          thumbnail: "/20180525091253.jpg?imageView2/5/w/200/h/200/q/75|imageslim",
          original: "/20180525091253.jpg"
        }
      ],
      defaultProps: {
        originalKey: "original",
        thumbnailKey: "thumbnail",
        domain: "http://p09vugqdu.bkt.clouddn.com"
      }
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
