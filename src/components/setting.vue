<template>
  <mu-container>
    <mu-form :model="form" class="mu-demo-form" label-width="200">
      <mu-row gutter>
        <mu-col span="12">
          <mu-form-item prop="width" label="Width">
            <mu-slider class="demo-slider" v-model="form.width" :min="60" :max="200"></mu-slider>
          </mu-form-item>
        </mu-col>
        <mu-col span="12">
          <mu-form-item prop="height" label="Height">
            <mu-slider class="demo-slider" v-model="form.height" :min="60" :max="200"></mu-slider>
          </mu-form-item>
        </mu-col>
        <mu-col span="12">
          <mu-form-item prop="borderRadius" label="borderRadius">
            <mu-slider class="demo-slider" v-model="form.borderRadius" :min="0" :max="200"></mu-slider>
          </mu-form-item>
        </mu-col>
        <mu-col span="12">
          <mu-form-item prop="spaceBetween" label="spaceBetween">
            <mu-slider class="demo-slider" v-model="form.spaceBetween" :min="0" :max="20"></mu-slider>
          </mu-form-item>
        </mu-col>
        <mu-col span="12">
          <mu-form-item prop="menuType" label="menuType">
            <mu-radio v-model="form.menuType" style="margin-right: 10px;" value="all" label="all"></mu-radio>
            <mu-radio v-model="form.menuType" style="margin-right: 10px;" value="slide" label="slide"></mu-radio>
            <mu-radio v-model="form.menuType" style="margin-right: 10px;" value="bottom" label="bottom"></mu-radio>
          </mu-form-item>
        </mu-col>
        <mu-col span="12">
          <mu-form-item prop="mouseScrollable" label="mouse scrollable">
            <mu-switch v-model="form.mouseScrollable"></mu-switch>
          </mu-form-item>
        </mu-col>
        <mu-col span="12">
          <mu-form-item prop="mouseScrollSpeed" label="mouse scroll speed">
            <mu-slider class="demo-slider" v-model="form.mouseScrollSpeed" :min="0" :max="1"></mu-slider>
          </mu-form-item>
        </mu-col>
        <mu-col span="12">
          <mu-form-item prop="thumbnail" label="thumbnail">
            <mu-switch v-model="form.thumbnail"></mu-switch>
          </mu-form-item>
        </mu-col>
        <mu-col span="12">
          <mu-form-item prop="thumbnail" label="thumbnail width">
            <mu-slider class="demo-slider" v-model="form.thumbnailWidth" :min="20" :max="100"></mu-slider>
          </mu-form-item>
        </mu-col>
        <mu-col span="12">
          <mu-form-item prop="thumbnail" label="thumbnail height">
            <mu-slider class="demo-slider" v-model="form.thumbnailHeight" :min="20" :max="100"></mu-slider>
          </mu-form-item>
        </mu-col>
        <mu-col span="12">
          <mu-form-item prop="isCenter" label="is center">
            <mu-switch v-model="form.center"></mu-switch>
          </mu-form-item>
        </mu-col>
        <mu-col span="12">
          <mu-form-item prop="isEdit" label="is edit">
            <mu-switch v-model="form.isEdit"></mu-switch>
          </mu-form-item>
        </mu-col>
      </mu-row>
    </mu-form>
  </mu-container>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="less">
</style>
