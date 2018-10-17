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
code: `<PPreview
  @pictureUpdated="pictureUpdated"
></PPreview>`,
			isRefress: true
		};
	}
};
</script>

<style>
</style>
