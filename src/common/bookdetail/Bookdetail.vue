<template>
  <div>
   <div class="mask" @click="handleBookClick"   @touchmove.prevent></div>
     <div class="box">
       <div class="title">
         长隆野生动物世界平日成人票
         <img src="@/imgs/close.png" class="maskClose" alt="" @click="handleBookClick">
       </div>
       <div class="content">
         <div class="content-item">
           <div class="content-title"><img class="detail-icon" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">预定说明</div>
           <div class="content-detail">预定时间：<span class="detail-color">可订明天</span></div>
           <div class="content-detail">有效期：<span class="detail-normal">游玩当天有点</span></div>
         </div>
       </div>
       <div class="footer">
         <div class="footer-left">在线支付<span class="account">￥{{this.account}}</span></div>
         <div  class="footer-right" @click="handleBuyClick">立即预订</div>
       </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'CommonBookdetail',
  data () {
    return {
      status: true
    }
  },
  computed: {
    ...mapState(['account'])
  },
  methods: {
    handleBookClick () {
      this.$emit('close')
    },
    handleBuyClick () {
      if (this.status) {
        this.$router.push('/calendar')
        this.status = false
      } else {
        this.$router.push('/Order')
        this.status = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .mask
    width: 100%
    height: .91rem
    background: rgba(0,0,0,.6)
    position:fixed
    top:0
    left:0
    right:0
    z-index:99
  .box
    background: #ffffff
    position:fixed
    z-index:999
    top:.91rem
    left:0
    right:0
    height:100%
    overflow: scroll
    .title
      position:fixed
      top:.91rem
      left:0
      right:0
      padding: .4rem .2rem .4rem .2rem
      font-size: .36rem
      font-weight: bold
      color:#333
      line-height:.8rem
      border-bottom:1px solid #ccc
      .maskClose
        width:.5rem
        float:right
    .content
      position:fixed
      top:2.8rem
      left:0
      right:0
      background: #fff
      .content-item
        padding:.2rem
        font-size:.3rem
        line-height:.6rem
        .content-title
          font-size:.4rem
          line-height:.7rem
          .detail-icon
            width:.3rem
            margin:0 .2rem .1rem 0
        .content-detail
          margin-left:.5rem
          .detail-color
            background: #ffab1e
            padding:.1rem
            font-size:.26rem
            color:#fff
    .footer
      position: fixed
      z-index: 9999
      bottom: 0
      left: 0
      width: 100%
      height: 1rem
      line-height: 1rem
      border-top:1px solid #ccc
      .footer-left
        color: #fc461d
        text-indent: .2rem
        background: #FFF
        float:left
        width:60%
        .account
          color:#ff9800
          font-size:.45rem
      .footer-right
        overflow: hidden
        background: #ff9800
        color: #fff
        float:left
        width:40%
        font-size: .4rem
        text-align: center
</style>
