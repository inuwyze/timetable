<template>
  
      <div id='timetable' ref="timetable">
      
      <div v-for="(x,i) in times" :key="i" class="periods"
      :style="{left:left(x.start-7.75),right:right(x.end-7.75),top:top(x.day)}">
        {{x.start|timeConvert}} - {{x.end|timeConvert}}
      </div>

      
      <div v-for="(course,slot) in courses" :key="slot">  
      <div v-show="course!=''"
      v-for="(event,j) in slots[slot]" :key="j" class="slot" @mouseover="slotSel=slot" @mouseleave="slotSel=null">
      <div class="event"
      @click="openCard(slot)"
      :class="{slotHover:slotSel==slot}" 
      :style="{left:left(event.start-7.75),right:right(event.end-7.75),top:top(event.day)}">
        <div>
          {{course.name}}
        </div>
        <div v-if="slotSel==slot">
          {{event.start|timeConvert}}-{{event.end|timeConvert}}
      </div>
      </div> 
      </div>  
      </div>
    </div>
  
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data () {
        return {
            slots:this.$store.state.slots,
            // slot1:Object.values(slts)[0],
            times:[ 
                { "day": "label", "start": 7.75, "end": 8.75 },
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
            courses:this.$store.state.myCourses,
            slotSel:''
            }
        },
        methods: {
            ...mapActions(['openCard']),
            left(x){
            return x/12*100+'%'
            },
            right(x){
            return (100-(x/12*100))+'%'
            },
            top(x){
            let days=['label','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
            return days.indexOf(x)/7*100+'%';
            },
        }

}
</script>

<style>
.periods{
    display: flex;
    align-items: center;
    justify-content: center;
    /* font-size: 12px; */
}
#timetable{
  height: 70vh;
  width: 91vw;
  position: relative;
  background: #557174;
   /* transform: rotate(-90deg); */
}
</style>