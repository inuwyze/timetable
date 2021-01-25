<template>
  <div id="app" >

    <timeTable/>
    
    <slotInput v-show="true"/>
    
    <courseCard />
    <!-- <searchSelect /> -->
    
    <modal v-model="show">
      ola
    </modal>
    <div @click="show=true">click me</div>
    {{show}}
    
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
    
    show:true
    
    }
  },

}
</script>

<style>
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
