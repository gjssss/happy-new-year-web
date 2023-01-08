<template>
  <div class="container">
    <UserComment :data="commData" />
  </div>
  <SharePicture />
</template>

<script setup>
import SharePicture from "@/components/SharePicture.vue"
import UserComment from "./components/UserComment.vue";
const commData = [{
  id: 1,
  name: 'wff',
  content: "喜悦伴着汗水，成功伴着艰辛，遗憾激励奋斗，我们不知不觉地走进了2023年，在新年来临之际，首先我代表信息中心祝各位新年快乐，万事如意!"
}, {
  id: 2,
  name: 'gjs',
  content: "短句子"
}]
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 80vw;
  margin: auto;
  z-index: 0;
}
</style>