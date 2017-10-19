<template>
  <div>
      <!--头部导航-->
      <div class="topContain">
        <img src="static/banner1.png" class="topImg">
        <div class="topCol">
          <img src="static/dibuLOGO.png">
          <ul>
            <li><a href="#qcjj">同城简介</a></li>
            <li><a href="#jjwt">解决问题</a></li>
            <li><a href="#dsj">大事记</a></li>
            <li><a href="#qcjj">价值提供</a></li>
            <li><a href="#cjwt">常见问题</a></li>
          </ul>
        </div>
        <div style="width: 1200px;position: relative;">
          <img src="static/diandian.png" class="diandian">
          <img src="static/tieLOGO.png" class="logo">
        </div>

        <div class="title">氢创同城</div>
        <div class="describe">项目投融资服务 \ 项目培育孵化 \ 新媒体服务 \ 项目对接活动服务 \ 全国100个分社</div>
        <div class="selectDiv">
          <a class="select"></a>
          <a></a>
          <a></a>
        </div>
      </div>
      <!--氢创简介-->
      <div id="qcjj" style="margin-bottom: 135px;">
        <div class="intro">氢创投资，携手您进入新商业新连锁时代</div>
        <p class="introduce">氢创投资（浙江氢创投资有限公司）成立于2015年，专注于种子、天使期项目孵化及股权投融资。</p>
        <p class="introduce">自2015年开始，氢创组织近百场大型活动峰会、项目路演、论坛、沙龙、大赛，有超过百位一线投资人列席，氢创自媒体影响近五百万人次。</p>
        <p class="introduce">目前公司直投项目20余个，近200个项目投融资对接展示，并已在北京、上海、长沙、杭州设立分社。</p>
        <h2>氢创投资旗下三大核心品牌</h2>
        <ul class="introduceUl">
          <li>
            <img src="static/qingchuangtongcheng.png">
            <p>专注新连锁、新零售、新体验、新服务、新金融五大创新项目，结合线下活动“百城千场”项目对接会为同城原创性好项目发展助力。</p>
            <div class="border"></div>
          </li>
          <li>
            <img src="static/qingchuansghe.png">
            <p>新商业新连锁创投新媒体，新商业领域品牌策划、采编、新媒体传播，将同城企业品牌、创业家传播推广向全国，覆盖影响力100万人次。</p>
            <div class="border"></div>
          </li>
          <li>
            <img src="static/qingchuangziben.png">
            <p>专注新连锁、新零售、新体验、新服务、新金融五大创新项目，结合线下活动“百城千场”项目对接会为同城原创性好项目发展助力。</p>
          </li>
        </ul>
      </div>
      <!--解决问题-->
      <div id="jjwt" class="resolveContain">
          <div class="titleX">氢创投资为您解决了哪些问题</div>
          <ul class="resolveUl">
              <li>
                <img src="static/chuangyezhe.png">
                <h3>创业者</h3>
                <p>提供良好的项目平台<br>提供良好的项目平台提供良好</p>
              </li>
              <li>
                <img src="static/xiangmu.png">
                <h3>项目</h3>
                <p>获得资金、资源、产业链、<br>加盟招商合作、品牌推广等</p>
              </li>
            <li>
              <img src="static/zijinfang.png">
              <h3>资金方</h3>
              <p>投资到优质项目<br>投资到优质项目投资到优</p>
            </li>
            <li>
              <img src="static/cahnyelian.png">
              <h3>产业链</h3>
              <p>促进多方资源对接，<br>租金产业链的连接和提升</p>
            </li>
            <li>
              <img src="static/chuangyefuwu.png">
              <h3>创业服务</h3>
              <p>为第三方服务企业<br>的机构提供优质对象</p>
            </li>
          </ul>
      </div>
     <!--大事记-->
      <div id="dsj" class="eventContain">
       <div class="titleX" style="margin-bottom: 93px">大事记大事记大事记大事记</div>
       <div v-for="event in events">
          <div v-if="event.bigCircle" class="bigCircle">
            <div>{{event.year}}</div>
          </div>
          <centerContainer v-if="!event.bigCircle" :event=event></centerContainer>
          <div class="line"></div>
       </div>
     </div>
      <!--加入步骤-->
      <div style="min-width: 1200px">
        <div class="titleX" style=" margin-top: 135px;">城市合伙人招募，城市合伙人招募</div>
         <div style="height: 760px; min-width: 1002px;">
             <div @mouseout="stepHoverIndex=7"  class="stepMenu">
               <div :class='stepHoverIndex==1||stepIndex==1?"select":""' @mouseover="stepHoverIndex=1"  @click="stepIndex=1">为什么加入</div>
               <div :class='stepHoverIndex==2||stepIndex==2?"select":""' @mouseover="stepHoverIndex=2"  @click="stepIndex=2">合作模式</div>
               <div :class='stepHoverIndex==3||stepIndex==3?"select":""' @mouseover="stepHoverIndex=3"  @click="stepIndex=3">收益分配</div>
               <div :class='stepHoverIndex==4||stepIndex==4?"select":""' @mouseover="stepHoverIndex=4"  @click="stepIndex=4">加入条件</div>
               <div :class='stepHoverIndex==5||stepIndex==5?"select":""' @mouseover="stepHoverIndex=5"  @click="stepIndex=5">合作流程</div>
               <div :class='stepHoverIndex==6||stepIndex==6?"select":""' @mouseover="stepHoverIndex=6"  @click="stepIndex=6">申请加入</div>
             </div>
             <div v-if="stepIndex==1" id="step1" style="width: 1002px;">
                <div class="stepLeftOne">
                    <div class="stepTitle">为什么加入</div>
                    <p>旨在打造氢创同城“新商业中心”创投全国网络，链接有志新商业创投精英，分享同城创投红利，为新商业新连锁的创业提供定制快车道。</p>
                    <a href="#jr">立即加入</a>
                </div>
                <img src="static/weishemejiaru.png" style="float: left; margin: 100px 0 0 116px;">
             </div>

             <div v-if="stepIndex==2" id="step2" style="width: 1002px;">
               <div class="stepLeftOne" style="width: 537px">
                 <div class="stepTitle" style="margin-bottom: 20px;">合作模式</div>
                 <div class="stepContain">
                   <img src="static/dian.png">
                   <span>优质项目落地输出：</span>
                   <p>输送极具商机潜力的项目，进行培育推广、招商对接、投融资服务等落地经营。</p>
                 </div>
                 <div class="stepContain">
                   <img src="static/dian.png">
                   <span>创投网络平台输出：</span>
                   <p>全国分社共享创投资源和服务，包括项目、投资人、顾问导师等，并做企业相互媒体营销推广。</p>
                 </div>
                 <div class="stepContain">
                   <img src="static/dian.png">
                   <span>服务输出：</span>
                   <p>创投峰会、招商对接、投融资对接、展会展览、游学等。</p>
                 </div>
                 <div class="stepContain">
                   <img src="static/dian.png">
                   <span>投资机构输出：</span>
                   <p>基金投资联盟机构输出。</p>
                 </div>
                 <a href="#jr">立即加入</a>
               </div>
               <img src="static/hezuomoshi.png" style="float: left; margin: 127px 0 0 58px;">
             </div>

             <div v-if="stepIndex==3" id="step3" style="width: 1002px;">
             <div class="stepLeftOne" style="width: 500px">
               <div class="stepTitle" style="margin-bottom: 20px;">收益收益</div>
               <div class="stepContainThr">
                 <img src="static/dian.png">
                 <p>项目股权投融资收益，包括项目培育、项目投资、项目融资对接服务收益</p>
               </div>
               <div class="stepContainThr">
                 <img src="static/dian.png">
                 <p>招商落地同城对接合作服务收益</p>
               </div>
               <div class="stepContainThr">
                 <img src="static/dian.png">
                 <p>展览、游学、培训、活动合作收益</p>
               </div>
               <div class="stepContainThr">
                 <img src="static/dian.png">
                 <p>会员招募服务合作收益等</p>
               </div>
               <a href="#jr">立即加入</a>
             </div>
             <img src="static/shouyi.png" style="float: left; margin: 105px 0 0 55px;">
           </div>

             <div v-if="stepIndex==4" id="step4" style="width: 1002px;">
             <div class="stepLeftOne" style="width: 500px">
               <div class="stepTitle" style="margin-bottom: 20px;">加入条件</div>
               <div class="stepContainThr">
                 <img src="static/dian.png">
                 <p>热爱创投事业或已投身于创投事业并有自己的组织和空间</p>
               </div>
               <div class="stepContainThr">
                 <img src="static/dian.png">
                 <p>擅长品牌包装、媒体推广、会务策划创始人才队伍为佳</p>
               </div>
               <div class="stepContainThr">
                 <img src="static/dian.png">
                 <p>具有一定的创投界人脉，并有志于商业连锁领域开拓创投事业者</p>
               </div>
               <div class="stepContainThr">
                 <img src="static/dian.png">
                 <p>认同氢创同城经营价值观</p>
               </div>
               <a href="#jr">立即加入</a>
             </div>
             <img src="static/jiarutiaojian.png" style="float: left; margin: 105px 0 0 135px;">
           </div>

             <div v-if="stepIndex==5" id="step5" style="width: 1002px;">
             <div class="stepLeftOne" style="width: 530px">
               <div class="stepTitle" style="margin-bottom: 20px;">合作流程</div>
               <div class="stepContainThr" style="width: 530px">
                 <img src="static/dian.png">
                 <p>①提交申请--②资质审核--③实地考察--④沟通合作细节--⑤签约</p>
               </div>
               <a href="#jr">立即加入</a>
             </div>
             <img src="static/hezuoliucheng.png" style="float: left; margin: 105px 0 0 55px;">
           </div>

             <div v-if="stepIndex==6" id="step6" style="width: 1002px; position: relative">
                <img src="static/shenqingjiaru.png" style="position: absolute; width: 562px; height: 498px; margin: 0 auto; top:0; left: 0; right: 0;">
                 <div class="stepAddTitle">申请加入</div>
                 <ul class="stepAddUl">
                   <li><span class="name"><span style="color: #c32225">*&nbsp;</span>姓名:</span><input type="text"/></li>
                   <li><span class="name"><span style="color: #c32225">*&nbsp;</span>电话:</span><input type="text"/></li>
                   <li><span class="name"><span style="color: #c32225">*&nbsp;</span>所在城市:</span><input type="text"/></li>
                   <li><span class="name">邮箱:</span><input type="email"/></li>
                 </ul>
                 <div class="stepSubmit">立即提交</div>
             </div>
         </div>
      </div>
      <!--常见问题-->
      <div id="cjwt" class="problemContain">
          <img src="static/changjianwenti.png" class="problemImg">
          <div class="titleX" style=" margin-top: 46px;">常见问题</div>
          <div class="problemScroll">
             <div class="problemTitle">
                 <img src="static/dian.png" />
                 <div>券商理财是什么？</div>
             </div>
             <p>券商理财是指证券公司管理，并且在中国证监会备案过的理财产品，产品募集的资金全部都托管在指定银行监管，资金非常安全。而且其风险低，投资者承担的风险小。</p>

            <div class="problemTitle">
              <img src="static/dian.png" />
              <div>什么时候起息？</div>
            </div>
            <p>在产品募集结束日后的下一个工作日开始计息（T+1日）。计息第二天推送前一天收益。</p>

            <div class="problemTitle">
              <img src="static/dian.png" />
              <div>取现什么时候能到账？</div>
            </div>
            <p>到期日赎回，本金和收益会于3个工作日内，转到您的原支付账户。</p>

            <div class="problemTitle">
              <img src="static/dian.png" />
              <div>再次购买的起购金额？</div>
            </div>
            <p>券商理财是指证券公司管理，并且在中国证监会备案过的理财产品，产品募集的资金全部都托管在指定银行监管，资金非常安全。而且其风险低，投资者承担的风险小。</p>

            <div class="problemTitle">
              <img src="static/dian.png" />
              <div>为什么有时理财周期与产品名称显示理财天数不一致？</div>
            </div>
            <p>若申购日或赎回日赶到法定假日无法进行操作，故实际理财期限会因此缩短或延长几天，计息时间与实际理财期限一致。</p>

            <div class="problemTitle">
              <img src="static/dian.png" />
              <div>为什么有时理财周期与产品名称显示理财天数不一致？</div>
            </div>
            <p>到期日赎回，本金和收益会于3个工作日内，转到您的原支付账户。</p>
          </div>
      </div>
      <!--加入氢创同城-->
      <div id="jr" class="addContain">
        <img src="static/chengshihehuorenzhaomu.png">
        <div class="addTitle">城市合伙人招募</div>
        <ul class="addUl">
          <li><span class="name"><span style="color: #c32225">*&nbsp;</span>姓名:</span><input type="text"/></li>
          <li><span class="name"><span style="color: #c32225">*&nbsp;</span>电话:</span><input type="text"/></li>
          <li><span class="name"><span style="color: #c32225">*&nbsp;</span>所在城市:</span><input type="text"/></li>
          <li><span class="name">邮箱:</span><input type="email"/></li>
        </ul>
        <div class="submit">立即提交</div>
      </div>
      <foot></foot>
  </div>
</template>
<script>
  import centerContainer from '../components/centerContainer.vue'
  import foot from '../components/foot.vue'
  export default {
    data(){
      return {
        stepHoverIndex:0,
        stepIndex:1,
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
    methods:{
      testB(){
        console.log(123)
      }
    },
    components:{
        centerContainer,
        foot
    }
  }
</script>
<style src="../assets/css/home.css" scoped>
</style>
