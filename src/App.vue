<template>
  <div id="app" >

    <timeTable/>
    <select v-model='sel'>
      <option value="s">ok brdfdfdfdfdfdfo</option>
    </select>
    <slotInput />
    <courseCard />


    
  </div>
</template>

<script>
import slotInput from './components/slotInput'
import timeTable from './components/timeTable'
import courseCard from './components/courseCard'
// import slts from '../slots.json'

export default {
  name: 'App',
  components: { slotInput,timeTable,courseCard }
  ,
  data () {
    return {
    sel:''
    }
  },
  
  


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
