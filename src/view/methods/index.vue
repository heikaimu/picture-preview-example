<template>
    <div class="">
        <div class="plugin">
        <PPreview
          v-if="pictureList"
          :pictureList="pictureList"
          :props="defaultProps"
          :isEdit="form.isEdit"
          @move="move"
          @deletePicture="deletePicture"
          @prevPicture="prevPicture"
          @topPicture="topPicture"
          @nextPicture="nextPicture"
          @bottomPicture="bottomPicture"
        ></PPreview>
        </div>
        <div class="work-station">
            <div class="left">
                <pageMarkedown :form="form"></pageMarkedown>
            </div>
            <div class="right">
              <div class="current-action">
                <h3>{{actionTitle}}</h3>
                <resultMarkdown :result="actionResult"></resultMarkdown>
              </div>
            </div>
        </div>
        <div class="table-wrapper">
          <mu-paper>
            <mu-data-table :columns="columns" :data="list.slice(0, 6)">
              <template slot-scope="scope">
                <td>{{scope.row.name}}</td>
                <td>{{scope.row.desc}}</td>
                <td v-html="scope.row.callback"></td>
              </template>
            </mu-data-table>
          </mu-paper>
        </div>
    </div>
</template>

<script>
import pageMarkedown from "./markdown";
import resultMarkdown from './result';
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
        isEdit: true
      },
      columns: [
          { title: '参数名称', name: 'name' },
          { title: '描述', name: 'desc'},
          { title: '返回值', name: 'callback'}
      ],
      list: [
        {
          name: 'move',
          desc: '大图状态时候前后移动时触发',
          callback: `
            <p>direction : 方向（1是前进，-1是后退）</p>
            <p>src : 当前显示的图片地址</p>
            <p>index : 当前图片的索引，从0开始</p>
            <p>isFirst : 是否是第一张（true/false）</p>
            <p>isLast : 是否是最后一张（true/false）</p>`
        },
        {
          name: 'deletePicture',
          desc: '删除小图时候触发',
          callback: `
            <p>index : 删除的小图的index</p>
            <p>result : 当前最新的图片列表</p>`
        },
        {
          name: 'prevPicture',
          desc: '小图左移一步时候触发',
          callback: `
            <p>index : 点击的小图的index</p>
            <p>result : 当前最新的图片列表</p>`
        },
        {
          name: 'nextPicture',
          desc: '小图右移一步时候触发',
          callback: `
            <p>index : 点击的小图的index</p>
            <p>result : 当前最新的图片列表</p>`
        },
        {
          name: 'topPicture',
          desc: '小图置顶时候触发',
          callback: `
            <p>index : 点击的小图的index</p>
            <p>result : 当前最新的图片列表</p>`
        },
        {
          name: 'bottomPicture',
          desc: '小图置最后时候触发',
          callback: `
            <p>index : 点击的小图的index</p>
            <p>result : 当前最新的图片列表</p>`
        },
      ],
      actionTitle: '',
      actionResult: ''
    };
  },
  methods: {
    move(data) {
      console.log(data);
    },
    deletePicture(data) {
      this.actionTitle = '删除图片成功';
      this.actionResult = data;
    },
    prevPicture(data) {
      this.actionTitle = '左移动成功';
      this.actionResult = data;
    },
    nextPicture(data) {
      this.actionTitle = '右移动成功';
      this.actionResult = data;
    },
    topPicture(data) {
      this.actionTitle = '置顶成功';
      this.actionResult = data;
    },
    bottomPicture(data) {
      this.actionTitle = '置最后成功';
      this.actionResult = data;
    },
  },
  components: {
    pageMarkedown,
    resultMarkdown
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
      padding-left: 50px;
    }
  }
  .table-wrapper{
    margin: 30px 10px;
  }
</style>
