<template>
       <modal v-if='showCard'  v-model="show" :rotate='false'>
            <div class="courseCard">
            <h2 style="margin:0">{{myCourses[selCourse].name}}</h2>
            <div style="margin:0">{{myCourses[selCourse].faculty}}</div>
            <h4 class="chead2">timings</h4>
            
            <div v-for="(x,i) in slots[selCourse]" :key="i" class="g">
              <span>{{x.day}}</span><span>: {{x.start|timeConvert}}</span><span>-{{x.end|timeConvert}}</span>
              </div>
          </div>          
            
        </modal>
</template>

<script>
console.log(screen.orientation.type)
import {mapState, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState(['showCard','selCourse','slots','myCourses']),
    show:{
      get(){return this.showCard},
      set(v){this.$store.state.showCard=v}
    }

  },
  data () {
    return {
      
    }
  },
  methods: {
    ...mapMutations(['closeCard'])
  }
}
</script>

<style>
.courseCard
{
  /* height: 40vw; */
  padding: 20px;
  width: 40vh;

}
.chead2{
  margin: 5px;
}
.g span{
  justify-self: start;
}
.g{
  display: grid;
  width: 100%;
  grid-template-columns:  40% 30% 30%;
  
}

</style>