<template>
  <div class="wrapper">
     <swiper :options="swiperOption" >
       <swiper-slide v-for="item of swiperList" v-bind:key="item.id">
         <img class="swiper-img" :src="item.imgURL" alt="">
       </swiper-slide>
       <div class="swiper-pagination"  slot="pagination"></div>
     </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgURL: 'https://imgs.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
      }, {
        id: '002',
        imgURL: 'https://imgs.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'
      }, {
        id: '003',
        imgURL: 'https://imgs.qunarzz.com/piao/fusion/1805/44/70b819ab2b3c02.jpg_750x200_fe9147c8.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background:#fff !important
  .wrapper
    overflow:hidden
    width: 100%
    height:0
    padding-bottom:26.66%
    background #ccc
  .swiper-img
     width:100%

</style>
