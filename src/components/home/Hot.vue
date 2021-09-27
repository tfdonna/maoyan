<template>
  <div>
    <ul>
        <li v-for="item in reyingList" :key="item.id">
            <router-link :to="'/item/' + item.id" class="item">
                <div class="item-img">
                    <img :src="item.img" />
                </div>
            </router-link>
                <div class="item-text">
                    {{item.nm}}
                    <span v-if="item.version !== '' && item.version == 'v2d imax'" class="max">
                        <span>2D</span> IMAX
                    </span>
                <span v-if="item.version !== '' && item.version == 'v3d imax'" class="max">
                    <span>3D</span> IMAX
                </span>

                    <div class="item-sc">点映评 <span>{{item.sc}}</span></div>
                    <div class="item-star">主演：{{item.star}}</div>
                    <div class="item-rt">{{item.showInfo}}</div>
                </div>
                    
                <div class="item-btn">
                    <div :class="item.globalReleased?'gp':'ys'">{{item.globalReleased ? '购票' : '预售'}}</div>
                </div>
            
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Hot",
  props: ["reyingList"],
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

ul,
li {
    list-style: none;
}

ul li {
    display: flex;
    border-bottom: 1px solid rgb(212, 205, 205);
    margin: 10px auto;
}

ul li .item-img {
    width: 30%;
}

ul li .item-img img {
    width: 64px;
    height: 90px;
    margin-left: 10px;
}

ul li .item-text {
    width: 80%;
    font-size: 17px;
    margin-left: 10px;    
}
.item-text .max {
    font-size: 8px;
    border: 1px solid #7498ae;
    color: #7498ae;
    padding: 2px;
    padding-left: 0px;
}
.item-text .max span {
    color: #fff;
    background: #7498ae;
    padding: 2px;
}
ul li .item-sc, .item-star, .item-rt{
    margin-top: 5px;
    color: gray;
    font-size: 13px;
}
ul li .item-sc span{
    color: #ffc400;
    font-weight: bold;
    font-size: 16px;
}
ul li .item-btn {
    width: 20%;
}
.item-btn > div{
    border: none;
    width: 45px;
    height: 22px;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
}
.gp {
    background: #f03d37;
    color: #fff;
}

.ys {
    background: #3c9fe6;
    color: #fff;
}
        
</style>