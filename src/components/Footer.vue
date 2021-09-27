<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <div class="nav-icons"><i class="iconfont icon-movie"></i></div>
        <div>电影/影院</div>
      </router-link>

      <router-link to="/video">
        <div class="nav-icons"><i class="iconfont icon-video"></i></div>
        <span>视频</span>
      </router-link>

      <router-link to="/minivideo">
        <div class="nav-icons"><i class="iconfont icon-minivideo"></i></div>
        <span>小视频</span>
      </router-link>

      <router-link to="/show">
        <div class="nav-icons"><i class="iconfont icon-TicketStar"></i></div>
        <span>演出</span>
      </router-link>

      <router-link to="/mine">
        <div class="nav-icons"><i class="iconfont icon-mine"></i></div>
        <span>我的</span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
/* * {
  padding: 0;
  margin: 0;
} */
a {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
  background-color: #fff;
}

#nav {
  background-color: #fff;
  width: 100%;
  height: 48px;
  line-height: 5px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 12px;
}

#nav a {
  color: #696969;
}
/* 激活状态链接样式 */
#nav a.router-link-active {
  color: #f03d37;
}

.nav-icons{
    display: block;
    width: 25px;
    height: 18px;
    margin: 7px auto;
    background-repeat: no-repeat;
    padding-top: 6px;
}
.iconfont{
  font-size: 25px;
}
</style>