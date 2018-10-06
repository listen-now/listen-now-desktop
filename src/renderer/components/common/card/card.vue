<template>
    <div class="card">
        <Card :style={width:width}>
            <div class="all">
                 <div class="cardLeft">
                    <img :src="url" alt="">
                </div>
                <div class="cardRight">
                    <h2>{{title}}</h2>
                    <p class="content">{{content}}</p>
                    <p class="details">{{details}}</p>
                    <div class="cardRight__buttonGroup">
                        <card-button size="25" 
                                     type="ios-heart-outline"
                                     text="收藏" 
                                     color="rgb(248, 100, 129)"
                                     style="position:absolute;left:450px;top:-60px;"></card-button>
                        <card-button size="25" 
                                     type="navicon" 
                                     text="选择"
                                     color="rgb(252, 162, 87)"
                                     style="position:absolute;left:520px;top:-60px;"></card-button>
                        <card-button size="25" 
                                     type="ios-search" 
                                     text="搜索"
                                     color="rgb(226, 90, 79)"
                                     style="position:absolute;left:590px;top:-60px;"></card-button>
                        <card-button size="25" 
                                     type="paper-airplane" 
                                     text="分享"
                                     color="rgb(50, 161, 198)"
                                     style="position:absolute;left:660px;top:-60px;"></card-button>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>
<script>
    import cardButton from '../cardButton/cardButton';
    export default{
        name:'card',
        props:['width','url','title','content','details'],
        components:{
            cardButton
        }
    }
</script>
<style scoped>
.all{
    width:100%;
    height: 150px;
}
.cardLeft{
   float: left;  
}
.cardLeft img{
    width:150px;
    height: 150px;
}
.cardRight{
   float: left;  
   margin-left: 15px;
}
.cardRight h2{
    font-weight: 800;
    font-size: 30px;
    margin-top: -10px;
}
.content{
    color: #cccaca;
    font-size: 12px;
}
.cardRight .content{
    /* margin-top: 10px; */
}
.cardRight .details{
    width: 400px;
    height: 90px;
    overflow: auto;
    font-size:12px;
    margin-top: 10px;
}
.details::-webkit-scrollbar {
    display: none;
}
.cardRight__buttonGroup {
    position: absolute;
}
</style>
