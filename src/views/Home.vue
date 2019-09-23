<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
  import Layout from '@/layout'
  export default {
    name: 'Home',
    components: { Layout }
  }
</script>
