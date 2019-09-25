<template>
  <el-card id="ct_billing_list">
    <el-table
      :data="billingData"
      stripe
    >
      <el-table-column
        prop="type"
        label="類別"
        width="150"
      >
        <i class="el-icon-food"></i>
      </el-table-column>
      <el-table-column
        prop="title"
        label="項目"
      />
      <el-table-column
        prop="dollor"
        label="金額"
        width="250"
      />
      <el-table-column
        label="操作"
        width="200"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >編輯</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  export default {
    name: 'BillingList',
    data() {
      return {
        billingData: [
          {
            type: 'breakfast',
            title: '鮪魚蛋土司',
            dollor: 35,
            icon: 'el-icon-burger'
          },
          {
            type: 'lunch',
            title: '水煎包十顆',
            dollor: 150,
            icon: 'el-icon-burger'
          },
          {
            type: 'dinner',
            title: '美國頂級菲力牛排佐鮮蝦 8oz',
            dollor: 2860,
            icon: 'el-icon-burger'
          },
          {
            type: 'dinner',
            title: '原木燒烤法式羔羊排 8oz',
            dollor: 1860
          },
          {
            type: 'dinner',
            title: '香煎西班牙頂級伊比利豬排 8oz',
            dollor: 1260
          },
          {
            type: 'dinner',
            title: '美國蛇河農場極黑和牛老饕牛排 6oz',
            dollor: 2110
          },
          {
            type: 'dinner',
            title: '美國 Prime 衫河農場濕式熟成 45 天叻眼牛排 12oz',
            dollor: 2340
          },
          {
            type: 'dinner',
            title: '乾式熟成極黑法式里肌 8oz',
            dollor: 2440
          },
          {
            type: 'dinner',
            title: '澳洲 10 級純種冠軍和牛叻眼牛排 12oz',
            dollor: 3860
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  #ct_billing_list {
  }
</style>