<template>
  <div class="centerContainer">
    <div class="event">
      <div v-if="event.dayLeft" style="text-align: right">
        <div class="year">{{event.year}}</div>
        <div class="Mouth">{{event.Mouth}}</div>
        <div class="day">{{event.day}}</div>
      </div>
      <div v-if="!event.dayLeft" class="eventContainer" style="text-align: right">
        <div>{{event.title}}</div>
        <p>{{event.detail}}</p>
        <div class="arrowLeft"></div>
      </div>
    </div>
    <div class="center">
      <div class="line"></div>
      <div class="smallCircle">
        <div></div>
      </div>
      <div class="line"></div>
    </div>
    <div class="event">
      <div v-if="!event.dayLeft"  style="text-align: left">
        <div class="year">{{event.year}}</div>
        <div class="Mouth">{{event.Mouth}}</div>
        <div class="day">{{event.day}}</div>
      </div>
      <div v-if="event.dayLeft" class="eventContainer" style="text-align: left">
        <div>{{event.title}}</div>
        <p>{{event.detail}}</p>
        <div class="arrowRight"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
      }
    },
    props:['event']
  }
</script>
<style scoped>
  div{margin: 0 auto}
  .smallCircle{width: 11px; height: 11px; border-radius: 50%; border:1px solid #60a5d9; padding: 2px;}
  .smallCircle div{width: 11px; height: 11px; line-height: 47px; font-size: 14px; text-align: center; font-weight: bold; color: white; border-radius: 50%; background-color: #99d4ef}
  .line{width: 1px; background-color: #dddddd; height: 39px;}
  .centerContainer{/*min-width:1200px;*/ height: 93px; display: inline-block;font-size: 0}
  .event{width: 460px; height: 93px; float: left; margin-top: -2px; }
  .center{width: 75px;height: 93px;float: left;}
  .year{font-size: 24px; font-weight: bold; line-height: 42px; color: #4193d2;}
  .Mouth{font-size: 14px; line-height: 14px;color: #4193d2;}
  .day{font-size: 18px; line-height: 36px; color: #4193d2;}
  .eventContainer{position:relative; width: 390px;background-color: #f6f6f6; padding:14px 20px; text-align: left; border-radius: 5px}
  .eventContainer div{font-size: 16px; line-height: 28px; color: #545d69}
  .eventContainer p{font-size: 16px; line-height: 28px;  color: #9098a3}
  .arrowLeft{width: 0;  height: 0;  border-top: 10px solid transparent;  border-left: 15px solid #f6f6f6;  border-bottom: 10px solid transparent;  position: absolute;  right: -15px;  top: 30px;}
  .arrowRight{width: 0;  height: 0;  border-top: 10px solid transparent;  border-right: 15px solid #f6f6f6;  border-bottom: 10px solid transparent;  position: absolute;  left: -15px;  top: 30px;}

</style>
