<template>
    <div class="comment-item">
        <div class="header">
            <img :src="generateAvator(dataItem.name)" alt="头像">
        </div>
        <div class="bubble" />
        <div class="content">
            <p>{{ dataItem.content }}</p>
        </div>
    </div>
</template>

<script setup>

import { generateAvator } from "@/utils/avator.js"
defineProps(['data-item'])

</script>

<style scoped>
.comment-item {
    width: 100%;
    margin: 10px 0;
    display: flex;
}

.comment-item .header {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid white;
    background-color: #fff;
}

.comment-item .content {
    background-color: #fff;
    padding: 10px;
    border-radius: 20px;
    max-width: 260px;
}

.comment-item .bubble {
    position: relative;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid white;
    border-left: 6px solid transparent;
    width: 0;
    height: 0;
    left: 2px;
    top: 17px;
}
</style>