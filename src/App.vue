<template>
  <div id="app" >
    <!-- {{slots}} -->
    <!-- {{slots}} -->
    <div id='timetable' ref="timetable">
      <div v-for="(x,i) in times" :key="i" class="periods"
      :style="{left:left(x.start-7.75),right:right(x.end-7.75),top:top(x.day)}">
        {{x.start|timeConvert}}-{{x.end|timeConvert}}
      </div>

      <div v-for="(i,slot) in courses" :key="slot">
      
        
      <div v-show="i!=''"
      v-for="(event,j) in slots[slot]" :key="j" class="slot" @mouseover="slotSel=slot" @mouseleave="slotSel=null">
      <div class="event"
      :class="{slotHover:slotSel==slot}" 
      :style="{left:left(event.start-7.75),right:right(event.end-7.75),top:top(event.day)}">
        <div>
          {{i}}
        </div>
        <div v-if="slotSel==slot">
          {{event.start|timeConvert}}-{{event.end|timeConvert}}
        </div>
      </div> 
      
      </div>  
      </div>
    </div>
    <!-- {{courses}} -->
    {{screenHeight}}
    <button @click='getwidth'></button>
    <div id='slotForm'>
      slotForm
      <div>S1<input type="text" v-model="courses['S1']"></div>
      <div>S2<input type="text" v-model="courses['S2']"></div>
      <div>S3<input type="text" v-model="courses['S3']"></div>
      <div>S4<input type="text" v-model="courses['S4']"></div>
      <div>S5<input type="text" v-model="courses['S5']"></div>
      <div>S6<input type="text" v-model="courses['S6']"></div>
      <div>S7<input type="text" v-model="courses['S7']"></div>
      <div>S8<input type="text" v-model="courses['S8']"></div>
      <div>S9<input type="text" v-model="courses['S9']"></div>
      <div>V1<input type="text" v-model="courses['V1']"></div>
      <div>SM1<input type="text" v-model="courses['SM1']"></div>
      <div>SM2<input type="text" v-model="courses['SM2']"></div>
      <div>F1<input type="text" v-model="courses['F1']"></div>
      <div>F2<input type="text" v-model="courses['F2']"></div>
      <div>L1<input type="text" v-model="courses['L1']"></div>
      <div>L4<input type="text" v-model="courses['L4']"></div>
      <div>L7<input type="text" v-model="courses['L7']"></div>
    </div>

    
  </div>
</template>

<script>

import slts from '../slots.json'
export default {
  name: 'App',
  data () {
    return {
      slotSel:'',
      slots:slts,
      slot1:Object.values(slts)[0],
      times:[ { "day": "label", "start": 7.75, "end": 8.75 },
      { "day": "label", "start": 8.75, "end": 9.75 }  ,
      { "day": "label", "start": 9.75, "end": 10.75 },
      { "day": "label", "start": 10.75, "end": 11.75 },
      { "day": "label", "start": 11.75, "end": 12.75 },
      { "day": "label", "start": 12.75, "end": 13.75 },
      { "day": "label", "start": 13.75, "end": 14.75 },
      { "day": "label", "start": 14.75, "end": 15.75 },
      { "day": "label", "start": 15.75, "end": 16.75 },
      { "day": "label", "start": 16.75, "end": 17.75 },
      { "day": "label", "start": 17.75, "end": 18.75 },
      { "day": "label", "start": 18.75, "end": 19.75 },
      ],
      courses:{},
      isMounted:false,
      clientHeight:false,
    }
  },
  mounted(){
      this.isMounted = true;
  },
  computed: {
    screenHeight(){
      console.log('scrennHeight')
       if(!this.isMounted)
                return;
      console.log(this.$refs.timetable.clientWidth)
      // return this.$refs.timetable.clientHeight
      return this.$refs.timetable.clientWidth
    }
  },
  filters: {
    timeConvert(x){
      let hr=(x-.75)%12==0?12:(x-.75)%12
      return hr+':'+45
    }
  },
  methods: {
    getwidth(){
      console.log(this.$refs.timetable.clientWidth)
    },
    left(x){
      console.log('left')
      console.log(x/12*100+'%')
      return x/12*100+'%'
    },
    right(x){
      console.log('right')
      console.log(x/12*100+'%')
      return (100-(x/12*100))+'%'
    },
    top(x){
      let days=['label','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
      console.log('top')
      console.log(x)
      console.log(days.indexOf(x))
      console.log(days.indexOf(x)/7*100+'%')
      return days.indexOf(x)/7*100+'%';
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#timetable{
  height: 70vh;
  width: 91vw;
  position: relative;
  background: #557174;
   /* transform: rotate(90deg); */
}
.event{
  position: absolute;
  height:10vh;
  border: 1px solid black;
  background: #9fae8371;
  
  transform: scale(0.90);
  transition: all .3s ease-in-out;
}
.periods{
  position: absolute;
  height:9vh;
  border: 1px solid #aebe8e;
  background: #738059;
}
.slotHover{
  background:#c7cfb7;
  /* color:#c7cfb7; */
  z-index: 2;
  transform: scale(0.98);
  

}
</style>
