<template>
  <div class="">
    <div class="group">
      <div class="title"></div>
      <div class="content">
        <div class="left">
          <PictureView v-if="pictureList" :pictureList="pictureList"></PictureView>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PictureView from 'vue-simple-picture-preview';
export default {
  data() {
    return {
      pcitureList: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527055313908&di=6d5e33060227a77b855732239f6ec791&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F038490758b8eb35a801219c779c8f19.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527055341963&di=d61fcca00e3d402170829098cb69bf9d&imgtype=0&src=http%3A%2F%2Fpic76.nipic.com%2Ffile%2F20150814%2F10825287_120646612000_2.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527045277&di=5f6b675ed2106e8d3404262f596178e2&src=http://pic39.nipic.com/20140313/2531170_174802041351_2.jpg"
      ]
    };
  }
};
</script>

<style>
</style>
