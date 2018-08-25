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
      }
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
            code: `<PPreview v-if="pictureList" :pictureList="pictureList" :props="defaultProps"></PPreview>`
        }
    }
}
</script>

<style>

</style>
