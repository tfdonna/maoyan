<template>
  <div>
    <Header></Header>
    <Header1></Header1>
    <section class="fbox">
        <div class="f-left"><span class="city">武汉<i class="iconfont icon-sanjiao"></i></span></div>
        <div class="f-middle">
            <router-link to="Hotfilm">热映</router-link>
            <router-link to="Cinema">影院</router-link>
            <router-link to="Tobeshow">待映</router-link>
            <router-link to="Classic">经典电影</router-link>
        </div>
        <div class="f-right"><img src="../../img/search.png"/></div>
    </section>  
    <router-view></router-view>
   
  </div>
</template>

<script>
//引入 头部
import Header from "../../components/Header.vue";
import Header1 from '../../components/Header1.vue'

export default {
  name: "Movie",
  data: function () {
    return {
      reyingList: [],
      greatlist: ''
    };
  },
  components: {
    Header, Header1
  }
};
</script>

<style scoped>
.fbox{
    width: 100%;
    height: 40px;
    display: flex;
    border-bottom: 1px solid #e8e8e8;
    align-items: center;
    justify-content: space-between;
}
.f-left{
    width: 20%;
    align-items: center;
    justify-content: space-between;
}
.city{
    color: #666;
    padding-left: 15px;
    font-size: 15px;
}
.f-middle{
    width: 65%;
    display: flex;
    position: relative;
    justify-content: space-around;
    margin: auto;
}
.f-middle a{
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    color: #666;
    margin: auto;
}

.f-middle a.router-link-exact-active {
  font-size: 17px;
  font-weight: bold;
  color: #333;
}
.f-middle a.router-link-exact-active::after{
    content: '';
    width: 60%;
    display: block;
    margin:0 auto;
    border-bottom: 3px solid #e54847;
}
.f-right{
    width: 15%;
    align-items: center;
    justify-content: space-between;
}
.f-right img{
    width: 20px;
    height: 20px;
    padding: 10px 10px 10px 20px;
}
</style>