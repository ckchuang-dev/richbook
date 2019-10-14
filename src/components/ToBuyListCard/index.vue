<template>
  <div class="cp-to-buy-list-card">
    <div class="cp-to-buy-list-card__title">
      <h3>{{title}}</h3>
    </div>
    <div class="cp-to-buy-list-card__item-container"
         :id="title">
      <div class="cp-to-buy-list-card__item"
           :key="item"
           v-for="item in list">
        <p>{{item}}</p>
      </div>
    </div>
  </div>
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
    width: 200px;
    background-color: #aaa;
    &__title {
      width: 100%;
      height: 50px;
      text-align: center;
      background-color: #999;
      line-height: 4rem;
      vertical-align: middle;
    }
    &__item-container {
      display: flex;
      flex-direction: column;
    }
    &__item {
      width: 90%;
      height: 3rem;
      background-color: #ddd;
      margin: 0.5rem auto;
      text-align: center;
      line-height: 3rem;
      vertical-align: middle;
    }
  }
</style>