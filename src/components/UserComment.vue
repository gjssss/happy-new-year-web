<template>
    <div class="comment-container">
        <CommentItem v-for="item in commData" :key="item.id" :data="item"></CommentItem>
    </div>
</template>
<script setup>
import CommentItem from "@/components/widgets/CommentItem.vue"
const commData = [{
    id: 1,
    name: 'wff',
    content: "喜悦伴着汗水，成功伴着艰辛，遗憾激励奋斗，我们不知不觉地走进了2023年，在新年来临之际，首先我代表信息中心祝各位新年快乐，万事如意!"
}, {
    id: 2,
    name: 'gjs',
    content: "喜悦伴着汗水，成功伴着艰辛，遗憾激励奋斗，我们不知不觉地走进了2023年，在新年来临之际，首先我代表信息中心祝各位新年快乐，万事如意!"
}]
</script>

<style scoped>
.comment-container {
    width: 100%;
    height: 600px;
    border-radius: 10px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    padding: 10px 5px;
    box-shadow: 1px 2px 10px #267a54;
}
</style>