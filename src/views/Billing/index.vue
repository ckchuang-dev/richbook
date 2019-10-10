<template>
  <div class="pg-billing">
    <BillingCalendar @select="handleSelectedDate" />
    <el-button class="pg-billing__btn-add"
               type="primary"
               size="mini"
               @click="handleAdd">新增紀錄</el-button>
    <BillingList :isLoading.sync="isLoading"
                 :selectedDate="selectedDate"
                 @edit="handleEdit" />
    <BillingDialog :showDialog="showDialog"
                   :dialogData="dialogData"
                   :selectedDate="selectedDate"
                   :isLoading.sync="isLoading"
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
        selectedDate: this.$dateFormatDash(new Date()),
        isLoading: false
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
        this.isLoading = true
        this.$store
          .dispatch('billing/getExpenseData', date)
          .then(() => {
            this.isLoading = false
          })
          .catch(status => console.log(status))
      }
    },
    mounted() {
      this.isLoading = true
      this.$store
        .dispatch('billing/getExpenseData', this.selectedDate)
        .then(() => {
          this.isLoading = false
        })
        .catch(status => console.log(status))
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