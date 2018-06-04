<template>
  <div>
    <div class="title">
      <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="周末去哪儿">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of List" :key="item.id">
        <div class="img-warp">
          <img class="item-img" :src='item.imgURL' alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  props: {
    List: Array
  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
    .title
     background: #eeeeee
     text-indent:.2rem
     line-height: .8rem
     .mp-title-img
       width: 0.4rem
       margin-bottom: 0.1rem
    .img-warp
      overflow:hidden
      height:0
      padding-bottom:33.9%
      .item-img
        width:100%
    .item-info
      flex: 1
      min-width:0
      padding:.1rem
      .item-title
        line-height:.6rem
        font-size:.32rem
        ellipsis()
      .item-desc
        line-height:.4rem
        color:#ccc
        margin-bottom:.2rem
</style>
