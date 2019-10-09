<template>
  <div class="app-main">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'AppMain'
  }
</script>

<style lang="scss">
  .app-main {
    padding: 1.5rem;
    min-height: calc(100vh - 3.5rem);
  }
</style>