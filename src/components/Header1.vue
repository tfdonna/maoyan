<template>
  <div>
      <section class="cbox">
            <div class="c-left"><img src="../img/cy-logo.png" class="img-logo"/></div>
            <div class="c-right">
                <span class="benifit">发现最新最热电影</span>
                <span class="line">|</span>
                <span class="open">打开App ></span>
            </div>
        </section>
  </div>
</template>

<script>
export default {
    name: 'Header1'
}
</script>
<style scoped>
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
    margin-top: 1px;
}
.line{
    display: inline-block;
    position: absolute;
    right: 89.5px;
    color: rgba(0,0,0,.2);
    margin-top: 2px;
}
.open{
    position: absolute;
    right: 12px;
    color: #b37e7e;
    font-weight: 700;
    font-size: 16px;
}
</style>