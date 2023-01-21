<template>
    <SharePicture />
    <BlessCard :avator="$store.state.userInfo.url" :content="$store.state.userInfo.content" />
    <RandomCard :avator="generateAvator($store.state.randomInfo.name)" :content="$store.state.randomInfo.content" />
    <UserComment :data="$store.state.commentArr" />
</template>

<script setup>
import BlessCard from "@/components/BlessCard.vue"
import { generateAvator } from "@/utils/avator"
import UserComment from "@/components/UserComment.vue"
import RandomCard from "@/components/RandomCard.vue";
import SharePicture from "@/components/SharePicture.vue";
import { useStore } from "vuex";
import { getWish, getRandomWish, getComments } from "@/utils/axios.js"
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

getWish(route.query.id).then(d => {
    d = JSON.parse(d.data.data)
    store.commit('setUserInfo', {
        id: route.query.id,
        name: d.name,
        content: d.wish,
        url: generateAvator(d.name)
    })

}).catch(e => console.error(e))

getRandomWish(route.query.id).then(d => {
    d = JSON.parse(d.data.data)
    store.commit('setRandomInfo', {
        name: d.name,
        content: d.wish + "  ——来自" + d.area + "的" + d.name
    })
}).catch(e => console.error(e))

getComments(route.query.id).then(d => {
    store.commit('setComments', d.data.data);
})

</script>