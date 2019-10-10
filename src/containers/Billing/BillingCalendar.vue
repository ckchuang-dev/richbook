<template>
  <div id="ct-billing-calendar">
    <calendar :date="selectedDate"
              @select="onSelect" />
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
        this.$emit('select', this.dateText)
      }
    },
    beforeMount() {
      const now = this.$dateFormatDash(new Date())
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
  #ct-billing-calendar {
    margin: 0.71rem auto;
  }
</style>