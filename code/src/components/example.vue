<template>
  <el-container>
    <el-header class="header">Vue图片预览组件实例展示</el-header>
    <el-main>
      <el-row class="example">
        <el-col :span="12">
          <div class="pic-container">
            <PictureView
              :pictureList="pictureList"
              :props="defaultProps"
              :width="form.width"
              :height="form.width"
              :borderRadius="form.borderRadius"
              :isMenu="form.isMenu"
              :isRotate="form.isRotate"
              :isMove="form.isMove"
              :isScale="form.isScale"
              :isSingleClickToClose="form.isSingleClickToClose"
              :doubleRestore="form.doubleRestore"
              :isMousewheelScale="form.isMousewheelScale"
              @move="handleNext"
            ></PictureView>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="form-container">
            <h3>配置参数</h3>
            <el-form ref="form" :model="form" label-width="150px">
              <el-form-item label="菜单">
                <el-switch v-model="form.isMenu"></el-switch>
              </el-form-item>
              <el-form-item label="上下页">
                <el-switch v-model="form.isMove"></el-switch>
              </el-form-item>
              <el-form-item label="旋转">
                <el-switch v-model="form.isRotate"></el-switch>
              </el-form-item>
              <el-form-item label="缩放">
                <el-switch v-model="form.isScale"></el-switch>
              </el-form-item>
              <el-form-item label="单机背景关闭">
                <el-switch v-model="form.isSingleClickToClose"></el-switch>
              </el-form-item>
              <el-form-item label="双击初始图片状态">
                <el-switch v-model="form.doubleRestore"></el-switch>
              </el-form-item>
              <el-form-item label="鼠标缩放">
                <el-switch v-model="form.isMousewheelScale"></el-switch>
              </el-form-item>
              <el-form-item label="尺寸">
                <el-slider
                  v-model="form.width"
                  :min="40"
                  :max="200"
                  show-input>
                </el-slider>
              </el-form-item>
              <el-form-item label="圆角">
                <el-slider
                  v-model="form.borderRadius"
                  :max="150"
                  show-input>
                </el-slider>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <el-row class="link">
        <el-col :span="24">
          <a href="https://github.com/heikaimu/vue-picture-preview">github地址：https://github.com/heikaimu/vue-picture-preview</a>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import PictureView from 'vue-simple-picture-preview';
  export default {
    data() {
      return {
        pictureList: [
          {
            thumbnail: '/20180525091245.jpg?imageView2/5/w/200/h/200/q/75|imageslim',
            original: '/20180525091245.jpg'
          },
          {
            thumbnail: '/20180525091249.jpg?imageView2/5/w/200/h/200/q/75|imageslim',
            original: '/20180525091249.jpg'
          },
          {
            thumbnail: '/20180525091252.jpg?imageView2/5/w/200/h/200/q/75|imageslim',
            original: '/20180525091252.jpg'
          },
          {
            thumbnail: '/20180525091253.jpg?imageView2/5/w/200/h/200/q/75|imageslim',
            original: '/20180525091253.jpg'
          },
          {
            thumbnail: '/20180525091245.jpg?imageView2/5/w/200/h/200/q/75|imageslim',
            original: '/20180525091245.jpg'
          },
          {
            thumbnail: '/20180525091249.jpg?imageView2/5/w/200/h/200/q/75|imageslim',
            original: '/20180525091249.jpg'
          },
          {
            thumbnail: '/20180525091252.jpg?imageView2/5/w/200/h/200/q/75|imageslim',
            original: '/20180525091252.jpg'
          },
          {
            thumbnail: '/20180525091253.jpg?imageView2/5/w/200/h/200/q/75|imageslim',
            original: '/20180525091253.jpg'
          },
          {
            thumbnail: '/20180525091245.jpg?imageView2/5/w/200/h/200/q/75|imageslim',
            original: '/20180525091245.jpg'
          },
          {
            thumbnail: '/20180525091249.jpg?imageView2/5/w/200/h/200/q/75|imageslim',
            original: '/20180525091249.jpg'
          },
          {
            thumbnail: '/20180525091252.jpg?imageView2/5/w/200/h/200/q/75|imageslim',
            original: '/20180525091252.jpg'
          },
          {
            thumbnail: '/20180525091253.jpg?imageView2/5/w/200/h/200/q/75|imageslim',
            original: '/20180525091253.jpg'
          }
        ],
        defaultProps: {
          originalKey: 'original',
          thumbnailKey: 'thumbnail',
          domain: 'http://p09vugqdu.bkt.clouddn.com'
        },
        form: {
          width: 100,
          height: 100,
          borderRadius: 5,
          isMenu: true,
          isRotate: true,
          isMove: true,
          isScale: true,
          isSingleClickToClose: true,
          doubleRestore: true,
          isMousewheelScale: true
        }
      }
    },
    methods: {
      handleNext(data) {
        console.log(data);
      },
      changeToThumbnail() {
        this.defaultProps.originalKey = 'thumbnail';
      },
      changeToOriginal() {
        this.defaultProps.originalKey = 'original';
      }
    },
    components: {
      PictureView
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header{
    background: #333;
    text-align: center;
    line-height: 60px;
    color: #fff;
  }
  .example{
    background: #fff;
  }
  .pic-container{
    background: #fff;
  }
  .form-container{
    background: #f2f2f2;
    padding: 20px;
  }
  .link{
    padding-top: 100px;
    text-align: center;
    a{
      color: #333;
    }
  }
</style>
