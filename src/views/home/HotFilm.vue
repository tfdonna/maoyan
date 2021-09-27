<template>
  <div>
    <!--好评电影-->
    <Greatcom :greatlist='greatlist'></Greatcom>
    <!-- 热映电影 -->
    <Hot :reyingList="reyingList"></Hot>
  </div>
</template>
<script>
//引入 热映的组件
import Hot from "../../components/home/Hot.vue";
import Greatcom from '../../components/home/Greatcom.vue';
import axios from "axios";

export default {
  name: "Reying",
  data: function () {
    return {
      reyingList: [],
      greatlist: "",
    };
  },
  components: {
    Hot,
    Greatcom,
  },
  mounted() {
    //热映
    axios
      .get(
        "/ajax/movieOnInfoList?token=&optimus_uuid=3084E8D0146211ECA50A477D88250D251D93073CCDCC41D9A4CAC797521EC42D&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        //console.log(res);
        res.data.movieList.forEach((item) => {
          item.img = item.img.replace("w.h", "128.180");
        });
        this.reyingList = res.data.movieList;
      });
    //好评
    axios
      .get(
        "/ajax/topRatedMovies?token=&optimus_uuid=3084E8D0146211ECA50A477D88250D251D93073CCDCC41D9A4CAC797521EC42D&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        //console.log(res);
        this.greatlist = res.data;
      });
  },
};
</script>
<style scoped>

</style>