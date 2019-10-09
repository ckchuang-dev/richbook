<template>
  <div id="ct_billing_calendar">
    <calendar
      :date="selectedDate"
      :onSelect="onSelect"
    />
  </div>
</template>

<script>
  export default {
    name: 'BillingCalendar',
    data() {
      return {
        selectedDate: null
      }
    },
    computed: {
      dateText() {
        const { year, month, day } = this.selectedDate
        const zMonth = ('0' + (month + 1)).slice(-2)
        const zDay = ('0' + day).slice(-2)
        return `${year}-${zMonth}-${zDay}`
      }
    },
    methods: {
      onSelect(date) {
        this.selectedDate = date
      }
    },
    beforeMount() {
      const now = new Date().toISOString()
      const currentDate = {
        year: parseInt(now.slice(0, 4)),
        month: parseInt(now.slice(5, 7)) - 1,
        day: parseInt(now.slice(8, 10))
      }
      this.selectedDate = JSON.parse(JSON.stringify(currentDate))
    }
  }
</script>

<style lang="scss" scoped>
  #ct_billing_calendar {
    margin: 0.71rem auto;
  }
</style>