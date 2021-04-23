<template>
  <div id="app" >

    <timeTable/>
    
    <!-- <slotInput /> -->
    
    <courseInput />
    
    <!-- <slotSettings /> -->

    <courseCard />
    
    <!-- <searchSelect /> -->
    
    
    
  </div>
</template>

<script>
// import {generator} from './course_generator/generator'
// import slotInput from './components/slotInput'
import courseInput from './components/course_input'   
// import slotSettings from './components/slot_settings'   
import timeTable from './components/timeTable'
import courseCard from './components/courseCard'
// import searchSelect from './components/searchSelect'
// import slts from '../slots.json'

export default {
  name: 'App',
  components: { courseInput,timeTable,courseCard }
  ,
  data () {
    return {
    
    }
  },
  created(){
    
 
  }

}
</script>

<style>

:root {
  --background: #ffe6e6;
  --periods:#ffabe1;
  --period_border:#ec7ec6;
  --period_text:#610541;
  --slot_background:#a685e2;
  --slot_hover:#6155a6;
  --background: #a685e2;
  --periods_background:#6155a6;
  --period_border:#7d71be;
  --period_text:#a094e6;
  --slot_background:#ffabe26e;
  --slot_hover:#ff8bd6;
}

@media (orientation: portrait) {
  body{
    margin: 0;
  }
  #app{
  /* display: flex; */
  /* flex-direction: column; */
  height: 100vh;
  width: 100vw;
}
  #timetable{
  height: 100vw;
  width: 100vh;
  position: relative;
  background: var(--background);
   transform: rotate(-90deg);
   
}

.periods{
  height:12vw !important;
}
.event{
  height: 14.28vw  !important;
  /* transform: scale(0.8) !important; */
}
/* .courseCard{
  transform: rotate(-90deg);
} */
/* .adds{
  position: fixed;
  top: 10px;
  right: 10px;
  transform: rotate(-90deg);
} */

}
.error,.error:focus{
  outline: none !important;
  border-color: red;
}
.ok:focus{
  outline: none !important;
  border: 2px solid green;
  
}
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

.event{
  position: absolute;
  height:10vh;
  border: 1px solid black;
  background: var(--slot_background);
  /* opacity: 0.5; */

  transform: scale(0.90);
  transition: all .3s ease-in-out;
}
.periods{
  position: absolute;
  height:9vh;
  border: 1px solid var(--period_border);
  background: var(--periods_background);
  color: var(--period_text);
}
.slotHover{
  background:var(--slot_hover);
  /* color:#c7cfb7; */
  z-index: 2;
  transform: scale(0.98);
  

}
</style>
