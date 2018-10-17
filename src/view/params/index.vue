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
          :spaceBetween="form.spaceBetween"
          :isMousewheelScale="form.isMousewheelScale"
          :mousewheelScaleSpeed="form.mousewheelScaleSpeed"
          :isEdit="form.isEdit"
          :menuType="form.menuType"
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
                <mu-form-item prop="spaceBetween" label="spaceBetween">
                  <mu-slider v-model="form.spaceBetween" :max="100"></mu-slider>
                </mu-form-item>
                <mu-form-item prop="mousewheelScaleSpeed" label="mousewheelScaleSpeed">
                  <mu-slider v-model="form.mousewheelScaleSpeed" :max="1"></mu-slider>
                </mu-form-item>
                  <mu-row>
                    <mu-col span="4">
                      <mu-switch v-model="form.isMousewheelScale" label="isMousewheelScale"></mu-switch>
                    </mu-col>
                    <mu-col span="4">
                      <mu-switch v-model="form.keyboardControl" label="keyboardControl"></mu-switch>
                    </mu-col>
                  </mu-row>
                  <mu-row style="margin-top: 30px;">
                    <mu-col span="4">
                      <mu-switch v-model="form.isEdit" label="isEdit"></mu-switch>
                    </mu-col>
                  </mu-row>
                  <mu-row style="margin-top: 30px;">
                    <mu-col span="12">
                      <p style="line-height:1">按钮样式：</p>
                      <mu-radio v-model="form.menuType" style="margin-right: 16px;" value="all" label="all"></mu-radio>
                      <mu-radio v-model="form.menuType" style="margin-right: 16px;" value="normal" label="normal"></mu-radio>
                      <mu-radio v-model="form.menuType" style="margin-right: 16px;" value="simple" label="simple"></mu-radio>
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
        borderRadius: 5,
        spaceBetween: 5,
        isEdit: false,
        isMousewheelScale: true,
        keyboardControl: true,
        mousewheelScaleSpeed: 0.06,
        menuType: "normal"
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
          name: 'spaceBetween',
          desc: '间距',
          type: 'number',
          default: 5
        },
        {
          name: 'isMousewheelScale',
          desc: '是否可鼠标滚轮缩放',
          type: 'Boolean',
          default: 'true'
        },
        {
          name: 'mousewheelScaleSpeed',
          desc: '鼠标缩放速度',
          type: 'Number',
          default: '0.06'
        },
        {
          name: 'isEdit',
          desc: '是否开启编辑模式',
          type: 'Boolean',
          default: 'false'
        },
        {
          name: 'keyboardControl',
          desc: '键盘控制（关闭，左右切换大图）。ESC为关闭。AD，← →均可左右切换',
          type: 'Boolean',
          default: 'true'
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
