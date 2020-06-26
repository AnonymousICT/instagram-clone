import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: "http://localhost:3000/",
    isAuthenticated: false,
    feed: [
      {
        id:0,
        display_name: 'Jotaro Kujo',
        user_id: 3,
        desc: 'Dolphins are manly as fuck',
        image: 'https://i.pinimg.com/originals/ae/28/8f/ae288f76c550fd4f0d57217f5484583b.png',
        timestamp: 1551052800000,
      },
      {
        id:1,
        display_name: 'Giorno Giovanna',
        user_id: 5,
        desc: 'dolphins are gangstar',
        image: 'https://i.ytimg.com/vi/9E4W2e-uBRU/maxresdefault.jpg',
        timestamp: 1551092800000,
      },
      {
        id:2,
        display_name: 'Joseph Joestar',
        user_id: 2,
        desc: '@JotaroKujo You`re next line will be: Why are you on Insta old man?' ,
        image: 'https://pbs.twimg.com/media/DvNNUSHX4AESbyX.jpg',
        timestamp: 1551092800000,
      },
      {
        id:3,
        display_name: 'Jotaro Kujo',
        user_id: 3,
        desc: 'Why are you on Insta old man?',
        image: 'https://pm1.narvii.com/7450/10f54b028b46819cf9b5970cb04c11cf541b7f38r1-1280-720v2_hq.jpg',
        timestamp: 1551092800000,
      },
    ]
  },
  mutations: {
    isAuthenticated(state){
      if(localStorage.getItem('jwt')!==null) {
        state.isAuthenticated = true
      } else {
        state.isAuthenticated = false
      }
    },

    login(state, token) {
      state.isAuthenticated = true;
      localStorage.setItem('jwt', token);
      router.push('/');
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('jwt')
      router.push('/login');
    }
  },
  actions: {

  },
  modules: {
  }
})
