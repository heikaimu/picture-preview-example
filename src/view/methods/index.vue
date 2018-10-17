<template>
    <div class="">
        <div class="plugin">
        <PPreview
          v-if="pictureList"
          :pictureList="pictureList"
          :props="defaultProps"
          :isEdit="form.isEdit"
          @pictureUpdated="pictureUpdated"
        ></PPreview>
        </div>
        <div class="work-station">
            <div class="left">
                <pageMarkedown :form="form"></pageMarkedown>
            </div>
            <div class="right">
              <div class="current-action">
                <h3>你的操作是：{{actionTitle}}</h3>
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
          { title: '方法名称', name: 'name' },
          { title: '描述', name: 'desc'},
          { title: '返回值', name: 'callback'}
      ],
      list: [
        {
          name: 'pictureUpdated',
          desc: '图片变动后的派发事件',
          callback: `
            <p>action : 现有‘delete’,‘move’两种不同事件</p>
            <p>newList : 最新的图片列表</p>`
        },
      ],
      actionTitle: '',
      actionResult: ''
    };
  },
  methods: {
    pictureUpdated(data) {
      this.actionTitle = data.action;
      this.actionResult = data.newList;
    }
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
