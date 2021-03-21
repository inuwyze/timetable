import Vue from 'vue'
import Vuex from 'vuex'
import slts from '../slots.json'
Vue.use(Vuex)
import {generator} from '../course_generator/generator'
export default new Vuex.Store({
  state: {
    slots:slts,
    myCourses:{},
    selCourse:'',
    showCard:false,
  },
  mutations: {
    setCourse(state,c){
      state.selCourse=c;
    },
    closeCard(state){
      state.showCard=false
    },
    
  },
  actions: {
    openCard({state},course){
      state.showCard=true;
      state.selCourse=course;

    },
    generate({state},myCourse){
      alert(myCourse.keys())
      let course_slots={}
      let course_int={}
      let i=0
      console.log(myCourse)
      for(let course of myCourse){
        course_int[i]=course
        if(course.toLowerCase().includes('lab'))
        course_slots[i]=['L1','L2','L3','L4','L5','L6','L7','L8','L9','L10','L11','L12','L13','L14','L15']
        else 
        course_slots[i]=['S1','S2','S3','S4','S5','S6','S7','S8','S9']
        i++
      }
      console.log('course_slots')
      console.log(course_slots)
      let cs=generator(course_slots)
      console.log(cs)
      for(let x in cs){
        console.log(x)
        Vue.set( state.myCourses,cs[x],{name:course_int[x],'faculty':''})
      }
    }
  },
  modules: {
  }
})
