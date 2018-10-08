<template>
    <Carousel autoplay v-model="value2" loop :autoplay-speed="5000">
        <CarouselItem>
            <div class="demo-carousel_1">
                <!-- <img src="../../../assets/SlidesDemo-1.jpg" width="100%" style="margin:auto"> -->
                专栏功能将于不久后和大家见面~~ (*╹▽╹*)<br/>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel_2">
                <!-- <img src="../../../assets/SlidesDemo-2.jpg" width="100%" style="margin:auto"> -->
                专栏功能将于不久后和大家见面~~ (*╹▽╹*)<br/>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel_3">
                <!-- <img src="../../../assets/SlidesDemo-3.jpg" width="100%" style="margin:auto"> -->
                专栏功能将于不久后和大家见面~~ (*╹▽╹*)<br/>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel_4">
                <!-- <img src="../../../assets/SlidesDemo-4.jpg" width="100%" style="margin:auto"> -->
                    专栏功能将于不久后和大家见面~~ (*╹▽╹*)<br/>
            </div>
        </CarouselItem>
    </Carousel>
</template>

<script>
    export default {
      name: 'right-slides',
      data() {
        return {
          value2: 0,
        };
      },
    };
</script>

<style>
    .demo-carousel_1 {
        height: 223px;
        width: 100;
        border:0px;
        background-color: #FFFFE0;
        text-align: center;
        padding:0px;
        line-height: 223px;
        margin: auto;
    }
    .demo-carousel_2 {
        height: 223px;
        width: 100;
        border:0px;
        background-color: #FFC125;
        text-align: center;
        padding:0px;
        line-height: 223px;
        margin: auto;
    }
    .demo-carousel_3 {
        height: 223px;
        width: 100;
        border:0px;
        background-color: #F08080;
        text-align: center;
        padding:0px;
        line-height: 223px;
        margin: auto;
    }
    .demo-carousel_4 {
        height: 223px;
        width: 100;
        border:0px;
        background-color: #E0FFFF;
        text-align: center;
        padding:0px;
        line-height: 223px;
        margin: auto;
    }
</style>