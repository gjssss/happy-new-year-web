<template>
    <div class="comment-container">
        <div style="padding:10px 10px">
            <CommentItem v-for="item in data" :key="item.id" :data-item="item"></CommentItem>
        </div>
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
    border-radius: 20px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    padding: 10px 0px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .25);
    margin-top: 20px;
    overflow: scroll;
    scrollbar-width: none;
}
.comment-container::-webkit-scrollbar{
    display: none;
}
</style>