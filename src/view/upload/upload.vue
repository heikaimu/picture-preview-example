<template>
    <div class="upload-wrapper">
      <label for="file" class="upload">
        <input type="file" v-show="false" id="file" ref="file" @change="uploadImg">
      </label>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tokenUrl: 'http://47.104.203.213:4000/qiniu/token?bucket=test',
      uploadUrl: 'http://upload.qiniu.com/'
    }
  },
  methods: {
    uploadImg() {
      const file = this.$refs.file.files[0];
      const size = file.size;
      const type = file.type;
      const reg = /image\/jpeg|image\/png/;
      if (!reg.test(type)) {
        alert('只能上传图片');
      } else if (size > 1024 * 200) {
        alert('图片不能超过200KB');
      } else {
        this.upload(file);
      }
    },
    // 获取上传token
    async upload(file) {
      const { status, token } = await this.getToken();
      if (status) {
        this.fileUpload(file, token);
      }
    },
    // 获取七牛token
    getToken() {
      const xhr = new XMLHttpRequest();
      return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText));
            } else {
              reject(request.status);
            }
          }
        }
        xhr.open('GET', this.tokenUrl, true);
        xhr.send();
      })
    },
    // 文件上传
    fileUpload(file, token) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('token', token);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', this.uploadUrl, true);
      // 监听上传
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const res = JSON.parse(xhr.responseText);
            this.$emit('uploadSuccess', res);
          } else {
            console.log(xhr.status);
          }
        }
      }
      // 上传进度
      xhr.upload.onprogress = (evt) => {
        if (evt.lengthComputable) {
          const progress = parseInt(Math.round(evt.loaded * 100 / evt.total));
          console.log(progress);
        }
      }
      // 发送
      xhr.send(formData);
    }
  }
};
</script>

<style scoped lang="less">
.upload-wrapper {
  width: 100px;
  height: 100px;
  margin: 5px;
  .upload {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    border: 1px solid #e7e7e7;
    background: #f9f9f9;
    position: relative;
    &:after {
      content: "";
      display: block;
      width: 6px;
      height: 30px;
      background: #ccc;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -3px;
      margin-top: -15px;
    }
    &:before {
      content: "";
      display: block;
      width: 30px;
      height: 6px;
      background: #ccc;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -15px;
      margin-top: -3px;
    }
  }
}
</style>
