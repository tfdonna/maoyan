<template>
    <div>
        <div class="page-header">
            <div class="page-header-left"><i class="iconfont icon-return"  @click="goHome"></i></div>
            <div class="page-header-mid">{{itemObj.nm}}</div>
            <div class="page-header-right"></div>
        </div>
        <section class="cbox">
            <div class="c-left"><img src="../img/cy-logo.png" class="img-logo"/></div>
            <div class="c-right">
                <span class="benifit">19.9元起购票</span>
                <span class="line">|</span>
                <span class="open">打开App ></span>
            </div>
        </section>
        <div class="movie-detail">
            <div class="poster-bg">
            <div class="detail">
                <div class="poster"><img :src="itemObj.img"/></div>
                <div class="content">
                    <div class="title line-ellipsis">{{itemObj.nm}}</div>
                    <div class="public line-ellipsis">{{itemObj.enm}}</div>
                    <div class="score line-ellipsis">
                        <span>{{itemObj.sc}}</span>
                        <span class="snum">({{itemObj.snum}}人评价)</span>
                    </div>
                    <div class="type line-ellipsis">{{itemObj.cat}}</div>
                    <div class="public line-ellipsis">{{itemObj.src}}/{{itemObj.dur}}分钟</div>
                    <div class="public line-ellipsis">{{itemObj.pubDesc}}</div>
                </div>
            </div>
            </div>
        </div>
        
        <!--显示 日期数据-->
        <div class="show-wrap rote-list">
            <van-tabs @click="getData" v-model="active" title-active-color='#ee0a24'>
                <van-tab class="day" v-for="(item, index) in dateArr" :key="index" :title="item.date | format"></van-tab>
            </van-tabs>
            <!-- <van-tabs @click="getData" class="date">
                <van-tab
                    v-for="(item, index) in dateArr"
                    :key="index"
                    :title="item.date | format"
               class="day" >
                </van-tab>
            </van-tabs> -->
            <!-- <div class="item-title"></div> -->
            <!-- <el-tabs v-model="active" @tab-click="getData">
                <el-tab-pane v-for="(item, index) in dateArr" :key="index" label="item.date | format"  name="item.date">{{item.date}}</el-tab-pane>
            </el-tabs> -->
            <!-- <div class="day chosen">今日09月24日</div>
            <div class="day">明天09月25日</div>
            <div class="day">后天09月26日</div>
            <div class="day">周一09月27日</div>
            <div class="day">周二09月28日</div>
            <div class="day">周三09月29日</div>
            <div class="day">周四09月30日</div> -->
        </div>
        
        
        <div class="nav-wrap">
            <span>全城<i class="iconfont icon-sanjiao"></i></span>
            <span>品牌<i class="iconfont icon-sanjiao"></i></span>
            <span>特色<i class="iconfont icon-sanjiao"></i></span>
        </div>
        <!--显示 当天影院列表-->
        <div class="cinema-wrap">
            <Itemcinema :itemC="itemC"></Itemcinema>
        </div>
    </div>
</template>

<script>
import axios from 'axios' 
import Itemcinema from '../components/home/Itemcinema.vue'

export default {
    name: 'Item',
    data(){
        return{
            id: 0,
            itemObj: {}, //内容页返回的数据是对象
            itemC: {}, //影院信息
            dateArr: [], //保存日期数据
            active: 2
        }
    },
    components:{
        Itemcinema
    },
    //日期时间过滤器： 将年月日转为 周几， 前三天需要写成是今天 明天 后天
    filters:{
        format(value){
            var arr = value.split('-');
            var str = ''; //输出带 今天 明天 后天的字符串
            var jintian = ['今天', '明天', '后天'];
            //将 传过来的日期转为date的格式
            var d1 = new Date(value);
            //获取当前时间的年月日
            var dd = new Date();
            var y = dd.getFullYear();
            var m = dd.getMonth() + 1;
            var d = dd.getDate();
            var d2 = new Date(y + '-' + m + '-' + d);
            //求今天明天后天
            var iday = parseInt(parseInt(d1-d2)/1000/60/60/24);

            //判断 今天明天后天 还是 周几循环
            if(jintian[iday] != undefined){
                str = jintian[iday];
            }else{
                str = `周${'日一二三四五六'.charAt(d1.getDay())}`;
            }
            return (str += `${arr[1]}月${arr[2]}日`);
        }
    },
    methods:{
        goHome(){
            this.$router.push('/');
        },
        getCinemaArr(date){
            axios.get('/api/mtrade/mmcs/cinema/v1/select/movie/cinemas.json?limit=20&offset=0&utm_term=7.5&client=iphone&channelId=4&areaId=-1&brandId=-1&districtId=-1&hallType=-1&lineId=-1&movieId='+ this.id +'&serviceId=-1&stationId=-1&showDate='+ date +'&cityId=57&ci=57').then(res => {
                this.itemC = res.data.data.cinemas;
                console.log(this.itemC);
            });
        },
        getData(name, title){
            console.log(name, title);  //使用title可以接受到日期数据
            //再一次获取数据
            this.getCinemaArr(this.dateArr[name].date);
        },
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    mounted(){
        //获取到从列表页传过来的参数
        console.log(this.$route);
        this.id = this.$route.params.id;
        //获取内容页的数据
        axios.get('/api/mtrade/mmdb/movie/v5/' + this.id + '.json?optimus_uuid=3084E8D0146211ECA50A477D88250D251D93073CCDCC41D9A4CAC797521EC42D&optimus_risk_level=71&optimus_code=10').then(res => {
            console.log(res);
            var data = res.data.data.movie;
            data.img = data.img.replace("w.h", "128.180");
            this.itemObj = data
        });
        //获取日期数据
        axios.get('/api/mtrade/mmcs/show/v1/movie/showdays.json?movieId=1356063&channelId=4&cityId=30').then(res => {
            console.log(res);
            this.dateArr = res.data.data.dates;
            //获取影院数据
            this.getCinemaArr(this.dateArr[0].date);
        })
        
    }
}
</script>

<style>
.page-header{
    width: 100%;
    height: 50px;
    background: #e54847;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    color: white;
    line-height: 50px;
}
.page-header-left, .page-header-right{
    width: 15%;
    height: 100%;
    padding-left: 10px;
}
.page-header-left .iconfont{
    font-size: 25px;
}
.page-header-mid{
    width: 70%;
    height: 100%;
    text-align: center;
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
    margin: 1px 10px;
}
.line{
    display: inline-block;
    position: absolute;
    right: 89.5px;
    color: rgba(0,0,0,.2);
    margin-top: 2px;
    margin-right: 10px;
}
.open{
    position: absolute;
    right: 13px;
    color: #b37e7e;
    font-weight: 700;
    font-size: 16px;
}
.movie-detail{
    position: relative;
    height: 188px;
    overflow: hidden;
    cursor: pointer;
    width: 100%;
    background: radial-gradient(#696969 5%, #333 80%);
}
.detail{
    display: flex;
    padding: 19px 30px 19px 15px;
    height: 150px;
    font-size: 12px;
}
.poster{
    width: 110px;
    height: 150px;
}
.poster img{
    width: 100%;
}
.content{
    overflow-x: hidden;
    margin-left: 12.5px;
    line-height: 1;
    color: #fff;
}
.line-ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.title{
    font-size: 20px;
    margin-top: 2px;
    font-weight: 700;
    overflow: hidden;
}
.public, .type{
    margin-top: 10px;
    opacity: .8;
}
.score {
    margin-top: 11px;
    font-size: 18px;
    font-weight: 700;
    color: #fc0;
}
.score .snum{
    margin-left: 5px;
    font-size: 12px;
    color: #fff;
    opacity: .8;
}
.show-wrap{
    position: relative;
    display: flex;
    width: 100%;
    height: 45px;
    background-color: #fff;
    overflow-x: auto;
    z-index: 11;
}
.rote-list{
    overflow: scroll;
  white-space: nowrap;
}
.show-wrap, .nav-wrap {
    height: 45px;
    border-bottom: 1px solid #999;
    display: flex;
}

.nav-wrap span{
    -webkit-box-flex: 1;
    flex: 1;
    position: relative;
    text-align: center;
    font-size: 13px;
    line-height: 40px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #999;
}
.item-title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

</style>