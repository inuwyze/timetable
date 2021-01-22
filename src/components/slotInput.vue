<template>
<div class="container">

  <div class="container ">
    <!-- {{sltss}} -->
    <div v-for="(s,slt) in sltss" :key="slt" class="inp">
      {{slt}} course:<input type="text" @input="inputHandler(slt,'name',$event.target.value.trim())">
      teacher:<input type="text" @input="inputHandler(slt,'faculty',$event.target.value)">
      <span v-for='(i,x) in s' :key='x'>  </span>
      <!-- [{{i.day|abbv}}{{i.start|timeConvert}}{{i.end|timeConvert}}] -->
    </div>
  </div>
    {{myCourses}}
</div>
</template>

<script>
import slts from '../../slots.json'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({myCourses:'myCourses'})
  },
  filters: {
    abbv(v){
      return v.substring(0,3).toUpperCase()
    },
     
  },
  data () {
    return {
      sltss:slts,
    }
  },
  methods: {
    inputHandler(s,f,v){
      
      console.log(v)
      console.log(this.$store.state.myCourses[s])
      
      console.log(s)
      console.log(this.$store.state.myCourses)
      if(!this.$store.state.myCourses[s])
        this.$set(this.$store.state.myCourses, s, {name:'',faculty:''})
      this.$store.state.myCourses[s][f]=v
      if(this.$store.state.myCourses[s].name=='' && this.$store.state.myCourses[s].faculty=='')
        delete this.$store.state.myCourses[s];
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
.inp{
   margin: 5px;
}
</style>