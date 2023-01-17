<template>
  <div class="background">
    <div class="container">
      <BlessCard class="temp" :avator="generateAvator('gjsss')" :content="content" />
      <UserComment :data="commData" />
    </div>
  </div>
</template>

<script setup>
import BlessCard from "@/components/BlessCard.vue"
import { generateAvator } from "@/utils/avator"
import UserComment from "@/components/UserComment.vue"
const commData = [{
  id: 1,
  name: 'wff',
  content: "喜悦伴着汗水，成功伴着艰辛，遗憾激励奋斗，我们不知不觉地走进了2023年，在新年来临之际，首先我代表信息中心祝各位新年快乐，万事如意! ——gjs"
}, {
  id: 3,
  name: 'wfff',
  content: "喜悦伴着汗水，成功伴着艰辛，遗憾激励奋斗，我们不知不觉地走进了2023年，在新年来临之际，首先我代表信息中心祝各位新年快乐，万事如意!"
}, {
  id: 4,
  name: 'wffs',
  content: "喜悦伴着汗水，成功伴着艰辛，遗憾激励奋斗，我们不知不觉地走进了2023年，在新年来临之际，首先我代表信息中心祝各位新年快乐，万事如意!"
}, {
  id: 5,
  name: 'wffa',
  content: "喜悦伴着汗水，成功伴着艰辛，遗憾激励奋斗，我们不知不觉地走进了2023年，在新年来临之际，首先我代表信息中心祝各位新年快乐，万事如意!"
}, {
  id: 2,
  name: 'gjs',
  content: "短句子"
}]
const content = "我小时过年，有一大群小孩子提着纸灯笼，各家乱转，回来的时候，口袋里装满了好吃的。但愿你也有这样美好的回忆!"
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 80vw;
  max-width: 420px;
  margin: auto;
}

.temp {
  padding-top: 20px;
}

.background {
  background-image: linear-gradient(0deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
  width: 100vw;
  min-height: 100vh;
}
</style>