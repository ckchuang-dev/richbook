<template>
  <div class="app-header">
    <el-button
      class="app-header__toggle-btn"
      icon="el-icon-s-fold"
      type="text"
      @click="toggleAside"
    />
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
    name: 'AppHeader',
    methods: {
      toggleAside() {
        this.$emit('toggle')
      }
    }
  }
</script>

<style lang="scss">
  .app-header {
    background: #fafafa;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    height: 3.5rem;
    overflow: hidden;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &__toggle-btn {
      padding: 0 1.5rem;
      color: #606266;
      font-size: 1.5rem;
      cursor: pointer;
      &:hover,
      &:focus {
        color: #606266;
      }
    }
    &__settings {
      margin-right: 2rem;
      line-height: 3.5rem;
      vertical-align: middle;
    }
  }
</style>