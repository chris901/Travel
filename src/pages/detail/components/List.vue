<template>
  <div>
   <div
     class="item"
     v-for="(item,index) of list"
     :key="index"
   >
     <div class="item-title border-bottom">
       <span class="item-title-icon"></span>
       {{item.title}}
     </div>
     <div
       v-for="innerItem of item.children"
       :key="innerItem.id"
       class="item-children">
       {{innerItem.title}}
       <div class="item-children-detail" @click="handleDetailClick" @touchmove.prevent>
         <img class="detail-icon" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">
         {{innerItem.detail}}
         <div class="show-detail">预定需知</div>
       </div>
       <div class="item-children-right">
         <div><span class="account">￥</span>{{innerItem.price}}</div>
         <button class="item-children-button">预定</button>
       </div>
     </div>
   </div>
    <transition name="fade">
      <common-bookdetail v-show="showDetail" @close="handleBookClose"></common-bookdetail>
    </transition>
  </div>
</template>

<script>
import CommonBookdetail from 'common/bookdetail/Bookdetail'
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data () {
    return {
      showDetail: false
    }
  },
  methods: {
    handleDetailClick () {
      this.showDetail = true
    },
    handleBookClose () {
      this.showDetail = false
    }
  },
  components: {
    CommonBookdetail
  }
}
</script>

<style lang="stylus" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease-out
  }
  .fade-enter, .fade-leave{
    opacity: 0
  }
  .item
    margin-bottom:.5rem
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
     padding:0 .2rem
     font-size:.32rem
     line-height:1rem
     position:relative
    .item-children-detail
      font-size:.2rem
      line-height:.35rem
      margin-bottom:.4rem
      .detail-icon
       width:.2rem
      .show-detail
        margin-left:.25rem
        line-height: .5rem
        color:#00afc7
    .item-children-right
        position:absolute
        right:.4rem
        top:.3rem
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
          color: #fff
          font-size: .28rem
          line-height: .6rem
          border-radius:.08rem
          background:#ff8c12

</style>
