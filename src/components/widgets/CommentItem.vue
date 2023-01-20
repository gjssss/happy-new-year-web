<template>
    <div class="comment-item">
        <div class="time-container">
            <span class="time">{{ moment(props.dataItem.timestamp * 1000).format("YYYY-M-DD HH:mm") }}</span>
        </div>
        <div style="display:flex">
            <div class="header">
                <img :src="generateAvator(dataItem.name)" alt="头像">
            </div>
            <div class="bubble" />
            <div class="content">
                <p>{{ dataItem.content }}——{{ dataItem.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

import { generateAvator } from "@/utils/avator.js"
import moment from "moment"

const props = defineProps(['data-item'])

</script>

<style scoped>
.comment-item {
    width: 100%;
    margin: 8px 0;
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

.comment-item .time-container {
    text-align: center;
    font-size: smaller;
    color: rgb(220, 220, 220);
    margin-bottom: 8px;
}

.time {
    padding: 1px 5px;
    border-radius: 13px;
    background-color: rgba(90, 85, 85, 0.421);
}
</style>