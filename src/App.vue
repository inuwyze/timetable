<template>
  <div id="app" >

    <timeTable/>
    
    <slotInput />
    
    <courseCard />
    <!-- <searchSelect /> -->
    
    
    
  </div>
</template>

<script>
import slotInput from './components/slotInput'
import timeTable from './components/timeTable'
import courseCard from './components/courseCard'
// import searchSelect from './components/searchSelect'
// import slts from '../slots.json'

export default {
  name: 'App',
  components: { slotInput,timeTable,courseCard }
  ,
  data () {
    return {
    
    }
  },

}
</script>

<style>

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
  background: #557174;
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
/* .addCourses{
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
