<template>
  <div>
    <h2>待購清單</h2>
    <el-card>
      <ul class="columns">
        <to-buy-list-card :key="item.id"
                          v-for="item in cardList"
                          :title="item.title"
                          :list="item.list" />
      </ul>
    </el-card>
  </div>
</template>

<script>
  import dragula from 'dragula'
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
            list: ['iPhone 11 Pro Max', 'BOSE Lifestyle 600']
          },
          {
            id: 'need',
            title: '需要',
            list: ['筆電背包', '眼鏡', '手錶']
          },
          {
            id: 'satisfy',
            title: '滿足',
            list: ['空氣清淨機', '電磁爐', 'Brita 濾水壺']
          },
          {
            id: 'sublimate',
            title: '昇華',
            list: ['任天堂 Switch', 'PS4', 'AirPods']
          }
        ]
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
</style>