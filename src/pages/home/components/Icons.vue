<template>
<div class="icons">
  <swiper >
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon"
             v-for="item of page"
             v-bind:key="item.id">
          <div class="icon-img">
            <img class="icon-imgContent" :src="item.iconURL" alt="">
          </div>
          <p class="icon-desc">{{item.content}}</p>
        </div>
      </swiper-slide>
  </swiper>
</div>
</template>

<script>
export default{
  name: 'HomeIcons',
  data () {
    return {
      IconList: [{
        id: '001',
        iconURL: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        content: '热门景点'
      }, {
        id: '002',
        iconURL: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        content: '踏青赏花'
      }, {
        id: '003',
        iconURL: 'https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        content: '毕游榜单'
      }, {
        id: '004',
        iconURL: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        content: '热门景点'
      }, {
        id: '005',
        iconURL: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        content: '热门景点'
      }, {
        id: '006',
        iconURL: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        content: '热门景点'
      }, {
        id: '007',
        iconURL: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        content: '热门景点'
      }, {
        id: '008',
        iconURL: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        content: '热门景点热门景点热门景点'
      }, {
        id: '009',
        iconURL: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        content: '热门景点'
      }]}
  },
  computed: {
    pages () {
      const pages = []
      this.IconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height:0
    padding-bottom:50%
  .icons
    width:100%
    overflow:hidden
    height:0
    padding-bottom:50%
    background:#fff
  .icon
    position:relative
    overflow hidden
    float:left
    width:25%
    height:0
    padding-bottom:25%
  .icon-img
    position:absolute
    top:0;
    left:0
    right:0
    bottom:.44rem
    box-sizing:border-box
    paddind:.1rem
  .icon-imgContent
    height:100%
    display:block
    margin:0 auto
  .icon-desc
      position:absolute
      bottom:0;
      left:0
      right:0
      height:.44rem
      line-height:.44rem
      text-align:center
      color:$darkTextColor
      ellipsis()
</style>
