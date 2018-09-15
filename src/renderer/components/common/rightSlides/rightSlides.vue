<template>
    <Carousel autoplay v-model="value2" loop :autoplay-speed="5000">
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../../../assets/SlidesDemo-1.jpg" width="100%" style="margin:auto">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../../../assets/SlidesDemo-2.jpg" width="100%" style="margin:auto">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../../../assets/SlidesDemo-3.jpg" width="100%" style="margin:auto">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../../../assets/SlidesDemo-4.jpg" width="100%" style="margin:auto">
            </div>
        </CarouselItem>
    </Carousel>
</template>

<script>
    export default {
        name: "right-slides",
        data () {
            return {
                value2: 0
            }
        }
    }
</script>

<style>
    .demo-carousel {
        height: 223px;
        width: 100;
        border:0px;
        background-color: #eeeeee;
        text-align: center;
        padding:0px;
        line-height: 223px;
        margin: auto;
    }
</style>