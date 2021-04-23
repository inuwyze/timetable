<template>
<div >

    <modal v-model="show" >
        slot*,course name,faculty**
        <textarea :class="validate"
        name="" id="" cols="30" rows="10" v-model="textarea" @input="wtch($event.target.value)"></textarea>
        
        *case sensitive
        **optional
    </modal>
    <button 
    class="adds"
    @click="show=true">show</button>
    
    
    <!-- {{Object.keys(sltss)}} -->
</div>
</template>

<script>

// import slts from '../../slots.json'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      show:false,
      sltss:this.$store.state.slots,
      validate:'',
      textarea:'',
      log:''
    }
  },
  computed: {
    ...mapState({myCourses:'myCourses'})
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
    wtch(v){
      // alert(v)
      let c=v.split('\n').filter(x=>x!='')
      this.log=c
      let s=[]
      let vd=c.every(x=>{s.push(x.split(',')[0]);return x.split(',').length>1  && x.split(',').every(y=>y) && Object.keys(this.sltss).includes(x.split(',')[0]) ;})
      this.log+=s
      this.log+=vd
      console.log(s)
      console.log(vd)
      let Sltdup=new Set(s).size == s.length
       
      let that=this;
      this.validate=vd && Sltdup ?'ok':'error'
      if(vd){
        
      c.forEach(function(x){that.inputHandler(x.split(',')[0],x.split(',')[1],x.split(',')[2]?x.split(',')[2]:'')})
      }else{
        c.forEach(function(x){that.inputHandler(x.split(',')[0],'','')})
        // this.$store.state.myCourses.length=0
      }
     
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
.adds{
  height: 30px;
  position: fixed;
  bottom: 10px;
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