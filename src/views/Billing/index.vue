<template>
  <div class="pg-billing">
    <BillingDialog
      :showDialog="showDialog"
      :dialogData="dialogData"
      @close="closeDialog"
    />
    <BillingCalendar />
    <el-button
      class="pg-billing__btn-add"
      type="primary"
      size="mini"
      @click="handleAdd"
    >新增紀錄</el-button>
    <BillingList @edit="handleEdit" />
  </div>
</template>

<script>
  import BillingCalendar from '@/containers/Billing/BillingCalendar'
  import BillingList from '@/containers/Billing/BillingList'
  import BillingDialog from '@/containers/Billing/BillingDialog'
  export default {
    name: 'Billing',
    components: { BillingCalendar, BillingList, BillingDialog },
    data() {
      return {
        showDialog: false,
        dialogData: {
          action: '',
          data: {}
        }
      }
    },
    methods: {
      handleAdd() {
        this.dialogData.action = 'ADD'
        this.dialogData.data = {}
        this.showDialog = true
      },
      handleEdit(data) {
        this.dialogData.action = 'EDIT'
        this.dialogData.data = data
        this.showDialog = true
      },
      closeDialog() {
        this.dialogData.action = ''
        this.dialogData.data = {}
        this.showDialog = false
      }
    }
  }
</script>

<style lang="scss">
  .pg-billing {
    &__btn-add {
      display: block;
      margin-left: auto;
      margin-bottom: 0.71rem;
    }
  }
</style>