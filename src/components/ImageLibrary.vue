<!-- YourComponent.vue -->
<template>
    <div>
      <h1>图片库</h1>
      <div class="image-container">
        <img v-if="imageLibrary.length > 0" :src="currentImage" alt="Image" class="responsive-image" />
      </div>
      <div>
        <button @click="clearImageLibrary">清除图片库</button>
      </div>
      <div class="image-list">
        <!-- 使用样式设置横向展示和间距 -->
        <div v-for="(image, index) in imageLibrary" :key="index"  @click="showImage(index)">
          <img :src="image" alt="Image" class="thumbnail" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      currentImage() {
        return this.$store.state.imageLibrary[this.$store.state.currentIndex];
      },
      imageLibrary() {
        return this.$store.state.imageLibrary;
      },
    },
    methods: {
      showImage(index) {
        this.$store.state.currentIndex = index;
      },
      clearImageLibrary() {
        this.$store.commit('clearImageLibrary');
      },
    },
  };
  </script>
  
  <style scoped>
  /* 样式用于横向展示缩略图并设置间距 */
  .image-list {
    display: flex; /* 使用 Flexbox 布局进行横向排列 */
    gap: 10px; /* 缩略图之间的间距 */
  }
  
  /* 样式用于缩略图 */
  .thumbnail {
    /* 设置缩略图的宽度和高度，使缩略图具有相同的大小 */
    width: 100px; /* 例如，设置为100px */
    height: 100px; /* 例如，设置为100px */
    /* 添加其他样式，如边框、间距等 */
    border: 1px solid #ccc;
    /* 可以添加过渡效果 */
    transition: all 0.3s;
  }
  
  /* 样式用于清除图片库按钮 */
  button {
    margin-top: 10px;
  }
  </style>
  