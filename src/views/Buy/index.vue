<template>
  <div class="pg-to-buy-list">
    <h2 class="pg-to-buy-list__title">待購清單</h2>
    <div class="pg-to-buy-list__new-item-container">
      <el-input class="pg-to-buy-list__new-item"
                v-model="newItem"
                placeholder="輸入待購項目"></el-input>
      <el-button class="pg-to-buy-list__add-btn"
                 type="primary"
                 icon="el-icon-plus"
                 size="small"
                 @click="handleAdd">新增</el-button>
    </div>
    <div class="pg-to-buy-list__card-container">
      <to-buy-list-card :key="item.id"
                        v-for="item in cardList"
                        :cardData="item" />
    </div>
  </div>
</template>

<script>
  import ToBuyListCard from '@/components/ToBuyListCard'
  export default {
    name: 'Buy',
    components: { ToBuyListCard },
    data() {
      return {
        cardList: [
          {
            id: 'want',
            title: '想要',
            list: ['iPhone 11 Pro Max', 'BOSE Lifestyle 600'],
            color: '#ffaa55'
          },
          {
            id: 'need',
            title: '需要',
            list: ['筆電背包', '眼鏡', '手錶'],
            color: '#67a7da'
          },
          {
            id: 'satisfy',
            title: '滿足',
            list: ['空氣清淨機', '電磁爐', 'Brita 濾水壺'],
            color: '#67bb77'
          },
          {
            id: 'sublimate',
            title: '昇華',
            list: ['任天堂 Switch', 'PS4', 'AirPods'],
            color: '#bb6777'
          }
        ],
        newItem: ''
      }
    },
    methods: {
      handleDrag() {
        this.$dragula(
          [
            document.getElementById('want'),
            document.getElementById('need'),
            document.getElementById('satisfy'),
            document.getElementById('sublimate')
          ],
          {
            removeOnSpill: true
          }
        )
          .on('drag', function(el) {
            el.className.replace('ex-moved', '')
          })
          .on('drop', function(el) {
            el.className += 'ex-moved'
          })
          .on('over', function(el, container) {
            container.className += 'ex-over'
          })
          .on('out', function(el, container) {
            container.className.replace('ex-over', '')
          })
      },
      handleAdd() {
        if (this.newItem === '') return
        this.cardList[0].list.push(this.newItem)
        this.newItem = ''
      }
    },
    mounted() {
      this.handleDrag()
    }
  }
</script>

<style lang="scss">
  .pg-to-buy-list {
    &__new-item-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    &__new-item {
      width: 15rem;
    }
    &__add-btn {
      margin-left: 0.71rem;
    }
    &__title {
      margin-bottom: 1.5rem;
    }
    &__card-container {
      max-width: 68.57rem;
      margin: 2rem auto;
      display: flex;
      justify-content: space-around;
    }
  }
</style>