<script>
  export default {
    name: 'Calendar',
    props: {
      date: {
        type: Object,
        default: null
      },
      onSelect: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        selectedTableId: 1,
        weekNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        displayDate: null,
        currentDate: null
      }
    },
    computed: {
      monthYearText() {
        return `${this.monthNames[this.displayDate.month]} ${this.displayDate.year}`
      },
      tenYearsText() {
        const year = this.displayDate.year
        const c = Math.floor(year / 10) // 年份前三位數
        return c ? `${c}0 - ${c}9` : '0 - 9'
      },
      headerText() {
        const tableId = this.selectedTableId
        switch (tableId) {
          case 1:
            return this.monthYearText
          case 2:
            return this.displayDate.year
          case 3:
            return this.tenYearsText
          default:
            return ''
        }
      },
      daysInMonth() {
        const arr = []
        const year = this.displayDate.year
        const month = this.displayDate.month
        const currentDayCount = this.countDaysInMonth(year, month)
        let prevDayCount = 0
        if (month === 0) {
          prevDayCount = this.countDaysInMonth(year - 1, 11)
        } else {
          prevDayCount = this.countDaysInMonth(year, month - 1)
        }
        const firstDay = this.zellerCongruence(year, month + 1, 1)
        let startDay = 1
        let nextStartDay = 1
        for (let i = 0; i < 6; i++) {
          let row = []
          if (i === 0) {
            for (let j = 0; j < 7; j++) {
              if (firstDay > j) {
                row.push({
                  value: prevDayCount - firstDay + j + 1,
                  active: false
                })
              } else {
                row.push({
                  value: j - firstDay + 1,
                  active: true
                })
              }
            }
            startDay = row[6].value + 1
            arr.push(row)
          } else {
            for (let j = startDay; j < startDay + 7; j++) {
              if (j <= currentDayCount && nextStartDay === 1) {
                row.push({
                  value: j,
                  active: true
                })
              } else {
                row.push({
                  value: nextStartDay++,
                  active: false
                })
              }
            }
            startDay = row[6].value + 1
            arr.push(row)
          }
        }
        return arr
      }
    },
    methods: {
      // 套用蔡勒公式計算特定日期為星期幾
      zellerCongruence(year, month, day) {
        // 蔡勒公式中 1, 2 月視為前一年的 13, 14 月
        if (month === 1 || month === 2) {
          month += 12
          year -= 1
        }
        const c = Math.floor(year / 100) // 年份前兩位數
        const y = year % 100 // 年份後兩位數
        const m = month
        const d = day
        let w = 0
        // TODO: 1582.10.15 以後改曆，目前尚未處理 1582.10.4 以前公式
        w = y + Math.floor(y / 4) + Math.floor(c / 4) - 2 * c + Math.floor((26 * (m + 1)) / 10) + d - 1
        if (w < 0) w = (w & (7 + 7)) % 7
        else w = w % 7
        return w
      },
      changeTable() {
        const tableId = this.selectedTableId
        switch (tableId) {
          case 1:
            this.selectedTableId = 2
            break
          case 2:
            this.selectedTableId = 3
            break
          default:
            break
        }
      },
      changePeriod(dir) {
        const tableId = this.selectedTableId
        switch (tableId) {
          case 1:
            this.changeMonth(dir)
            break
          case 2:
            dir ? this.displayDate.year++ : this.displayDate.year--
            break
          case 3:
            dir ? (this.displayDate.year += 10) : (this.displayDate.year -= 10)
            break
          default:
            break
        }
      },
      changeMonth(dir) {
        if (dir) {
          this.displayDate.month = (this.displayDate.month + 1) % 12
          if (this.displayDate.month === 0) this.displayDate.year++
        } else {
          this.displayDate.month = (this.displayDate.month + 11) % 12
          if (this.displayDate.month === 11) this.displayDate.year--
        }
      },
      countDaysInMonth(year, month) {
        return /8|3|5|10/.test(month) ? 30 : month === 1 ? ((!(year % 4) && year % 100) || !(year % 400) ? 29 : 28) : 31
      },
      selectYear(i, j) {
        this.displayDate.year = parseInt(`${Math.floor(this.displayDate.year / 10)}0`) - 1 + i * 4 + j
        this.selectedTableId = 2
      },
      selectMonth(name) {
        const index = this.monthNames.indexOf(name)
        this.displayDate.month = index < 0 ? this.displayDate.month : index
        this.selectedTableId = 1
      },
      selectDate(date) {
        if (!date.active) {
          if (date.value > 15) this.changeMonth(0)
          else this.changeMonth(1)
        }
        this.date.day = date.value
        this.date.month = this.displayDate.month
        this.date.year = this.displayDate.year
        this.onSelect(this.date)
      },
      checkSelectedDate(date) {
        const dy = this.displayDate.year
        const dm = this.displayDate.month
        const sy = this.date.year
        const sm = this.date.month
        const sd = this.date.day
        return date.value === sd && date.active && dy === sy && dm === sm
      },
      checkSelectedMonth(index) {
        const dy = this.displayDate.year
        const sy = this.date.year
        const sm = this.date.month
        return sm === index && sy === dy
      },
      checkSelectedYear(i, j) {
        const dy = this.displayDate.year
        const sy = this.date.year
        return parseInt(`${Math.floor(dy / 10)}0`) - 1 + i * 4 + j === sy
      },
      checkCurrentDate(date) {
        const dy = this.displayDate.year
        const dm = this.displayDate.month
        const cy = this.currentDate.year
        const cm = this.currentDate.month
        const cd = this.currentDate.day
        return date.value === cd && date.active && dy === cy && dm === cm && !this.checkSelectedDate(date)
      },
      checkCurrentMonth(index) {
        const dy = this.displayDate.year
        const cy = this.currentDate.year
        const cm = this.currentDate.month
        return cm === index && cy === dy && !this.checkSelectedMonth(index)
      },
      checkCurrentYear(i, j) {
        const dy = this.displayDate.year
        const cy = this.currentDate.year
        return parseInt(`${Math.floor(dy / 10)}0`) - 1 + i * 4 + j === cy && !this.checkSelectedYear(i, j)
      }
    },
    watch: {
      date() {
        if (this.date) this.displayDate = JSON.parse(JSON.stringify(this.date))
      }
    },
    beforeMount() {
      const now = new Date().toISOString()
      this.currentDate = {
        year: parseInt(now.slice(0, 4)),
        month: parseInt(now.slice(5, 7)) - 1,
        day: parseInt(now.slice(8, 10))
      }
      if (this.date) this.displayDate = JSON.parse(JSON.stringify(this.date))
      else this.displayDate = JSON.parse(JSON.stringify(this.currentDate))
    }
  }
</script>

<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />
