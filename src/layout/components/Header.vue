<template>
  <el-header
    class="app-header"
    height="60px"
  >
    <el-dropdown>
      <i
        class="el-icon-setting"
        style="margin-right: 15px"
      ></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>設定</el-dropdown-item>
        <el-dropdown-item>登出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>Dez</span>
  </el-header>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .app-header {
    text-align: right;
    width: 100%;
  }
</style>