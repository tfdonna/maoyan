<template>
  <div>
      <div v-for="item in itemC" :key='item.index' class="cinema">
        <div class="nm">
            <span class="name">{{item.nm}}</span>
            <div class="i-price">
                <span class="price">{{item.price}}</span>
                <span class="q">元起</span>
            </div>
        </div>
        <div class="addr">{{item.addr}}</div>
        <div class="labels">
            <span  v-for='i in item.labels' :style='{color:i.color}' :key='i.index' class="msg">{{i.name}}</span>
        </div>
        <div class="discount">
            <div class="ka">卡</div>
            <div class="promotion">{{item.promotion.cardPromotionTag}}</div>
        </div>
        <div class="showTime">近期场次：{{item.showTimes}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Itemcinema',
    props: ['itemC']
}
</script>

<style scoped>
.cinema{
    width: 90%;
    height: 100px;
    position: relative;
    padding: 13px 15px 13px 0;
    margin-left: 15px;
    overflow: hidden;
    border-bottom: 1px solid #999;
}
.nm{
    display: flex;
}
.name{
    -webkit-box-flex: 1;
    flex: 1;
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
}
.i-price{

    display: inline-block;
}
.price{
    color: #f03d37;;
    font-size: 18px;
}
.q{
    color: #f03d37;;
    font-size: 11px;
}
.addr{
    width: 95%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-top: 6px;
    color: #666;
    margin-bottom: 6px;
}
.label{
    margin-top: 4px;
    line-height: 17px;
}
.ope{
    color: #589daf;
    border: 1px solid #589daf;
    border-radius: 1px;
    font-size: 13px;
    padding: 3px 3px 3px 3px;
}
.discount{
    margin-top: 6px;
    font-size: 13px;
    font-size: 12px;
    color: #999;
}
.footer {
    position: fixed;
    bottom: 0;
}
.msg{
    border: 1px solid currentColor;
    border-radius: 1px;
    font-size: 12px;
    padding: 3px 3px 3px 3px;
    margin-right: 4px;
}
.ka{
    background: skyblue;
    color: white;
    font-size: 11px;
    text-align: center;
    margin-right: 5px;
}
.ka, .promotion{
    display: inline;
}
.showTime{
    padding: 0 15px 0 0;
    margin-right: -15px;
    line-height: 1.5;
    font-size: 12px;
    color: #999;
}
</style>