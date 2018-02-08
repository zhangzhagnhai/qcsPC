<template>
    <div>
      <div class="topContain" style="height: 300px">
        <img src="static/neiye.png" class="topImg" style="height: 300px; position: absolute; width: 100%; left: 0; right: 0">
        <div class="topCol">
          <router-link to="home">
            <img src="static/dibuLOGO.png">
           </router-link>
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
             <li><router-link :to="{name:'home',query:{select:4}}">大事记</router-link></li>
             <li><router-link :to="{name:'home',query:{select:5}}">价值提供</router-link></li>
             <li><router-link :to="{name:'home',query:{select:6}}">常见问题</router-link></li>
            <!--<li><a href="home#anchor-1">同城简介</a></li>
            <li><a href="home#anchor-2">解决问题</a></li>
            <li><a href="home#anchor-3">大事记</a></li>
            <li><a href="home#anchor-4">价值提供</a></li>
            <li><a href="home#anchor-5">常见问题</a></li>-->
          </ul>
        </div>
      </div>
      <div class="secrecyContainer">
          <div class="secrecyTitle">保密说明</div>
          <div class="secrecyTitleEn">Confidential instructions</div>
          <div class="secrecyCenter">
             <p>
               一、保护用户隐私是氢创投资的一项基本政策， 氢创投资保证不对外公开或向第三方提供用户的注册资料、提交项目及用户在使用网络服务时存储在氢创同城平台的非公开内容，但下列情况除外：<br>
               （1）事先获得用户的明确授权；<br>
               （2）根据有关的法律法规要求；<br>
               （3）按照相关政府主管部门的要求；<br>
               （4）为维护社会公众的利益；<br>
               （5）为维护氢创同城平台的合法权益。<br><br>
               二、氢创投资可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与氢创投资同等的保护用户隐私的责任，则氢创投资有权将用户的注册资料等提供给该第三方。<br><br>
               三、在不透露用户项目隐私资料的前提下，氢创投资有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。<br><br>
               四、 氢创投资制定了以下四项隐私权保护原则，指导我们如何来处理产品中涉及到用户隐私权和用户信息等方面的问题：<br>
               （1） 利用我们收集的信息为用户提供有价值的产品和服务。<br>
               （2） 开发符合隐私权标准和隐私权惯例的产品。<br>
               （3） 将个人信息的收集透明化，并由权威第三方监督。<br>
               （4） 尽最大的努力保护我们掌握的信息。<br>
             </p>
             <img src="static/baomishuoming.png">
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
