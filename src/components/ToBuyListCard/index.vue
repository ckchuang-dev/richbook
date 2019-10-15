<template>
  <div class="cp-to-buy-list-card">
    <div :style="{ 'background-color': cardData.color }"
         class="cp-to-buy-list-card__title">
      <h3>{{cardData.title}}</h3>
    </div>
    <div class="cp-to-buy-list-card__item-container"
         :id="cardData.id">
      <div class="cp-to-buy-list-card__item"
           :key="item"
           v-for="item in cardData.list">
        <p>{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ToBuyListCard',
    props: {
      cardData: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .cp-to-buy-list-card {
    width: 14.29rem;
    background-color: #aaa;

    &__title {
      width: 100%;
      height: 3.57rem;
      text-align: center;
      background-color: #999;
      line-height: 4rem;
      vertical-align: middle;
    }
    &__item-container {
      display: flex;
      flex-direction: column;
      min-height: 2rem;
    }
    &__item {
      width: 90%;
      height: 3rem;
      background-color: #ddd;
      margin: 0.71rem auto 0;
      text-align: center;
      line-height: 3rem;
      vertical-align: middle;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0.71rem;
      }
    }
  }
</style>