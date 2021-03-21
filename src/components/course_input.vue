<template>
<div >

    <!-- <div class=" ">
    {{sltss}}
    <div v-for="(s,slt) in sltss" :key="slt" class="inp">
      {{slt}} course:<input type="text" @input="inputHandler(slt,'name',$event.target.value.trim())">
      teacher:<input type="text" @input="inputHandler(slt,'faculty',$event.target.value)">
      <span v-for='(i,x) in s' :key='x'>  </span>
      [{{i.day|abbv}}{{i.start|timeConvert}}{{i.end|timeConvert}}]
      </div>
    </div> -->
    <modal v-model="show" >
      {{myCourses}}
      <div style="height:500px;width:400px;margin:15px;overflow:auto;overflow-x: hidden;position:relative;padding:4px">
      <searchSelect :items='cse' @addCourse='addCourse'/>
        <div>
        <div v-for="course in myCourse.keys()" 
        :key="course"
        @click="rmCourse(course)"
        class="course">
          {{course}}
          </div>
        </div>
      <div class="button" @click="gn">generate</div>
      </div>
      <!-- <div style="flex"> -->
      <!-- <input type="text" v-model="search"> -->
      <!-- <button @click="search=''">clear</button> -->
      <!-- </div> -->
      <!-- <div v-for="x in cse_courses" :key="x">{{x}}</div> -->
    </modal>
    
    <button 
    class="courseInput"
    @click="show=true">generator</button>
    
    
    <!-- {{Object.keys(sltss)}} -->
</div>
</template>

<script>

// import slts from '../../slots.json'

import searchSelect from './searchSelect'
import {mapState,mapActions} from 'vuex'


export default {
  components:{searchSelect},
  data () {
    return {
      search:'',
      show:false,
      sltss:this.$store.state.slots,
      validate:'',
      cse:[],
      textarea:'',
      log:'',
      myCourse:new Set()

    }
  },
  created(){
    this.cse=require('../assets/cse_courses.json')
  },
  computed: {
    ...mapState({myCourses:'myCourses'}),
    cse_courses(){
      return this.cse.filter((course)=>{
        return course.toLowerCase().includes(this.search)
      })
    }
  },
  watch: {
    textarea(v){
      // alert('ola',v)
      console.log(v)
      
    }
  },
  filters: {
    abbv(v){
      return v.substring(0,3).toUpperCase()
    },
     
  },
  
  methods: {
    ...mapActions(['generate']),
    gn(){
      this.generate(this.myCourse)
      this.$forceUpdate()
    },
    rmCourse(course){
      
      this.myCourse.delete(course)
      this.$forceUpdate();
    },
    addCourse(course){
      console.log(course)
      this.myCourse.add(course)
      this.$forceUpdate();
      // for (let c of this.myCourse.entries()){
      //   console.log(c)
      // }
      this.myCourse.forEach((x)=>{console.log(x)})
    },
     
    
    inputHandler(s,n,f){
      
      console.log(s,f,n)
      // console.log(this.$store.state.myCourses[s])
      
      // console.log(s)
      // console.log(this.$store.state.myCourses)
      if(!this.$store.state.myCourses[s])
        this.$set(this.$store.state.myCourses, s, {name:'',faculty:''})
      this.$store.state.myCourses[s]['name']=n
      this.$store.state.myCourses[s]['faculty']=f
      if(this.$store.state.myCourses[s].name=='' && this.$store.state.myCourses[s].faculty=='')
      {
        
        delete this.$store.state.myCourses[s];
      }
    }
  }
}
</script>

<style>
.button{
  background: rgb(120, 218, 120);
  position: absolute;
  bottom: 0px;
  user-select: none;
  width: 95%;
  border-radius: 5px;
  padding: 5px;
}
.button:hover{
  background: rgb(141, 228, 141);
  border:1px solid rgb(120, 218, 120);
  
  /* box-shadow: 1px 1px px 2px rgb(172, 172, 172); */
}
.button:active{
  transform: scale(0.99);
}
.course{
  box-shadow: 1px 1px 5px 1px rgb(221, 221, 221);
  border-radius:5px;
  padding: 8px;
  margin: 4px;
}
.course:hover{
  box-shadow: 1px 1px 5px 1px rgb(145, 145, 145);
}
.courseInput{
  height: 30px;
  position: fixed;
  bottom: 50px;
  right: 10px;
}
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  align-items: center;
}
.grid{
  display: grid ;
  grid-template-columns: auto auto ;
}
.inp{
   margin: 5px;
}
</style>