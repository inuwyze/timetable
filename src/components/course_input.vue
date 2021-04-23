<template>
<div >

    <modal v-model="show" padding='30px' width='800px'>
      
      <div  style="position:relative;height:100%;width:100%">
      <div  style="display:flex;justify-content:space-around;margin-bottom:15px">

      <searchSelect :items='fil_courses' @select='add' width='450px'/>
      
      <searchSelect :items='category' v-model='cat' width='200px'/>
      </div>

        <div style='overflow:auto;height:86.5%'>
        
        <div v-for="course in myCourse"
        style="display:flex;justify-content:space-between"
        :key="course"
        class="course">
          <div class="item1">
            {{course}}
          </div>
        
          <div
          class="item2">
          <!-- {{allCourses[course][2]}} -->
          <span 
          style="padding:8px;margin:5px;margin-top:0;box-shadow:1px 1px 3px 1px grey;border-radius:3px;"
          v-for="x in allCourses[course][2]"
          @click="rmSlot(course,x)"
          :key="x">{{x}}</span>
          </div>
          <div
          @click="rmCourse(course)">
          x
          </div>
        </div>
        </div>
        
      <div class="button" @click="gn">generate</div>
      </div>
      
    </modal>
    
    <button 
    class="courseInput"
    @click="show=true">generator</button>
    
    
    
</div>
</template>

<script>

// import slts from '../../slots.json'


import {mapState,mapActions} from 'vuex'


export default {
  
  data () {
    return {
      search:'',
      show:false,
      
      validate:'',
      category:['Program Core','Program Electives','Allied Electives','Institute Electives','Foundation'],
      category_f:{'Program Core':['CSE'],'Program Electives':['CSE'],'Allied Electives':['ECE','EEE','BIOTECH','BIOMED'],'Institute Electives':['AUTO','CIVIL','MECH','AERO'],'Foundation':['ALL']},
      f_slots:{
        'Project Management and Finance':['F4','F5','F6','F7','F8','F9','F10','F11'],
        'Applied Statistics':['F1','F2','F12','F13'],
        'Transforms and Partial Differential Equations':['F1','F2','F3'],
        'Design Thinking':['F5','F6','F7','F9'],
        'Environmental Studies':['F4','F5','F6','F7'],
      },
      cat:'Program Core',
      allCourses:[],
      textarea:'',
      log:'',
      myCourse:new Set()

    }
  },
  created(){
    this.allCourses=require('../assets/all_courses.json')
  },
  computed: {
    ...mapState({myCourses:'myCourses'}),
    fil_courses(){
      console.log("AAA")
      console.log(Object.keys(this.allCourses))
      let f=Object.keys(this.allCourses).filter((course)=>{
        if(this.cat=='All' || this.cat=='')
          return true
        
        return this.allCourses[course][0]==this.cat && this.category_f[this.cat].includes(this.allCourses[course][1])
        
      })
      return f
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
    custom_slot(c){
      alert(c)
    },
    ass_slots(){
      // if(allCourses[c][0]=='Program Core')
      //   return ['S1','S2','S3','S4']
    },
    gn(){
      let mc={}
      for(let x of Array.from(this.myCourse))
        mc[x]=this.allCourses[x][2]
      console.log(mc)
      this.generate(mc)
      // this.$forceUpdate()
    },
    rmSlot(c,s){
      console.log(this.allCourses[c][2])
      console.log(this.allCourses[c][2].indexOf(s))
      // console.log(this.allCourses[c][2].splice(this.allCourses[c][2].indexOf(s),1))
      this.allCourses[c][2].splice(this.allCourses[c][2].indexOf(s),1)
      // this.allCourses[c][2]=this.allCourses[c][2].splice(this.allCourses[c][2].indexOf(s),1)
    },
    rmCourse(course){
      
      this.myCourse.delete(course)
      this.$forceUpdate();
    },
    add(course){
      console.log(course)
      console.log(this.allCourses[course])
      if(this.allCourses[course][1]=='CSE')
      {
        if(course.toLowerCase().includes('lab'))
          this.allCourses[course].push(['L1','L2','L3','L4','L5','L6','L7','L8','L9','L10','L11','L12','L13'])
        else
          this.allCourses[course].push(['S1','S2','S3','S4','S5','S6','S7','S8','S9','S10'])
      }
      
      if(this.allCourses[course][0]=='Institute Electives')
        this.allCourses[course].push(['I'])
      if(this.allCourses[course][0]=='Allied Electives')
        this.allCourses[course].push(['A'])
      if(this.allCourses[course][0]=='Foundation')
        this.allCourses[course].push(this.f_slots[course])
        

      this.myCourse.add(course)
      
      this.$forceUpdate();
      // for (let c of this.myCourse.entries()){
      //   console.log(c)
      // }
      // this.myCourse.forEach((x)=>{console.log(x)})
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
.item1{
  flex: 1 1 35%;
}
.item2{
  flex: 2 2 65%;
  display:flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content:start;
}
.button{
  background: rgb(120, 218, 120);
  position: absolute;
  bottom: -10px;
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

.inp{
   margin: 5px;
}
</style>