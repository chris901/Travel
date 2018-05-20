<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
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
  data () {
    return {
      weekendList: [{
        id: '001',
        imgURL: 'https://imgs.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
        title: '广州必游top10',
        desc: '感受现代与传统相融的广州'
      }, {
        id: '002',
        imgURL: 'https://imgs.qunarzz.com/sight/source/1606/88/56f7f4bd0493fe.jpg_r_640x214_f8c0994a.jpg',
        title: '广州必游top10',
        desc: '感受现代与传统相融的广州'
      }, {
        id: '003',
        imgURL: 'https://imgs.qunarzz.com/sight/source/1606/88/56f7f4bd0493fe.jpg_r_640x214_f8c0994a.jpg',
        title: '广州必游top10',
        desc: '感受现代与传统相融的广州'
      }]
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
    .title
     margin-top: .2rem
     background: #eeeeee
     text-indent:.2rem
     line-height: .8rem
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
