<template>
  <div id="app">
    <!-- <router-view/> -->
    <a class="git" title="git仓库" href="https://github.com/heikaimu/vue-picture-preview">
     <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
    </a>
    <h1>Vue-simple-picture-preview</h1>
    <div class="pic-wrapper">
      <Ppreview 
        :pictureList="pictureList"
        :width="100"
        :height="100"
        :borderRadius="5"
        :spaceBetween="5"
        menuType="all"
        :mouseScrollable="true"
        :mouseScrollSpeed="0.1"
        :thumbnail="true"
        :thumbnailWidth="50"
        :thumbnailHeight="70"
        :isEdit="true"
        @onDragstart="onDragstart"
        @onDragend="onDragend"
        @updateList="updateList"
      >
      </Ppreview>
    </div>
    <div class="new-list">
      {{pictureList}}
    </div>
    <div class="btns">
      <button class="btn" @click="addNewOne">新增</button>
    </div>
  </div>
</template>

<script>
import Ppreview from "vue-simple-picture-preview";
export default {
  data() {
    return {
      pictureList: [
        "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloSIUYAuAAO3jLTBc34AAt6LAPy1R4AA7ek000.jpg",
        "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloSITAcKAAMLsFkEUtAAAt6LAPvhBMAAwvI448.jpg",
        "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloOIVcm-AAVg9RKjYukAAt6LAPp_mAABWEN382.jpg",
        "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloOIIm70AAJ-NdKlhGkAAt6LAPg52EAAn5N148.jpg"
      ]
    };
  },
  methods: {
    onDragstart() {},
    onDragend() {},
    updateList(list) {
      this.pictureList = list;
    },
    addNewOne() {
      let num = Math.random() * this.pictureList.length - 1;
      num = Math.round(num);
      num = Math.max(num, 0);
      num = Math.min(num, this.pictureList.length - 1);
      this.pictureList = [...this.pictureList, this.pictureList[num]];
    }
  },
  components: {
    Ppreview
  }
};
</script>

<style scoped lang="less">
h1 {
	text-align: center;
	padding: 0 30px 30px 0;
	font-size: 30px;
	font-weight: 600;
	color: #444;
}
.git {
	display: inline-block;
	padding: 20px;
}
.pic-wrapper {
	width: 1200px;
	margin: 0 auto;
	padding: 10px;
	background: #444;
}
.new-list {
	width: 1200px;
	margin: 0 auto;
	padding: 10px;
	background: #e7e7e7;
}
.btns {
	display: flex;
	justify-content: center;
	.btn {
		margin-top: 40px;
		padding: 0 50px;
		height: 40px;
		background: rgba(0, 0, 0, 0.7);
		color: #fff;
		border: none;
		border-radius: 3px;
		cursor: pointer;
	}
}
</style>

