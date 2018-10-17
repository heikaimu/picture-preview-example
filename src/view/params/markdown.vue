<template>
<div class="markdown">
<vue-markdown v-highlight v-if="isRefress">
template
```
{{code}}
```
</vue-markdown>
</div>
</template>

<script>
export default {
  props: {
    form: {
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      code: "",
      isRefress: true
    };
  },
  created() {
    this.code = `<PPreview 
  :width="${this.form.width}"
  :height="${this.form.height}"
  :borderRadius="${this.form.borderRadius}"
  :spaceBetween="${this.form.spaceBetween}"
  :isMousewheelScale="${this.form.isMousewheelScale}"
  :mousewheelScaleSpeed="${this.form.mousewheelScaleSpeed}"
  :isEdit="${this.form.isEdit}"
  :keyboardControl="${this.form.keyboardControl}"
  :menuType="${this.form.menuType}"
></PPreview>`;
  },
  watch: {
    form: {
      handler(newName, oldName) {
        this.isRefress = false;
        this.code = `<PPreview 
  :width="${this.form.width}"
  :height="${this.form.height}"
  :borderRadius="${this.form.borderRadius}"
  :spaceBetween="${this.form.spaceBetween}"
  :isMousewheelScale="${this.form.isMousewheelScale}"
  :mousewheelScaleSpeed="${this.form.mousewheelScaleSpeed}"
  :isEdit="${this.form.isEdit}"
  :keyboardControl="${this.form.keyboardControl}"
  :menuType="${this.form.menuType}"
></PPreview>`;
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
