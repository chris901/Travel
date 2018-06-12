<template>
  <div>
    <div class="header">
      <div class="iconfont header-back" @click="backClick">&#xe624;</div>
      订单填写
    </div>
    <div class="item">
      <div class="item-children">
        深圳欢乐谷成人票（无需排队取票，刷身份证入园）
        <div class="item-children-detail">
          <div class="showTime">
            <img class="detail-icon" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">
            2018-06-08
          </div>
          <div class="show-detail">预定需知</div>
        </div>
        <div class="item-right">
          <div><span class="account">￥</span>222</div>
          <button class="item-children-button">预定需知</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderHeader',
  methods: {
    backClick () {
      this.$router.go(-1)
    }
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
  .item
    margin:1rem 0 .5rem 0
    color:#666
    &:after
      content:''
      height: .25rem
      display:block
      background: #f5f5f5
  .item-title
    line-height:.8rem
    font-size:.32rem
    padding:0 .2rem
  .item-title-icon
    position:relative
    top:.06rem
    left:.06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-children
    width:70%
    padding: .3rem 0.2rem 0
    font-size:.38rem
    line-height:.6rem
  .item-children-detail
    font-size:.2rem
    height:.4rem
    line-height:.5rem
    margin-bottom:.4rem
    clear:both
    .showTime
      float:left
      height:.5rem
    .detail-icon
      width:.2rem
    .show-detail
      float:left
      margin-left:.25rem
      line-height: .5rem
      color:#00afc7
  .item-right
    position:absolute
    right:.4rem
    top:1.5rem
    width:1rem
    font-size: .35rem
    text-align:center
    line-height: .4rem
    font-weight:150
    color:#ff8c12
    .account
      font-size: .25rem
    .item-children-button
      height: .6rem
      width:1.2rem
      color: $bgColor
      font-size: .35rem
      line-height: .6rem
      border-radius:.08rem
      background:#fff
      font-weight:600
</style>
