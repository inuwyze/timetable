<template>
<div class="container">

  <div class="container ">
    <!-- {{sltss}} -->
    <div v-for="(s,slt) in sltss" :key="slt" class="">
      {{slt}}<input type="text" v-model="slot[slt]">
      <span v-for='(i,x) in s' :key='x'>{{i.day|abbv}}{{i.start}}{{i.end}}</span>
    </div>
  </div>
    {{slot}}
</div>
</template>

<script>
import slts from '../../slots.json'
// const slts = require('../slots.json') 
export default {
  filters: {
    abbv(v){
      return v.substring(0,3).toUpperCase()
    }
  },
  data () {
    return {
      sltss:slts,
      slot:{},
      genSlts:[
        ['S',9],
        ['L',12],
        ['F',2],
        ['SM',2],
        ['V',1],
        ],
    }
  }
}
</script>

<style>
.container{
  width: 100%;
}
.grid{
  display: grid ;
  grid-template-columns: auto auto ;
}
.slotInput{
   
}
</style>