<template>
  <div class="list-wrap">
    <div class="classic-movies">
      <div class="classic-movies-list">
        <div v-html="classicList"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Classic',
    data(){
      return{
        classicList: ''
      }
    },
    mounted(){
      axios.get('/ajax/moreClassicList?sortId=1&showType=3&limit=10&offset=10&optimus_uuid=72FC6CE015CC11ECB34C79BCA5547CBFA05F017A40684B6E91459AAEAAE856FB&optimus_risk_level=71&optimus_code=10').then(res => {
        console.log(res);
        this.classicList = res.data;
      })
    }
}
</script>

<style scoped>
.classic .list-wrap{
    background-color: #f5f5f5;
}

.classic-movies {
    background-color: #fff;
    padding-top: 14.5px;
}
.classic-movies a {
    text-decoration: none;
    display: block;
    color: #666;
    cursor: pointer;
}
.classic-movie {
    position: relative;
    margin: 0 0 20px 20px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
}
.classic-movie .avatar {
    display: inline-block;
}
.classic-movie .avatar img {
    width: 66px;
    height: 94px;
    display: block;
}
.classic-movie .movie-info {
    margin-left: 10px;
    display: inline-block;
    font-size: 13px;
    line-height: 18px;
    color: #666;
    height: 100%;
    -webkit-box-flex: 1;
    flex: 1;
    overflow: hidden;
}
.classic-movie .movie-info .title {
    font-size: 17px;
    line-height: 24px;
    color: #333;
    font-weight: 700;
}
.classic-movie .movie-info > div {
    margin-bottom: 4px;
}
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.classic-movie .movie-score {
    width: 60px;
    height: 17px;
    font-size: 12px;
    color: #999;
    line-height: 17px;
    display: inline-block;
    text-align: center;
}
.classic-movie .movie-score .grade {
    color: #faaf00;
    font-size: 15px;
}
</style>