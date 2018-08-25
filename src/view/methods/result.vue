<template>
<div class="markdown">
<vue-markdown v-highlight v-if="isRefress">
```
{{code}}
```
</vue-markdown>
</div>
</template>

<script>
export default {
  props: {
    result: {
      default() {
        return "";
      }
    }
  },
  data() {
    return {
      code: "",
      isRefress: false
    };
  },
  watch: {
    result: {
      handler(newName, oldName) {
        this.isRefress = false;
        this.code = this.result;
        setTimeout(() => {
          this.isRefress = true;
        }, 500);
      },
      deep: true
    }
  }
};
</script>

<style>
</style>
