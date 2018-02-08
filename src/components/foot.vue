<template>
  <!--底部-->
  <div class="footer">
    <div style="width: 1200px;height: 160px;padding-top: 35px">
      <img src="static/dingbuLOGO.png" class="footerLeft">
      <div class="footerCenter">
        <div class="centerA"><router-link to="about" tag="span"  style="margin: 0">关于我们</router-link><span>|</span><router-link to="secrecy" tag="span" >保密说明</router-link></div>
        <div class="centerB" style="margin-top: 56px;">联系电话:0577-86121121<span style="margin-left: 30px">
              13957756423
        </span><span style="margin-left: 30px">邮箱:1211210577@qq.com</span></div>
        <div class="centerB" style="margin-top: 16px;">公司地址:浙江省温州市文昌路高新技术园D幢4楼、蒲中路11号温商中心4楼</div>
      </div>
      <ul class="footerRight">
        <li>
          <img src="static/qingchuangtongchengerweima.png">
          <div>氢创同城公众号</div>
        </li>
        <li>
          <img src="static/qingchuangshe.png">
          <div>氢创社公众号</div>
        </li>
        <li>
          <img src="static/weibo.png">
          <div>微博</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{}
    }
  }
</script>
<style src="../assets/css/home.css" scoped>
</style>
