<template>
    <div class="">
        <div class="plugin">
        <PPreview
          v-if="pictureList"
          :pictureList="pictureList"
          :props="defaultProps"
          :width="form.width"
          :height="form.height"
          :borderRadius="form.borderRadius"
          :isMenu="form.isMenu"
          :isRotate="form.isRotate"
          :isMove="form.isMove"
          :isScale="form.isScale"
          :isSingleClickToClose="form.isSingleClickToClose"
          :doubleRestore="form.doubleRestore"
          :isMousewheelScale="form.isMousewheelScale"
          :isEdit="form.isEdit"
        ></PPreview>
        </div>
        <div class="work-station">
            <div class="left">
                <pageMarkedown :form="form"></pageMarkedown>
            </div>
            <div class="right">
              <mu-form :model="form" class="mu-demo-form" label-width="100">
                <mu-form-item prop="width" label="width">
                  <mu-slider v-model="form.width" :max="200"></mu-slider>
                </mu-form-item>
                <mu-form-item prop="height" label="height">
                  <mu-slider v-model="form.height" :max="200"></mu-slider>
                </mu-form-item>
                <mu-form-item prop="borderRadius" label="borderRadius">
                  <mu-slider v-model="form.borderRadius" :max="100"></mu-slider>
                </mu-form-item>
                <mu-row style="margin-bottom: 20px;">
                    <mu-col span="4">
                      <mu-switch v-model="form.isMenu" label="isMenu"></mu-switch>
                    </mu-col>
                    <mu-col span="4">
                      <mu-switch v-model="form.isRotate" label="isRotate"></mu-switch>
                    </mu-col>
                    <mu-col span="4">
                      <mu-switch v-model="form.isMove" label="isMove"></mu-switch>
                    </mu-col>
                  </mu-row>
                  <mu-row style="margin-bottom: 20px;">
                    <mu-col span="4">
                      <mu-switch v-model="form.isScale" label="isScale"></mu-switch>
                    </mu-col>
                    <mu-col span="4">
                      <mu-switch v-model="form.isSingleClickToClose" label="isSingleClickToClose"></mu-switch>
                    </mu-col>
                    <mu-col span="4">
                      <mu-switch v-model="form.doubleRestore" label="doubleRestore"></mu-switch>
                    </mu-col>
                  </mu-row>
                  <mu-row>
                    <mu-col span="4">
                      <mu-switch v-model="form.isMousewheelScale" label="isMousewheelScale"></mu-switch>
                    </mu-col>
                    <mu-col span="4">
                      <mu-switch v-model="form.isEdit" label="isEdit"></mu-switch>
                    </mu-col>
                  </mu-row>
              </mu-form>
            </div>
        </div>
        <div class="table-wrapper">
          <mu-paper>
            <mu-data-table :columns="columns" :data="list.slice(0, 15)">
              <template slot-scope="scope">
                <td>{{scope.row.name}}</td>
                <td>{{scope.row.desc}}</td>
                <td>{{scope.row.type}}</td>
                <td>{{scope.row.default}}</td>
              </template>
            </mu-data-table>
          </mu-paper>
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
      },
      form: {
        width: 100,
        height: 100,
        borderRadius: 10,
        isMenu: true,
        isRotate: true,
        isMove: true,
        isScale: true,
        isSingleClickToClose: true,
        doubleRestore: true,
        isMousewheelScale: true,
        isEdit: false
      },
      columns: [
          { title: '方法名称', name: 'name' },
          { title: '描述', name: 'desc'},
          { title: '类型', name: 'type'},
          { title: '默认值', name: 'default'},
      ],
      list: [
        {
          name: 'wdith',
          desc: '宽度',
          type: 'number',
          default: 100
        },
        {
          name: 'height',
          desc: '高度',
          type: 'number',
          default: 100
        },
        {
          name: 'borderRadius',
          desc: '圆角',
          type: 'number',
          default: 10
        },
        {
          name: 'isMenu',
          desc: '是否有菜单',
          type: 'Boolean',
          default: 'true'
        },
        {
          name: 'isRotate',
          desc: '是否可旋转',
          type: 'Boolean',
          default: 'true'
        },
        {
          name: 'isMove',
          desc: '是否可前进后退',
          type: 'Boolean',
          default: 'true'
        },
        {
          name: 'isScale',
          desc: '是否可缩放',
          type: 'Boolean',
          default: 'true'
        },
        {
          name: 'isSingleClickToClose',
          desc: '是否可单击关闭大图',
          type: 'Boolean',
          default: 'true'
        },
        {
          name: 'doubleRestore',
          desc: '是否双击还原',
          type: 'Boolean',
          default: 'true'
        },
        {
          name: 'isMousewheelScale',
          desc: '是否可鼠标滚轮缩放',
          type: 'Boolean',
          default: 'true'
        },
        {
          name: 'isEdit',
          desc: '是否开启编辑模式',
          type: 'Boolean',
          default: 'false'
        }
      ]
    };
  },
  components: {
    pageMarkedown
  }
};
</script>

<style scoped lang="less">
  .work-station{
    padding: 10px;
    display: flex;
    .left{
      flex: 0 0 500px;
    }
    .right{
      flex: 1;
      padding-left: 100px;
    }
  }
  .table-wrapper{
    margin: 30px 10px;
  }
</style>
