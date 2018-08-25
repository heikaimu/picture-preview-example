<template>
  <div class="main-container">
    <div class="main-wrapper">
      <div class="tab-wrapper">
        <router-link to="/index/example">基础案例</router-link>
        <router-link to="/index/params">参数</router-link>
        <router-link to="/index/methods">方法</router-link>
        <router-link to="/index/upload">带上传</router-link>
        <router-link to="/index/other">其他</router-link>
      </div>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
  .main-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #f7f8fa;
    display: flex;
    justify-content: center;
    align-items: center;
    .main-wrapper{
      width: 1200px;
      height: 100%;
      background: #fff;
      position: relative;
      box-shadow: 0 0 3px #e7e7e7;
      .tab-wrapper{
        width: 100%;
        height: 60px;
        background: #333;
        display: flex;
        align-items: center;
        a{
          color: #f9f9f9;
          height: 60px;
          padding: 0 30px;
          line-height: 60px;
          font-size: 16px;
          position: relative;
          &.active{
            color: rgb(255, 208, 75);
          }
          &:after{
            content: "";
            display: block;
            position: absolute;
            right: 0;
            top: 25px;
            width: 1px;
            height: 10px;
            border-right: 1px solid #666;
          }
        }
      }
      .content-wrapper{
        position: absolute;
        left: 0;
        right: 0;
        top: 60px;
        bottom: 0;
        overflow-y: auto;
      }
    }
  }
</style>
