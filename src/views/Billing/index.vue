<template>
  <div class="pg-billing">
    <calendar class="pg-billing__calendar"
              @select="handleSelectedDate" />
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
  import BillingList from '@/containers/Billing/BillingList'
  import BillingDialog from '@/containers/Billing/BillingDialog'
  export default {
    name: 'Billing',
    components: { BillingList, BillingDialog },
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
        const { year, month, day } = date
        const zMonth = ('0' + (month + 1)).slice(-2)
        const zDay = ('0' + day).slice(-2)
        this.selectedDate = `${year}-${zMonth}-${zDay}`
        this.isLoading = true
        this.$store
          .dispatch('billing/getExpenseData', this.selectedDate)
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
    &__calendar {
      margin: 0.71rem auto;
    }
    &__btn-add {
      display: block;
      margin-left: auto;
      margin-bottom: 0.71rem;
    }
  }
</style>