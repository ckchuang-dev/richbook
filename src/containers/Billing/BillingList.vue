<template>
  <el-card id="ct_billing_list">
    <el-table
      v-loading="isLoading"
      :data="expenseData"
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
        prop="dollar"
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
  import { mapState } from 'vuex'
  export default {
    name: 'BillingList',
    computed: {
      ...mapState({
        expenseData: state => state.billing.expenseData
      })
    },
    data() {
      return {
        expense: '',
        isLoading: false
      }
    },
    methods: {
      handleEdit(index, data) {
        this.$emit('edit', { data })
      }
    },
    mounted() {
      this.isLoading = true
      this.$store.dispatch('billing/getExpenseData').then(() => {
        this.isLoading = false
      })
    }
  }
</script>

<style lang="scss" scoped>
  #ct_billing_list {
  }
</style>