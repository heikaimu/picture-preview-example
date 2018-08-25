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
  @move="move"
  @deletePicture="deletePicture"
  @prevPicture="prevPicture"
  @topPicture="topPicture"
  @nextPicture="nextPicture"
  @bottomPicture="bottomPicture"
></PPreview>`,
			isRefress: true
		};
	}
};
</script>

<style>
</style>
