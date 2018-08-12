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
                </div>
            </div>
           
        </Card>
    </div>
</template>
<script>
    export default{
        name:'card',
        props:['width','url','title','content','details'],
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
    font-weight: 400;
    font-size: 30px;
    margin-top: -10px;
}
.cardRight .content{
    margin-top: 10px;
}
.cardRight .details{
    width: 430px;
    font-size:12px;
    margin-top: 20px;
}
</style>
