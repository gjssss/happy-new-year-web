<template>
    <SharePicture />
    <BlessCard :avator="$store.state.userInfo.url" :content="$store.state.userInfo.content" />
    <RandomCard :avator="generateAvator(usrName)" :content="content" />
    <UserComment :data="commData" />
</template>

<script setup>
import BlessCard from "@/components/BlessCard.vue"
import { generateAvator } from "@/utils/avator"
import UserComment from "@/components/UserComment.vue"
import RandomCard from "@/components/RandomCard.vue";
import SharePicture from "@/components/SharePicture.vue";
import { ref } from "vue"
import { useStore } from "vuex";
import { getWish, getRandomWish, getComments } from "@/utils/axios.js"

const commData = ref([])
const content = ref("");
const usrName = ref("");
const store = useStore();

getWish(15).then(d => {
    d = JSON.parse(d.data.data)
    store.commit('setUserInfo', {
        name: d.name,
        content: d.wish,
        url: generateAvator(d.name)
    })

}).catch(e => console.error(e))

getRandomWish(15).then(d => {
    d = JSON.parse(d.data.data)
    content.value = d.wish + "  ——" + d.name;
    usrName.value = d.name;
}).catch(e => console.error(e))

getComments(15).then(d => {
    console.log(d.data.data);
    commData.value = d.data.data;
})

</script>