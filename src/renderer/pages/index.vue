<template>
    <div id="wrapper">
        <card-button type="ios-paperplane" size="50" color="green" v-on:click-button="test()" text="1234">
        </card-button>
    </div>
</template>

<script>
    import cardButton from '../components/common/cardButton/cardButton';

    export default {
        name: 'index-page',
        components: { cardButton },
        data() {
          return {

          }
        },
        methods: {
            test() {
                console.log("1");
            }
        },
    };
</script>

<style lang="stylus">

</style>
