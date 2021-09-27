<template>
    <div class="box">
        <section class="hbox">
            <span class="title">猫眼电影</span>
            <span class="more">☰</span>
        </section>
        <!-- <section class="cbox">
            <div class="c-left"><img src="../img/cy-logo.png" class="img-logo"/></div>
            <div class="c-right">
                <span class="benifit">发现最新最热电影</span>
                <span class="line">|</span>
                <span class="open">打开App ></span>
            </div>
        </section> -->
        <!-- <section class="fbox">
            <div class="f-left"><span class="city">武汉<i class="iconfont icon-sanjiao"></i></span></div>
            <div class="f-middle">
                <router-link to="Hotfilm">热映</router-link>
                <router-link to="Cinema">影院</router-link>
                <router-link to="Tobeshow">待映</router-link>
                <router-link to="Classic">经典电影</router-link>
            </div>
            <div class="f-right"><img src="../img/search.png"/></div>
        </section>     -->
    </div>
    
</template>
<script>
//js
//导出
export default{
    name: 'Header',
    data(){
        return {};
    },
    methods: {},
    components: {}
}
</script>
<style scoped>
/*  页面样式  */
/* scoped : 表示样式只在该页面起作用，可以防止css相互覆盖*/
.hbox{
    width: 100%;
    height: 50px;
    background: #e54847;
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    /* padding-top: 10px; */
    color: white;
}
.title{
    margin: auto;
}
.more{
    float: right;
    margin-right: 15px;
    margin-top: 7px;
    font-size: 25px;
}
.cbox{
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 1px solid #e8e8e8;

}
.c-left{
    margin-top: 10px;
    width: 35%;
    height: 70%;
}
.img-logo{
    height: 100%;
    margin-left: 5px;
}
.c-right{
    width: 65%;
    margin: 1.67em 0;
    position: relative;
}
.benifit{
    font-size: 14px;
    position: absolute;
    right: 100px;
    font-weight: 620;
    color: #666;
    margin-top: 1px;
}
.line{
    display: inline-block;
    position: absolute;
    right: 89.5px;
    color: rgba(0,0,0,.3);
}
.open{
    position: absolute;
    right: 12px;
    color: #b37e7e;
    font-weight: 700;
    font-size: 16px;
}

</style>
