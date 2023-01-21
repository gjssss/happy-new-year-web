import { createStore } from 'vuex'

export default createStore({
  state: {
    isMask: false,
    userInfo: {
      id: 0,
      name: "ggg",
      content: "大家新年快乐",
      url: "http://hellogjs.top:5001/5.x/micah/svg?seed=ggg&eyebrows=up,eyelashesUp&mouth=pucker,laughing,smile,smirk,surprised,nervous"
    },
    randomInfo: {
      id: 0,
      name: 'fff',
      content: '',
    },
    commentArr: []
  },
  getters: {
  },
  mutations: {
    swicthMask(state) {
      state.isMask = !state.isMask
      if (state.isMask) {
        document.getElementsByTagName('html')[0].style.overflow = "hidden"
      } else {
        document.getElementsByTagName('html')[0].style.overflow = ""
      }
    },
    setUserInfo(state, info) {
      state.userInfo = info;
    },
    setRandomInfo(state, info) {
      state.randomInfo = info;
    },
    setComments(state, comments) {
      state.commentArr = comments;
    }
  },
  actions: {
  },
  modules: {
  }
})
