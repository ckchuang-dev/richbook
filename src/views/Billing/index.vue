<template>
  <el-card>
    <h2>月記帳本</h2>
    <el-calendar v-model="value">
    </el-calendar>
  </el-card>
</template>

<script>
  export default {
    name: 'Billing',
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>

<style>
</style>