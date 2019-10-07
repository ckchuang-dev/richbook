<template>
  <div class="app-header">
    <div class="app-header__settings">
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
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>

<style lang="scss" scoped>
  .app-header {
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    height: 3.5rem;
    overflow: hidden;
    position: relative;
    width: 100%;
    text-align: right;
    &__settings {
      margin-right: 2rem;
      line-height: 3.5rem;
      vertical-align: middle;
    }
  }
</style>