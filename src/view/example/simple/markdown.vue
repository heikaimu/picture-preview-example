<template>
<div class="markdown">
<vue-markdown v-highlight>
template
```
{{code}}
```
script
```
import PPreview from "vue-simple-picture-preview";
export default {
  data() {
    return {
      pictureList: [
        "http://p09vugqdu.bkt.clouddn.com/20180525091245.jpg",
        "http://p09vugqdu.bkt.clouddn.com/20180525091249.jpg",
        "http://p09vugqdu.bkt.clouddn.com/20180525091252.jpg",
        "http://p09vugqdu.bkt.clouddn.com/20180525091253.jpg"
      ]
    };
  },
  components: {
    PPreview
  }
};
```
</vue-markdown>
</div>
</template>

<script>
export default {
    data() {
        return {
            code: `<PPreview v-if="pictureList" :pictureList="pictureList"></PPreview>`
        }
    }
}
</script>

<style>

</style>
