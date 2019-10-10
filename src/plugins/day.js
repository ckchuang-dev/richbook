import Vue from 'vue'
import dayjs from 'dayjs'
const dateFormat = (date, format = 'YYYY/MM/DD') => {
  return date ? dayjs(date).format(format) : ''
}

const dateFormatDash = (date, format = 'YYYY-MM-DD') => {
  return date ? dayjs(date).format(format) : ''
}

const dateFormatDashMinute = (date, format = 'YYYY-MM-DD HH:mm') => {
  return date ? dayjs(date).format(format) : ''
}

const getTimestamp = date => {
  return date ? dayjs(date).valueOf() : ''
}

const timeParserPlugin = {
  install(Vue, options) {
    Vue.prototype.$dateFormat = dateFormat
    Vue.prototype.$dateFormatDash = dateFormatDash
    Vue.prototype.$dateFormatDashMinute = dateFormatDashMinute
    Vue.prototype.$getTimestamp = getTimestamp
  }
}

Vue.use(timeParserPlugin)
