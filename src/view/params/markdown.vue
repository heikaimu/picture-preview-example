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
				return {}
			}
		}
	},
  data() {
		return {
			code: '',
			isRefress: true
		};
	},
	created() {
this.code = `<PPreview 
  :width="${this.form.width}"
  :height="${this.form.height}"
  :borderRadius="${this.form.borderRadius}"
  :isMenu="${this.form.isMenu}"
  :isRotate="${this.form.isRotate}"
  :isMove="${this.form.isMove}"
  :isScale="${this.form.isScale}"
  :isSingleClickToClose="${this.form.isSingleClickToClose}"
  :doubleRestore="${this.form.doubleRestore}"
  :isMousewheelScale="${this.form.isMousewheelScale}"
  :isEdit="${this.form.isEdit}"
></PPreview>`
	},
	watch: {
		form: {
			handler(newName, oldName) {
				this.isRefress = false;
this.code = `<PPreview 
  :width="${this.form.width}"
  :height="${this.form.height}"
  :borderRadius="${this.form.borderRadius}"
  :isMenu="${this.form.isMenu}"
  :isRotate="${this.form.isRotate}"
  :isMove="${this.form.isMove}"
  :isScale="${this.form.isScale}"
  :isSingleClickToClose="${this.form.isSingleClickToClose}"
  :doubleRestore="${this.form.doubleRestore}"
  :isMousewheelScale="${this.form.isMousewheelScale}"
  :isEdit="${this.form.isEdit}"
></PPreview>`
				setTimeout(() => {
				this.isRefress = true;
				}, 500)
			},
			deep: true
		}
	}
};
</script>

<style>
</style>
