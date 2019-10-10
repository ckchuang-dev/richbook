<template>
  <div class="pg-billing">
    <BillingCalendar @select="handleSelectedDate" />
    <el-button class="pg-billing__btn-add"
               type="primary"
               size="mini"
               @click="handleAdd">新增紀錄</el-button>
    <BillingList @edit="handleEdit" />
    <BillingDialog :showDialog="showDialog"
                   :dialogData="dialogData"
                   @close="closeDialog" />
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
        },
        selectedDate: this.$dateFormatDash(new Date())
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
      },
      handleSelectedDate(date) {
        this.selectedDate = date
        this.$store.dispatch('billing/getExpenseData', date)
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