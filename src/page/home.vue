<template>
  <div>
      <!--氢创简介-->
      <div style="margin-bottom: 135px;">
        <div class="intro">氢创投资，携手您进入新商业新连锁时代</div>
        <p class="introduce">氢创投资（浙江氢创投资有限公司）成立于2015年，专注于种子、天使期项目孵化及股权投融资。</p>
        <p class="introduce">自2015年开始，氢创组织近百场大型活动峰会、项目路演、论坛、沙龙、大赛，有超过百位一线投资人列席，氢创自媒体影响近五百万人次。</p>
        <p class="introduce">目前公司直投项目20余个，近200个项目投融资对接展示，并已在北京、上海、长沙、杭州设立分社。</p>
        <h2>氢创投资旗下三大核心品牌</h2>
        <ul class="introduceUl">
          <li>
            <img src="/static/qingchuangtongcheng.png">
            <p>专注新连锁、新零售、新体验、新服务、新金融五大创新项目，结合线下活动“百城千场”项目对接会为同城原创性好项目发展助力。</p>
            <div class="border"></div>
          </li>
          <li>
            <img src="/static/qingchuansghe.png">
            <p>新商业新连锁创投新媒体，新商业领域品牌策划、采编、新媒体传播，将同城企业品牌、创业家传播推广向全国，覆盖影响力100万人次。</p>
            <div class="border"></div>
          </li>
          <li>
            <img src="/static/qingchuangziben.png">
            <p>专注新连锁、新零售、新体验、新服务、新金融五大创新项目，结合线下活动“百城千场”项目对接会为同城原创性好项目发展助力。</p>
          </li>
        </ul>
      </div>
      <!--解决问题-->
      <div class="resolveContain">
          <div class="resolve">氢创投资为您解决了哪些问题</div>
          <ul class="resolveUl">
              <li>
                <img src="/static/chuangyezhe.png">
                <h3>创业者</h3>
                <p>提供良好的项目平台<br>提供良好的项目平台提供良好</p>
              </li>
              <li>
                <img src="/static/xiangmu.png">
                <h3>项目</h3>
                <p>获得资金、资源、产业链、<br>加盟招商合作、品牌推广等</p>
              </li>
            <li>
              <img src="/static/zijinfang.png">
              <h3>资金方</h3>
              <p>投资到优质项目<br>投资到优质项目投资到优</p>
            </li>
            <li>
              <img src="/static/cahnyelian.png">
              <h3>产业链</h3>
              <p>促进多方资源对接，<br>租金产业链的连接和提升</p>
            </li>
            <li>
              <img src="/static/chuangyefuwu.png">
              <h3>创业服务</h3>
              <p>为第三方服务企业<br>的机构提供优质对象</p>
            </li>
          </ul>
      </div>
     <!--大事记-->
      <div class="eventContain">
       <div class="resolve" style="margin-bottom: 93px">大事记大事记大事记大事记</div>
       <div v-for="event in events">
          <div v-if="event.bigCircle" class="bigCircle">
            <div>{{event.year}}</div>
          </div>
          <centerContainer v-if="!event.bigCircle" :event=event></centerContainer>
          <div class="line"></div>
       </div>
     </div>
      <!--常见问题-->
      <div style="min-width: ">

      </div>
      <!--加入氢创同城-->
      <div class="addContain">
        <div class="addTitle">城市合伙人招募</div>
        <ul class="addUl">
          <li><span class="name"><span style="color: #c32225">*&nbsp;</span>姓名:</span><input type="text"/></li>
          <li><span class="name"><span style="color: #c32225">*&nbsp;</span>电话:</span><input type="text"/></li>
          <li><span class="name"><span style="color: #c32225">*&nbsp;</span>所在城市:</span><input type="text"/></li>
          <li><span class="name">邮箱:</span><input type="email"/></li>
        </ul>
        <div class="submit">立即提交</div>
      </div>
      <!--底部-->
      <div class="footer">
         <div style="width: 1200px;height: 160px;padding-top: 35px">
            <img src="/static/dingbuLOGO.png" class="footerLeft">
            <div class="footerCenter">
               <div class="centerA">关于我们<span>|</span><span>保密说明</span></div>
               <div class="centerB" style="margin-top: 56px;">联系电话:0577-86121121<span style="margin-left: 30px">
                 传真:0577-5557
               </span></div>
              <div class="centerB" style="margin-top: 16px;">公司地址:浙江省温州市文昌路高新技术园D幢4楼、蒲中路11号温商中心4楼</div>
            </div>
            <ul class="footerRight">
              <li>
                <img src="/static/qingchuangtongchengerweima.png">
                <div>氢创同城公众号</div>
              </li>
              <li>
                <img src="/static/qingchuangshe.png">
                <div>氢创社公众号</div>
              </li>
              <li>
                <img src="/static/weibo.png">
                <div>微博</div>
              </li>
            </ul>
         </div>
      </div>
  </div>
</template>
<script>
  import centerContainer from '../components/centerContainer.vue'
  export default {
    data(){
    return {
        events:[
          {bigCircle:1,year:'2017'},
          {bigCircle:0,dayLeft:1,year:'2017',Mouth:'Apr',day:'/01',title:"氢创社新版微信平台上线",detail:"用更专业的更完善的态度服务天使投资人和创业者"},
          {bigCircle:0,dayLeft:0,year:'2017',Mouth:'Apr',day:'/08',title:"首届(中国)产业与金融资本论坛成功举办",detail:"哇哈哈早起创始人之一宗泽后、温州市经济学会会长马津龙等知名企业家、天使人、学者300位应邀到场支持"},
          {bigCircle:1,year:'2016'},
          {bigCircle:0,dayLeft:1,year:'2016',Mouth:'Oct',day:'/11',title:"首个平台上线项目OISation成功路演",detail:"首个在氢创社平台进行路演的项目,超80位天使投资人到场观看"},
          {bigCircle:0,dayLeft:0,year:'2016',Mouth:'Sep',day:'/28',title:"新媒体成立",detail:"打造氢创社自己的扩音器，打造氢创社自己的扩音器"}
        ]
      }
    },
    components:{
        centerContainer
    }
  }
</script>
<style src="../assets/css/home.css" scoped>
</style>
