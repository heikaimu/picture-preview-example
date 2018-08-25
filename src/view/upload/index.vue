<template>
    <div class="">
        <div class="plugin">
        <PPreview
          v-if="pictureList"
          :pictureList="pictureList"
          :isEdit="true"
        >
        <Upload @uploadSuccess="uploadSuccess"></Upload>
        </PPreview>
        </div>
        <div class="work-station">
          <div class="left">
            <pageMarkedown></pageMarkedown>
          </div>
          <!-- <div class="right">
            <UploadMarkdown></UploadMarkdown>
          </div> -->
        </div>
    </div>
</template>

<script>
import Upload from "./upload";
import pageMarkedown from "./markdown";
import UploadMarkdown from "./uploadMarkdown";
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
  methods: {
    uploadSuccess(result) {
      const url = "http://pb10jnkff.bkt.clouddn.com/" + result.hash;
      this.pictureList.push(url);
    }
  },
  components: {
    Upload,
    pageMarkedown,
    UploadMarkdown
  }
};
</script>

<style scoped lang="less">
.work-station {
  padding: 10px;
  .left {
  }
  // .right {
  //   padding-left: 20px;
  // }
}
</style>
