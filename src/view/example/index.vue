<template>
  <div class="">
    <div class="group">
      <div class="install">
<vue-markdown v-highlight>
安装
```
npm i vue-simple-picture-preview -S
```      
</vue-markdown>
      </div>
    </div>
    <div class="group">
      <simpleExample></simpleExample>
    </div>
    <div class="group">
      <detailsExample></detailsExample>
    </div>
  </div>
</template>

<script>
import simpleExample from "./simple/index";
import detailsExample from "./detail/index";
export default {
  components: {
    simpleExample,
    detailsExample
  }
};
</script>

<style scoped lang="less">
.group {
  padding: 30px 0;
  border-bottom: 6px solid #e7e7e7;
  .install{
    padding: 0 20px;
  }
}
</style>
