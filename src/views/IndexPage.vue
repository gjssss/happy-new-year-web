<template>
    <BlessCard :avator="generateAvator(usrName)" :content="content" />
    <RandomCard :avator="generateAvator(usrName)" :content="content" />
    <UserComment :data="commData" />
</template>

<script setup>
import BlessCard from "@/components/BlessCard.vue"
import { generateAvator } from "@/utils/avator"
import UserComment from "@/components/UserComment.vue"
import RandomCard from "@/components/RandomCard.vue";
import { ref } from "vue"

import axios from 'axios';
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
const content = ref("")
const usrName = ref("")



axios.get("http://api.godreams.cn/getRom?id=1").then(d => {
    d = JSON.parse(d.data.data)
    console.log(d);
    content.value = d.wish;
    usrName.value = d.name;
}).catch(e => console.error(e))
</script>

<style>

</style>