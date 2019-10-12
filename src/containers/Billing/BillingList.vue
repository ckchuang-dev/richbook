<template>
  <el-card id="ct_billing_list">
    <el-table v-loading="isLoading"
              :data="expenseData"
              stripe>
      <el-table-column prop="type"
                       label="類別"
                       align="center"
                       width="50">
        <template slot-scope="props">
          <i :class="getIcon(props.row.type)"></i>
        </template>
      </el-table-column>
      <el-table-column prop="title"
                       label="項目" />
      <el-table-column prop="dollar"
                       label="金額"
                       align="right"
                       width="80" />
      <el-table-column label="操作"
                       width="150">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.row)">編輯</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleConfirm(scope.row.id)">刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示"
               :visible.sync="deleteDialogVisible"
               width="30%">
      <span>確認要刪除這一筆紀錄嗎？</span>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取消</el-button>
        <el-button type="primary"
                   @click="handleDelete">確認</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
  import { mapState } from 'vuex'
  import typeOptions from '@/static/billing/typeOptions.json'
  export default {
    name: 'BillingList',
    computed: {
      ...mapState({
        expenseData: state => state.billing.expenseData
      })
    },
    props: {
      isLoading: {
        type: Boolean,
        required: true
      },
      selectedDate: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        expense: '',
        deleteDialogVisible: false,
        deleteId: ''
      }
    },
    methods: {
      handleEdit(data) {
        this.$emit('edit', data)
      },
      handleConfirm(id) {
        this.deleteDialogVisible = true
        this.deleteId = id
      },
      getIcon(type) {
        const item = typeOptions.find(item => {
          if (item.value === type) return item
        })
        return item.icon
      },
      handleDelete() {
        this.deleteDialogVisible = false
        this.$emit('update:isLoading', true)
        this.$store
          .dispatch('billing/deleteExpense', { id: this.deleteId, date: this.selectedDate })
          .then(() => {
            this.$emit('update:isLoading', false)
          })
          .catch(status => console.log(status))
      }
    }
  }
</script>

<style lang="scss" scoped>
  #ct_billing_list {
  }
</style>