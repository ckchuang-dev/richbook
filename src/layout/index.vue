<template>
  <div class="app-layout">
    <div class="app-layout__left">
      <app-aside />
    </div>
    <div class="app-layout__right">
      <app-header />
      <app-main>
        <slot />
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
    components: { AppAside, AppHeader, AppMain, AppFooter }
  }
</script>

<style lang="scss">
  .app-layout {
    display: flex;
    &__left {
    }
    &__right {
      margin-left: 15rem;
      width: 100%;
    }
  }
</style>