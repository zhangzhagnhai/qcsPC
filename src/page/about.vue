<template>
    <div>
      <div class="topContain" style="height: 300px">
        <img src="static/neiye.png" class="topImg" style="height: 300px; position: absolute; width: 100%; left: 0; right: 0">
        <div class="topCol">
          <img src="static/dibuLOGO.png">
       <!--   <ul>
            <li><a href="home#qcjj">同城简介</a></li>
            <li><a href="home#jjwt">解决问题</a></li>
            <li><a href="home#dsj">大事记</a></li>
            <li><a href="home#qcjj">价值提供</a></li>
            <li><a href="home#cjwt">常见问题</a></li>
          </ul>-->
          <ul>
            <li><router-link :to="{name:'home',query:{select:1}}">同城简介</router-link></li>
            <li><router-link :to="{name:'home',query:{select:2}}">解决问题</router-link></li>
            <li><router-link :to="{name:'home',query:{select:3}}">大事记</router-link></li>
            <li><router-link :to="{name:'home',query:{select:4}}">价值提供</router-link></li>
            <li><router-link :to="{name:'home',query:{select:5}}">常见问题</router-link></li>
          </ul>
        </div>
      </div>

      <div class="secrecyContainer">
        <div class="secrecyTitle">关于我们</div>
        <div class="secrecyTitleEn">About us</div>
        <div class="secrecyCenter">
          <img src="static/guanyuwomen.png" style="margin-left: 0; margin-bottom: 80px;">
          <p style="margin-left: 50px;">
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;氢创同城温州分社专注新商业新连锁创业项目孵化和股权投融资，通过股权平台、精英联盟、导师阵营、基金机构（氢创母基金）、新媒体营销（氢创自媒）等服务，助力国内商业连锁创业和创新。<br><br>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;氢创同城温州分社在商业连锁领域有着丰富的行业实操经验和投资案例，现投资项目包括投后托管盛才教育、婆婆妈妈生鲜网、车优多、傅村古镇、易养健康、悦僮文化、知造署、卡赢金融等十余个项目。以打造细分领域冠军，以孕育互联网时代新商业物种为企业使命。<br><br>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务内容：项目孵化、股权投融资。
          </p>
        </div>
      </div>

      <foot></foot>
    </div>
</template>
<script>
    import foot from '../components/foot.vue'
    export default {
      data(){
        return {}
      },
      methods: {},
      components: {
        foot
      }
    }
</script>
<style src="../assets/css/secrecy.css" scoped>
</style>
<style src="../assets/css/home.css" scoped>
</style>
