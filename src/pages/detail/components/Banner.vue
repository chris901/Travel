<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1707/47/477416df92210439a3.img.jpg_600x330_7d22303b.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">长隆欢乐世界AAAA景区</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>39</div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handeGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1707/9e/9e4e6a4ed3d4b1dea3.img.jpg_r_800x800_4b722052.jpg','http://img1.qunarzz.com/sight/p0/1707/98/980fe14f4f40df8ca3.img.jpg_r_800x800_144c8e2d.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handeGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position:relative
  overflow:hidden
  height:0
  padding-bottom:55%
  .banner-img
    width: 100%
  .banner-info
    display:flex
    position:absolute
    left:0
    right:0
    bottom:0
    line-height:.6rem
    color:#fff
    background-image:linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
    .banner-title
      flex:1
      font-size:.32rem
      padding:0 .2rem
    .banner-number
      height:.32rem
      line-height:.32rem
      padding:0 .4rem
      margin-top:.14rem
      border-radius:.2rem
      font-size:.26rem
      background: rgba(0,0,0,.8)
      .banner-icon
        font-size:.26rem
        margin-right:.1rem
</style>
