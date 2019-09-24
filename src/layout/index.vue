<template>
  <el-container class="app-layout">
    <Sidebar />
    <el-container>
      <Header />
      <el-main class="app-main">
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Header from './components/Header'
  import Sidebar from './components/Sidebar'
  export default {
    name: 'Layout',
    components: { Header, Sidebar }
  }
</script>

<style>
  .app-layout {
    width: 100%;
    margin: 0;
  }
  .app-main {
    position: absolute;
    top: 60px;
  }
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
    height: 100%;
  }
</style>