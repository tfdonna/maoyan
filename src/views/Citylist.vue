<template>
  <div>
      城市列表
      <van-index-bar>
          <van-index-anchor v-for="(item, index) in city" :key="index" :index="item.initial">
              {{item.initial}}
              <van-cell v-for="(i, key) in item.list" :key="key" :title="i.name"/>
          </van-index-anchor>
      </van-index-bar>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Citylist',
    data(){
        return{
            city: []
        }
    },
    created(){
        axios.get('/json/city.json').then(res => {
            console.log(res);
            this.city = res.data.city;
        })
    }
    
}
</script>

<style>

</style>