<template>
    <!-- 来源：https://www.iviewui.com/components/carousel -->
    <Carousel autoplay v-model="value2" loop autoplay-speed=5000>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
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
        background-color: #1a73e8;
        text-align: center;
        padding:6px;
    }
</style>