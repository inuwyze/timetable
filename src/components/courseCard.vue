<template>
       <modal v-if='showCard' v-model="show">
            <h2 style="margin:0">{{myCourses[selCourse].name}}</h2>
            <div style="margin:0">{{myCourses[selCourse].faculty}}</div>
            <h4 class="chead2">timings</h4>
            
            <div v-for="(x,i) in slots[selCourse]" :key="i" class="g">
              <span>{{x.day}}</span><span>: {{x.start|timeConvert}}</span><span>-{{x.end|timeConvert}}</span>
              </div>
            
            
        </modal>
</template>

<script>
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
.chead2{
  margin: 5px;
}
.g span{
  justify-self: start;
}
.g{
  display: grid;
  width: 50%;
  grid-template-columns:  50% 25% 25%;
  
}
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
}
.modal-container{
    background: white;
    padding:25px;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>