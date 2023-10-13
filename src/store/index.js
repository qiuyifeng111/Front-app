// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    imageLibrary: [], // 图片库
    currentIndex: 0, // 当前图片的索引
  },
  mutations: {
    addImageToLibrary(state, image) {
      state.imageLibrary.push(image);
    },
    clearImageLibrary(state) {
      state.imageLibrary = [];
    },
    setCurrentIndex(state, index) {
      state.currentIndex = index;
    },
  },
  actions: {
    
  },
});
