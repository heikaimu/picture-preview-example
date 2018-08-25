<template>
    <div>
<vue-markdown v-highlight>
template
```
{{code}}
```
</vue-markdown>
    </div>
</template>

<script>
export default {
  data() {
    return {
code: `<PPreview
  v-if="pictureList"
  :pictureList="pictureList"
  :isEdit="true"
  >
  <Upload @uploadSuccess="uploadSuccess"></Upload>
</PPreview>`
    }
  }
};
</script>

<style>
</style>
