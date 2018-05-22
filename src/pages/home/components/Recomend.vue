<template>
  <div>
    <div class="title">热销推荐</div>
     <ul>
       <router-link
         tag="li"
         class="item border-bottom"
         v-for="item of List"
         :key="item.id"
         :to="'/detail/' + item.id"
       >
         <img class="item-img" :src='item.imgURL' alt="">
         <div class="item-info">
           <p class="item-title">{{item.title}}</p>
           <p class="item-desc">{{item.desc}}</p>
           <p class="item-count"><span class="item-count-span">{{item.count}}</span>起</p>
           <button class="item-button">查看详情</button>
         </div>
       </router-link>
     </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeRecomend',
  props: {
    List: Array
  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    background: #eeeeee
    text-indent:.2rem
    line-height: .8rem
  .item
    overflow:hidden
    display:flex
    heigh:1.9rem
    position:relative
    .item-img
     width:1.7rem
     height:1.7rem
     padding:.1rem
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
      .item-count
        line-height:.6rem
       .item-count-span
        font-size:.4rem
        color:#ff8300
      .item-button
        float:right
        background: #ff9300
        color:#fff
        border-radius:.06rem
        display:inline-block
        padding:.1rem
        position:absolute
        bottom:.2rem
        right:.1rem
</style>
