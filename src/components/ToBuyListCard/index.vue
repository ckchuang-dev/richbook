<template>
  <li class="cp-to-buy-list-card">
    <div class="column-header">
      <h4>{{title}}</h4>
    </div>
    <ul class="task-list"
        :id="title">
      <li class="task"
          :key="item"
          v-for="item in list">
        <p>{{item}}</p>
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'ToBuyListCard',
    props: {
      title: {
        type: String,
        required: true
      },
      list: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cp-to-buy-list-card {
  }
</style>