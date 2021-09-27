<template>
  <div>
    <!--近期最受期待-->
    <Coming :coming="coming"></Coming>
    <!--待映-->
    <div class="space"></div>
    <div class="coming-list">
      <div v-for="(value, key) in comingdate" :key="key">
        <p class="group-date">{{key}}</p>
        <div v-for="item in value" :key="item.id" class="main">
          <div class="poster"><img :src="item.img" /></div>
          <div class="content">
            <div class="column">
              <div class="nm-title">
                {{item.nm}}
                <span v-if="item.version !== '' && item.version == 'v2d imax'" class="max">
                    <span>2D</span> IMAX
                </span>
                <span v-if="item.version !== '' && item.version == 'v3d'" class="max">
                    <span>3D</span>
                </span>
              </div>
              <div class="detail"><span class="wanting">{{item.wish}}</span>人想看</div>
              <div class="detail">主演：{{item.star}}</div>
              <div class="detail">{{item.rt}}上映</div>
            </div>
            <div class="btn">
              <div :class="item.preShow? 'true':'false'">{{item.preShow ? '预售' : '想看'}}</div>
            </div>
          </div> 
        </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import Coming from '@/components/home/Coming.vue';

export default {
    name: 'Tobeshow',
    data(){
      return{
        coming: [],
        comingdate: []
      }
    },
    components:{
      Coming
    },
    mounted(){
      axios.get('/ajax/mostExpected?ci=57&limit=10&offset=0&token=&optimus_uuid=72FC6CE015CC11ECB34C79BCA5547CBFA05F017A40684B6E91459AAEAAE856FB&optimus_risk_level=71&optimus_code=10').then(res => {
        console.log(res);
        res.data.coming.forEach((item)=> {
          item.img = item.img.replace("w.h", "128.180");
        });
        this.coming = res.data.coming;
      }),
      axios.get('/ajax/comingList?ci=57&token=&limit=10&optimus_uuid=72FC6CE015CC11ECB34C79BCA5547CBFA05F017A40684B6E91459AAEAAE856FB&optimus_risk_level=71&optimus_code=10').then(res => {
        console.log(res);
        var list = res.data.coming;
        var daiying = {};
        //怎么讲一位数组按照日期转为二维数组
        list.forEach((item) => {
          item.img = item.img.replace("w.h", "128.180");
          if(daiying[item.comingTitle]){
            daiying[item.comingTitle].push(item);
          }else{
            //待映对象里创建了一个新数组
            daiying[item.comingTitle] = [];
            daiying[item.comingTitle].push(item);
          }
        });
        console.log(daiying);
        this.comingdate = daiying;
      })
    }
}
</script>

<style scoped>
body{
  font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
}
.space{
  height: 10px;
  width: 100%;
  background: #f5f3f3;
}
.coming-list{
  margin-left: 10px;
  
}
.group-date{
  padding: 12px 5px 0;
  margin: 0;
  font-size: 15px;
  color: #333;
}
.main{
  position: relative;
  width: 100%;
  height: 114px;
  border-bottom: 1px solid #ececec;
}
.poster{
  width: 18%;
  position: relative;
  margin-top: 12px;
  margin-right: 10px;
  float: left;
  
}
.poster img{
  width: 100%;
}
.content{
  padding: 12px 14px 12px 0;
  height: 90px;
  max-height: 90px;
  position: relative;
}
.nm-title{
  max-height: 24px;
  margin-bottom: 7px;
  line-height: 24px;
  overflow: hidden;
  font-size: 17px;
  color: #333;
  font-weight: 700;
  padding-right: 5px;
  flex-shrink: 1;
}
.max{
  font-size: 8px;
  border: 1px solid #7498ae;
  color: #7498ae;
  padding: 2px;
  padding-left: 0px;
}
.max span {
    color: #fff;
    background: #7498ae;
    padding: 2px;
}
.detail{
  font-size: 13px;
  color: #666;
  margin-top: 6px;
  line-height: 15px;
}
.wanting{
  color: #faaf00;
  font-size: 15px;
  font-weight: 600;
  margin-right: 3px;
}
.btn{
  font-size: 12px;
  position: absolute;
  right: 14px;
  top: 0;
  bottom: 0;
  height: 27px;
  margin: auto;
}
.btn > div{
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  color: #fff;
}
.true{
  background: #3c9fe6;
}
.false{
  background: #faaf00;
}
</style>