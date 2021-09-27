<template>
  <div class="cinema-list">
    <div class="list-wrap">
      <div v-html="cinemaList"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Cineme',
    data(){
      return{
        cinemaList: ''
      }
    },
    mounted(){
      axios.get('/ajax/moreCinemas?day=2021-09-24&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1632476059698&cityId=57&optimus_uuid=72FC6CE015CC11ECB34C79BCA5547CBFA05F017A40684B6E91459AAEAAE856FB&optimus_risk_level=71&optimus_code=10').then(res => {
        this.cinemaList = res.data
      })
    }
}
</script>

<style>
.cinema-list {
  margin-top: 0;
  cursor: pointer;
  background-color: transparent;
}
a {
    text-decoration: none;
}
.cinema-list .list-wrap {
  background-color: #fff;
}
.cinema-list .list-wrap .item {
  padding: 13px 15px 13px 0;
  margin-left: 15px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgb(226, 222, 222);
}
.box-flex:not(.column).middle,
.inline-flex:not(.column).middle {
  -webkit-box-align: center;
  align-items: center;
}
.cinema-list .list-wrap .title-block {
  display: block;
}
.cinema-list .list-wrap .title-block .title {
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
}
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.cinema-list .list-wrap .price-block {
    padding-top: 9px;
    padding-left: 3px;
    color: #f03d37;
}
.cinema-list .list-wrap .price-block .price {
    font-size: 18px;
}
.cinema-list .list-wrap .price-block .q {
    margin-left: 3px;
}
.cinema-list .list-wrap .location-block {
    margin-top: 6px;
    font-size: 13px;
    color: #666;
}
.cinema-list .location-block{
  line-height: 1.5;
}
.box-flex {
    display: flex;
}
.flex {
    -webkit-box-flex: 1;
    flex: 1;
    /* display: flex;
    text-overflow: ellipsis;
    width: 80%; */
}

.cinema-list .list-wrap .location-block .distance{
  margin-left: 5px;
  display: flex;
}
.cinema-list .list-wrap .title-block .label-block {
    height: 17px;
    line-height: 17px;
    margin-top: 4px;
    margin-bottom: 4px;
    overflow: hidden;
    font-size: 0;
    /* flex-shrink: 0; */
}
.cinema-list .list-wrap .title-block .label-block > div {
    position: relative;
    display: inline-block;
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    font-size: 9.6px;
}
.allowRefund, .endorse, .hallType{
  color: #589daf;
  border: 1px solid #589daf;
}
.snack, .vipTag{
  color: #f90;
  border: 1px solid #f90;
}
.cinema-list .discount-block {
    color: #999;
    margin-bottom: 4px;
}
.cinema-list .discount-block .discount-label {
    width: 15px;
    height: 14px;
    position: relative;
    top: 3px;
    display: inline-flex;
}
.discount-label > img{
  width: 100%;
}
.cinema-list .discount-block .discount-label-text {
    margin-left: 0;
    font-size: 11px;
    display: inline-block;
}

</style>