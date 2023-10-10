<template>
  <!--
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  -->
  <div>
    <h1>音频录制应用</h1>
    <AudioRecorder />
  </div>
</template>

<script>
import AudioRecorder from './components/AudioRecorder.vue';

export default {
  name: 'App',
  components: {
    AudioRecorder,
  }
}

</script>

<style>
#app { 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
