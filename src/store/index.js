import Vue from 'vue'
import Vuex from 'vuex'
import slts from '../slots.json'
Vue.use(Vuex)

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

    }
  },
  modules: {
  }
})
