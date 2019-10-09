<template>
  <div class="app-layout">
    <div :class="['app-layout__aside-container', {'app-layout__show-aside': isAsideVisible}]">
      <app-aside />
    </div>
    <div :class="['app-layout__main-container', {'app-layout__show-aside': isAsideVisible}]">
      <app-header @toggle="toggleAside" />
      <app-main>
        <transition name="fade-transform">
          <slot />
        </transition>
      </app-main>
      <app-footer />
    </div>
  </div>
</template>

<script>
  import AppAside from './components/AppAside'
  import AppHeader from './components/AppHeader'
  import AppMain from './components/AppMain'
  import AppFooter from './components/AppFooter'
  export default {
    name: 'Layout',
    components: { AppAside, AppHeader, AppMain, AppFooter },
    data() {
      return {
        isAsideVisible: false
      }
    },
    methods: {
      toggleAside() {
        this.isAsideVisible = !this.isAsideVisible
      }
    }
  }
</script>

<style lang="scss">
  $layout-aside-show-width: 15rem;
  $layout-aside-hide-width: 3.5rem;

  .app-layout {
    display: flex;
    &__aside-container {
      transition: width 0.3s;
      background-color: #304156;
      width: $layout-aside-hide-width;
      height: 100%;
      position: fixed;
      font-size: 0;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;
      &.app-layout__show-aside {
        width: $layout-aside-show-width;
      }
    }
    &__main-container {
      transition: margin-left width 0.3s;
      margin-left: $layout-aside-hide-width;
      width: 100%;
      min-height: 100%;
      &.app-layout__show-aside {
        margin-left: $layout-aside-show-width;
        width: calc(100% - #{$layout-aside-show-width});
      }
    }
  }
</style>