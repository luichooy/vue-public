<template>
  <section class="layout">
    <nav class="topbar-wrapper">
      <Topbar></Topbar>
    </nav>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Layout',
  components: {
    Topbar: () => import('components/Topbar')
  }
};
</script>
<style lang="scss" scoped>
  .layout{
    .topbar-wrapper{
      height: 92px;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      box-sizing: border-box;
    }
  }
</style>
