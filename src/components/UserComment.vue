<template>
    <div class="comment-container">
        <CommentItem v-for="item in data" :key="item.id" :data-item="item"></CommentItem>
    </div>
</template>

<script setup>
import CommentItem from "@/components/widgets/CommentItem.vue"
defineProps(['data'])
</script>

<style scoped>
.comment-container {
    width: 100%;
    height: 400px;
    border-radius: 10px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    padding: 10px 5px;
    box-shadow: 1px 2px 10px #267a54;
    margin-top: 20px;
    overflow: scroll;
    scrollbar-width: none;
}
.comment-container::-webkit-scrollbar{
    display: none;
}
</style>