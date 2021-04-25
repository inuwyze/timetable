import Vue from 'vue'
import Vuex from 'vuex'
import slts from '../slots.json'
import fd_slts from '../all_foundation_slots_app.json'
Vue.use(Vuex)
import {generator} from '../course_generator/generator'
// import { delete } from 'vue/types/umd'
import idb from '../idb/idb'

console.log('idb.getTimetable()')
console.log(idb.getTimetable())
export default new Vuex.Store({
  
  state: {
    slots:{...slts,...fd_slts},
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
    setMyCourseEmpty(state){
      // Object.assign(state.myCourses,{})
      // Vue.set(state,'myCourses',getDefaultState.myCourses)
      Object.keys(state.myCourses).forEach(key=>{delete state.myCourses[key]})
    }
    
  },
  actions: {
    openCard({state},course){
      state.showCard=true;
      state.selCourse=course;

    },
	async getDB({state}){
		
		console.log('state.myCourses')
		let t=await idb.getTimetable()
		t=t.result
		for(let x in t)
		{	
			console.log(t[x])
			Vue.set( state.myCourses,x,{name:t[x]['name'],'faculty':t[x].faculty})
		}
		console.log(state.myCourses)
		
		
	},
	saveTimetable({state}){
		if(Object.keys(state.myCourses).length!=0)
			idb.saveTimetable(state.myCourses)
		else
			alert('empty')
	},
    generate({state,commit},myCourse){
      // alert(myCourse.keys())
      commit('setMyCourseEmpty')
      let course_slots={}
      let course_int={}
      let i=0
      console.log('myCourse')
      console.log(myCourse)
      // console.log(myCourse)
      for(let course of Object.keys(myCourse)){
        course_int[i]=course
        console.log(course)
        // if(course.toLowerCase().includes('lab'))
        course_slots[i]=myCourse[course]
        // else 
        // course_slots[i]=['S1','S2','S3','S4','S5','S6','S7','S8','S9']
        i++
      }
      // console.log('course_slots')
      // console.log(course_slots)
      let itr=0
      let cs=null
      while(itr<10){
        cs=generator(course_slots)
        if(Object.keys(cs).length>0)
         break
      }
      console.log('cs')
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
