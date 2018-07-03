<template>
  <div class="topbar container">
    <div class="logo-wrapper">
      <img class="logo" src="../../assets/images/logo.png" alt="logo">
    </div>
    <div class="menu-wrapper">
      <ul class="menu">
        <router-link to="about" tag="li" class="menu-item">关于米天</router-link>
        <router-link to="products" tag="li" class="menu-item">产品技术</router-link>
        <router-link to="news" tag="li" class="menu-item">媒体新闻</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Topbar',
  data() {
    return {
      activeRoute: 'about'
    }
  }
}
</script>
<style lang="scss" scoped>
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 16px;

    .logo-wrapper {
      flex: 0 0 150px;
      height: 46px;

      .logo {
        width: 100%;
        height: 100%;
      }
    }

    .menu-wrapper {
      .menu {
        overflow: hidden;
        .menu-item {
          float: left;
          padding: 12px 16px;
          cursor: pointer;
          &:hover {
            color: #f5a637;
          }
          &.active {
            color: #f5a637;
          }
        }
      }
    }
  }
</style>
