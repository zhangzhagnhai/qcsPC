<template>
  <div>
      <!--头部导航-->
      <div class="topContain" @mouseover="mouseOver" @mouseout="mouseOut">
        <div style="position: absolute; top:0; left: 0;  z-index: -1; width: 100%; min-width: 1200px; overflow: hidden " >
          <ul :style="{marginLeft:-oneWidth*(bgIndex-1)+'px'}" :class="target?'noAction':''" >
            <li :style="{width:oneWidth+'px'}"><img src="static/banner1.jpg" class="topImg" :style="{width:oneWidth+'px'}"></li>
            <li :style="{width:oneWidth+'px'}"><img src="static/banner3.jpg" class="topImg" :style="{width:oneWidth+'px'}"></li>
            <li :style="{width:oneWidth+'px'}"><img src="static/banner1.jpg" class="topImg" :style="{width:oneWidth+'px'}"></li>
            <li :style="{width:oneWidth+'px'}"><img src="static/banner3.jpg" class="topImg" :style="{width:oneWidth+'px'}"></li>
          </ul>
        </div>
        <div class="topCol">
          <img src="static/dibuLOGO.png">
          <ul>
            <li><a href="javascript:void(0)" @click="goAnchor('#anchor-1')">同城简介</a></li>
            <li><a href="javascript:void(0)" @click="goAnchor('#anchor-2')">解决问题</a></li>
            <li><a href="javascript:void(0)" @click="goAnchor('#anchor-3')">大事记</a></li>
            <li><a href="javascript:void(0)" @click="goAnchor('#anchor-4')">价值提供</a></li>
            <li><a href="javascript:void(0)" @click="goAnchor('#anchor-5')">常见问题</a></li>
            <!--<li><a href="home#anchor-1">同城简介</a></li>
            <li><a href="home#anchor-2">解决问题</a></li>
            <li><a href="home#anchor-3">大事记</a></li>
            <li><a href="home#anchor-4">价值提供</a></li>
            <li><a href="home#anchor-5">常见问题</a></li>-->
          </ul>
        </div>
    <!--    <div style="width: 1200px;position: relative;">
          <img src="static/diandian.png" class="diandian">
          <img src="static/tieLOGO.png" class="logo">
        </div>
        <div class="title">氢创同城</div>
        <div class="describe">项目投融资服务 \ 项目培育孵化 \ 新媒体服务 \ 项目对接活动服务 \ 全国100个分社</div>-->
        <div class="selectDiv">
          <a :class="bgIndex%2==1?'select':''" @click="resetAnimate(1)"></a>
          <a :class="bgIndex%2==0?'select':''" @click="resetAnimate(2)"></a>
        </div>
      </div>
      <!--固定导航-->
      <div v-if="showMenu&&!reset" class="nav">
        <div class="topCol">
          <img src="static/dibuLOGO.png" />
          <ul>
            <li><a :class="menuSelect==1?'select':''" href="javascript:void(0)" @click="goAnchor('#anchor-1')">同城简介</a></li>
            <li><a :class="menuSelect==2?'select':''" href="javascript:void(0)" @click="goAnchor('#anchor-2')">解决问题</a></li>
            <li><a :class="menuSelect==3?'select':''" href="javascript:void(0)" @click="goAnchor('#anchor-3')">大事记</a></li>
            <li><a :class="menuSelect==4?'select':''" href="javascript:void(0)" @click="goAnchor('#anchor-4')">价值提供</a></li>
            <li><a :class="menuSelect==5?'select':''" href="javascript:void(0)" @click="goAnchor('#anchor-5')">常见问题</a></li>
          </ul>
        </div>
      </div>
      <!--氢创简介-->
      <div id="anchor-1" style="margin-bottom: 135px;">
        <div class="intro">氢创投资与您携手进入新商业新连锁时代</div>
        <p class="introduce">氢创投资（浙江氢创投资有限公司）成立于2015年，专注于种子、天使期项目孵化及股权投融资。</p>
        <p class="introduce">自2015年开始，氢创组织近百场大型活动峰会、项目路演、论坛、沙龙、大赛，有超过百位一线投资人列席，氢创自媒体影响近500万人次。</p>
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
      <div id="anchor-2" class="resolveContain" style="padding-bottom: 60px">
          <div class="titleX">氢创投资为您解决哪些问题</div>
          <ul class="resolveUl">
              <li>
                <img src="static/chuangyezhe.png">
                <h3>创业者</h3>
                <p>提供项目梳理、品牌战略规划、<br>股权结构设计、<br>加盟招商政策制定等服务。</p>
              </li>
              <li>
                <img src="static/xiangmu.png">
                <h3>项目</h3>
                <p>获得对接资本、资源、<br>产业链、加盟招商合作、<br>品牌推广等服务</p>
              </li>
            <li>
              <img src="static/zijinfang.png">
              <h3>资本方</h3>
              <p>投资到收益可观、<br>风险可控的优质项目</p>
            </li>
            <li>
              <img src="static/cahnyelian.png">
              <h3>产业链</h3>
              <p>促进多方资源对接，<br>整合产业链资源，提升效率，<br>降低成本</p>
            </li>
            <li>
              <img src="static/chuangyefuwu.png">
              <h3>创业服务</h3>
              <p>为服务企业的第三方机构<br>提供优质对象</p>
            </li>
          </ul>
      </div>
     <div id="anchor-3"   class="resolveContain">
      <div class="titleX" >加入氢创会员共享圈内创投资源</div>
      <p class="vipMeta">氢创同城重磅打造“五新“商业<br>新零售 / 新连锁 / 新技术 / 新服务 / 新金融</p>
      <p class="vipDes">只要您从事的项目和行业涉及“五新”（零售、教育、餐饮、文旅等）<br>只要您有意愿参与“五新”项目的合作或投资</p>
      <img src="static/huiyuanerweima.png" class="vipEWM">
      <ul class="vipUl">
        <li>
          <img src="static/qingya.png">
          <h3>氢芽会员</h3>
          <p>免费注册会员</p>
        </li>
        <li>
          <img src="static/qingmiao.png">
          <h3>氢苗会员</h3>
          <p>付费参加的企业创始人、<br>联合创始人、CEO</p>
        </li>
        <li>
          <img src="static/qingsong.png">
          <h3>氢松会员</h3>
          <p>明星企业家、顾问导师、<br>创投机构、行业投资人</p>
        </li>
      </ul>
    </div>
     <!--大事记-->
      <div id="anchor-4" class="eventContain">
       <div class="titleX" style="margin-bottom: 93px">氢创投资大事记</div>
       <div v-for="event in events">
          <div v-if="event.bigCircle" class="bigCircle">
            <div>{{event.year}}</div>
          </div>
          <centerContainer v-if="!event.bigCircle" :event=event></centerContainer>
          <div class="line"></div>
       </div>
     </div>
      <!--加入步骤-->
      <div id="anchor-5" style="min-width: 1200px; background-color: #f9f9f9; ">
        <div class="titleX" style=" padding-top: 135px;">城市合伙人招募</div>
         <div style="height: 690px; min-width: 1002px;">
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
                   <li><span class="name"><span style="color: #c32225">*&nbsp;</span>姓名:</span><input type="text" v-model="userInfo.name"/></li>
                   <li><span class="name"><span style="color: #c32225">*&nbsp;</span>电话:</span><input type="text"  v-model="userInfo.mobile"/></li>
                   <li><span class="name"><span style="color: #c32225">*&nbsp;</span>所在城市:</span><input type="text"  v-model="userInfo.location"/></li>
                   <li><span class="name">公司名称:</span><input type="text"  v-model="userInfo.company"/></li>
                 </ul>
                 <div @click="submit(0)" class="stepSubmit">立即提交</div>
             </div>
         </div>
      </div>
      <!--常见问题-->
      <div id="anchor-6" class="problemContain">
          <img src="static/changjianwenti.png" class="problemImg">
          <div class="titleX" style=" margin-top: 46px;">常见问题</div>
          <div class="problemScroll">
             <div class="problemTitle">
                 <img src="static/dian.png" />
                 <div>氢创投资有哪几大业务模块？</div>
             </div>
             <p>氢创投资（浙江氢创投资有限公司），专注于种子、天使期项目孵化及股权投融资，氢创投资旗下有三大核心品牌：氢创社、氢创同城、氢创资本，分别提供新媒体服务、全国分社服务、“百城千场”项目对接会服务、以及项目投融资及培育服务。</p>

            <div class="problemTitle">
              <img src="static/dian.png" />
              <div>氢创投资在新商业新连锁的创业孵化与投融资服务方面有哪些优势？</div>
            </div>
            <p>核心创始团队，在互联网、零售连锁领域拥有10余年创业经验和丰富的创投资源，并已形成了一套成熟的项目孵化培育服务体系和标准。</p>

            <div class="problemTitle">
              <img src="static/dian.png" />
              <div>氢创投资目前有哪些成功案例？</div>
            </div>
            <p>投资合作的案例有哇哈哈宗盛智能、妙寄、婆婆妈妈生鲜网、盛才教育托管、艳后医美连锁、阿青龙虾连锁、同人书院、逗哈科技、千朵安亲等……</p>

          </div>
      </div>
      <!--加入氢创同城-->
      <div id="jr" class="addContain">
        <img src="static/chengshihehuorenzhaomu.png">
        <div class="addTitle">城市合伙人招募</div>
        <ul class="addUl">
          <li><span class="name"><span style="color: #c32225">*&nbsp;</span>姓名:</span><input type="text"  v-model="userInfox.name"/></li>
          <li><span class="name"><span style="color: #c32225">*&nbsp;</span>电话:</span><input type="text"  v-model="userInfox.mobile"/></li>
          <li><span class="name"><span style="color: #c32225">*&nbsp;</span>所在城市:</span><input type="text"  v-model="userInfox.location"/></li>
          <li><span class="name">公司名称:</span><input type="text"  v-model="userInfox.company"/></li>
        </ul>
        <div @click="submit(1)" class="submit">立即提交</div>
      </div>

      <!--弹窗-->
      <div v-if="showMC" class="mengceng">
          <div class="mengcengContainer">
              <div class="col">
                 <div class="cols">
                   <img src="static/tijiaochenggong.png" />
                   <span>提交成功</span>
                 </div>
              </div>
              <div class="colBody">
                申请已提交成功，2个工作日内会有工作人员联系您。
              </div>
              <div @click="showMC=false"  class="colButton">知道了</div>
          </div>
          <div @click="showMC=false" class="mengcengBg"></div>

      </div>

      <div class="right">
        <div @mouseover="ceyiSelect=1" @mouseout="ceyiSelect=0"  class="imgContainer">
          <img :src="this.ceyiSelect?'static/cesan.png':'static/ceyi.png'" >
          <img v-if="ceyiSelect==1" src="static/cesi.png" style="position: absolute; left: -140px; top:0px;">
        </div>
        <div @mouseover="ceerSelect=1" @mouseout="ceerSelect=0"  class="imgContainer" style=" margin-top: 10px;">
          <img :src="this.ceerSelect?'static/cewu.png':'static/ceer.png'" >
          <img v-if="ceerSelect==1" src="static/ceqi.png" style="position: absolute; left: -275px; top:0px; ">
          <div v-if="ceerSelect==1" class="row">
              <div>联系电话：13957756423</div>
              <div>工作时间：周一至周六 9:00-17:30</div>
          </div>
        </div>
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
        bgIndex:1,
        bgHover:false,
        bgTotalNum:2,
        menuSelect:1,
        oneWidth:1920,
        ceyiSelect:0,
        ceerSelect:0,
        target:false,
        showMC:false,
        showMenu:false,
        reset:false,
        domTopList:[],
        userInfo:{
          name:"",
          mobile:"",
          location:"",
          company:"",
          resource:""
        },
        userInfox:{
          name:"",
          mobile:"",
          location:"",
          company:"",
          resource:""
        },
        events:[
          {bigCircle:1,year:'2017'},
          {bigCircle:0,dayLeft:1,year:'2017',Mouth:'Aug',day:'/18',title:"举办新商业新连锁818项目对接会",detail:"氢创投资于浙南云谷举办新商业新连锁818项目对接会，确立新商业新连锁的创业孵化与投融资服务的战略定位"},
          {bigCircle:0,dayLeft:0,year:'2017',Mouth:'Apr',day:'/15',title:"温创资本股权注资氢创投资",detail:"温创资本股权注资氢创投资，助力投融资平台和城市创投中心"},
          {bigCircle:1,year:'2016'},
          {bigCircle:0,dayLeft:1,year:'2016',Mouth:'Dec',day:'/12',title:"氢创投资长沙联社成立",detail:"湖南省领导莅临氢创投资考察，氢创投资长沙分社成立，确立氢创同城合伙人发展体系"},
          {bigCircle:0,dayLeft:0,year:'2016',Mouth:'Sep',day:'/28',title:"氢创投资旗下成立氢创社品牌",detail:"氢创投资旗下成立氢创社品牌，为新商业领域项目提供品牌策划、创业资讯、全媒体渠道合作推广等服务"},
          {bigCircle:0,dayLeft:1,year:'2016',Mouth:'Sep',day:'/12',title:"第一期100位天使全球招募成功",detail:"氢创投资第一期100位天使全球招募成功，为氢创投资服务全国创业者打下战略基础"},
          {bigCircle:0,dayLeft:0,year:'2016',Mouth:'Jul',day:'/20',title:"第一批8个项目入驻氢创投资众创空间",detail:"知造署、遗失、奇宝云商等8个第一批项目入驻众创空间"},
          {bigCircle:0,dayLeft:1,year:'2016',Mouth:'Jul',day:'/08',title:"氢创投资旗下成立氢创同城品牌",detail:"氢创投资成立氢创同城业务模块，是垂直同城创投线上线下协同的服务平台，线下“百城千场”项目投融资对接会为同城原创性好项目发展助力"},
          {bigCircle:1,year:'2015'},
          {bigCircle:0,dayLeft:0,year:'2015',Mouth:'Nov',day:'/12',title:"氢创投资成立",detail:"氢创投资创始团队成立，以夏美帖、曾家猛、何雪艳三位创始人为核心组建团队，标志着氢创投资项目正式开始运行"}
        ],
        timer:''
      }
    },
    created(){
      this.init();
      this.oneWidth=document.body.clientWidth;
      if(this.oneWidth<1200)
        this.oneWidth=1200;
      var _this=this;
      window.onresize=function(){
        _this.oneWidth=document.body.clientWidth;
        if(_this.oneWidth<1200)
          _this.oneWidth=1200;
      }
    },
    methods:{
      goAnchor(selector) {
        var anchor = this.$el.querySelector(selector);
        var index=selector.split("-")[1];
        this.menuSelect=index;
        if(anchor){
          document.documentElement.scrollTop = anchor.offsetTop;
          document.body.scrollTop = anchor.offsetTop;
        }
      },
      resetAnimate(index){
        this.bgIndex=index;
        this.init();
      },
      init(){
        var _this=this;
        clearInterval(this.timer)
        this.timer=setInterval(function(){
          if(_this.bgHover)
             return;
          _this.bgIndex+=1;
          if(_this.bgIndex>_this.bgTotalNum){
            setTimeout(function(){
              if(_this.bgIndex>_this.bgTotalNum){
                _this.target=true;
                _this.bgIndex=_this.bgIndex-=_this.bgTotalNum;
                setTimeout(function(){
                  _this.target=false;
                },100)
              }
            },2000)
          }
        },5000)
      },
      submit(para){
        var data;
        var _this=this;
        if(para){
          data=this.userInfox;
        }else{
          data=this.userInfo;
        }
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if(!data.name){
          alert("请输入正确您的姓名")
          return;
        }
        if(!data.location){
          alert("请输入正确您所在的城市")
          return;
        }
        if(!myreg.test(data.mobile)){
          alert("请输入正确的手机号")
          return;
        }
        $.getJSON("https://www.hcsoo.com/api/city/fensheApply",data).then(function (response) {
          if(response.code){
            _this.showMC=true;
          }else {
            alert(response.msg);
          }
        })
      },
      mouseOver(){
       this.bgHover=true;
      },
      mouseOut(){
        this.bgHover=false;
      }
    },
    components:{
        centerContainer,
        foot
    },mounted(){
      this.select = '#anchor-'+this.$route.query.select;

      var _this=this;
      _this.goAnchor(_this.select);
      _this.reset=true;
      setTimeout(function () {
        _this.goAnchor(_this.select);
        _this.reset=false
      },1000)

      this.domTopList=[];
      for(var i=1;i<=6;i++){
        this.domTopList[i-1]=$("#anchor-"+i).offset().top-70;
      }
      window.onscroll = function () {
        /*945,116*/
        var currentTop= document.body.scrollTop||document.documentElement.scrollTop;
        for(var i=0;i<6;i++){
          if(currentTop<_this.domTopList[0]){
            _this.menuSelect=1;
            break;
          }else if(currentTop>_this.domTopList[i]&&currentTop<_this.domTopList[i+1]){
            _this.menuSelect=i+1;
            break;
          }else if(currentTop>_this.domTopList[4]){
            _this.menuSelect=5;
            break;
          }
        }
        if(currentTop>=800){
          _this.showMenu=true;
        }
        else{
          _this.showMenu=false;
        }
      }
    }

  }
</script>
<style src="../assets/css/home.css" scoped>
</style>
