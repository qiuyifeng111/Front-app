<template>
  <div>
    <button @click="startRecording" :disabled="isRecording">开始录制</button>
    <button @click="stopRecording" :disabled="!isRecording">停止录制</button>
    <button @click="uploadAudio" :disabled="!audioBlob">上传音频</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isRecording: false,
      mediaRecorder: null,
      audioChunks: [],
      audioBlob: null,
    };
  },
  methods: {
    async startRecording() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            this.audioChunks.push(event.data);
          }
        };
        this.mediaRecorder.onstop = () => {
          this.audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
          this.audioChunks = []
        };
        this.mediaRecorder.start();
        this.isRecording = true;
      } catch (error) {
        console.error('无法访问麦克风或录制失败:', error);
      }
    },
    stopRecording() {
      if (this.mediaRecorder && this.isRecording) {
        this.mediaRecorder.stop();
        this.isRecording = false;
      }
    },
    async uploadAudio() {
      if (this.audioBlob) {
        const formData = new FormData();
        formData.append('audio', this.audioBlob, 'audio.wav');

        try {
          const response = await axios.post('http://localhost:5000/upload',formData);
          console.log('音频上传成功', response);
          // 可以在这里处理上传成功后的逻辑
        } catch (error) {
          console.error('音频上传失败', error);
        }
      }
    },
  },
};
</script>
