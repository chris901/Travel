<template>
<div>
  <div class="header">
    <router-link to="/detail/001">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    选择游玩日期
  </div>
  <div class="calendar">
  <Calendar
    @choseDay="clickDay"
    @changeMonth="changeDate"
    @isToday="clickToday"
    :agoDayHide = this.timestamp
  ></Calendar>
    <h3>已选日期：{{this.day}} <span class="account">￥{{this.account}}</span></h3>
    <div class="div" @click="handleDivClick">
      确定
    </div>
  </div>
</div>
</template>

<script>
import Calendar from 'vue-calendar-component'
import {mapState} from 'vuex'
export default {
  name: 'CalendarPage',
  components: {
    Calendar
  },
  data () {
    return {
      day: '今天',
      timestamp: '',
      list: [451, 443, 53, 55, 666, 866, 66]
    }
  },
  computed: {
    ...mapState(['account'])
  },
  methods: {
    clickDay (data) {
      this.day = data
      console.log('选中了', data)
    },
    clickToday (data) {
      console.log('跳到了本月', data)
    },
    changeDate (data) {
      console.log('左右点击切换月份', data)
    },
    handleDivClick () {
      history.go(-1)
    }
  },
  mounted () {
    console.log(Math.round(new Date().getTime() / 1000).toString())
    this.timestamp = Math.round(new Date().getTime() / 1000).toString()
    console.log(typeof (this.timestamp))
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    z-index:2
    position:fixed
    top:0
    left:0
    right:0
    height:1rem
    line-height:1rem
    text-align:center
    color:#fff
    background:$bgColor
    font-size:.32rem
    box-sizing:border-box
   .header-back
    position:absolute
    top:0
    left:0
    width:.64rem
    text-align:center
    font-size:.35rem
    font-weight:bold
    color:#fff
  .wh_container
      margin:1rem auto
      max-width: 500px
  h3
    text-align: center
    width: 90%
    margin: auto
    line-height:.5rem
    .account
      font-size: .5rem
      color:#ff9800
      float:right
      margin-right:1.5rem
  .div {
    margin: auto;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #ff9800;
    color: #fff;
    font-size: .4rem;
    text-align: center;
    position:fixed
    bottom:0
    left:0
    right:0
  }
</style>
<style lang="stylus">
  .wh_content_all
    background-color: #fff
    .wh_top_changge
     background: #7fb4bb
    .wh_content_item
      color:#000
      padding-bottom: 15.14%
</style>
