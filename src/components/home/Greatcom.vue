<template>
  <div class="top-rated-wrap">
    <div v-html="greatlist"></div>
  </div>
</template>

<script>
export default {
    name: 'Greatcom',
    props: ['greatlist']
}

</script>

<style>
.top-rated-wrap{
  width: 100%;
  height: 200px;
}
.top-rated {
  padding: 12px 0 12px 15px;
  background-color: #fff;
  margin-bottom: 10px;
}
.top-rated .title {
  margin: 0;
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
}
.top-rated-list {
  overflow: scroll;
  white-space: nowrap;
}
.top-rated-item {
  display: inline-block;
  width: 85px;
  overflow: hidden;
  margin-right: 10px;
}
.top-rated-item .poster {
  width: 85px;
  height: 115px;
  position: relative;
  margin-bottom: 6px;
}
.default-img-bg {
  background-color: #e1e1e1;
  background-size: 100% 100%;
}
.top-rated-item .poster img {
    height: 100%;
}
.top-rated-item .poster .wish-bg {
    display: inline-block;
    width: 100%;
    height: 35px;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
}
.top-rated-item .poster .score{
    position: absolute;
    left: 4px;
    bottom: 2px;
    color: #faaf00;
    font-size: 11px;
    font-weight: 600;
}
.top-rated-list {
    white-space: nowrap;
}
.top-rated-item .name {
    margin: 0;
        margin-bottom: 0px;
    font-size: 13px;
    color: #222;
    margin-bottom: 3px;
}
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>