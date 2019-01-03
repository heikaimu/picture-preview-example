<template>
  <div id="app">
    <!-- <router-view/> -->
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
	padding: 30px;
	font-size: 30px;
	font-weight: 600;
	color: #444;
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

