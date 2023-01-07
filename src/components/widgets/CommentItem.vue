<template>
    <div class="comment-item">
        <div class="header">
            <img :src="'https://avatars.dicebear.com/api/micah/' + data.name + '.svg?mouth=smile&eyebrows=up'" alt="头像">
        </div>
        <div class="bubble" />
        <div class="content">
            <p>{{ data.content }}</p>
        </div>
    </div>
</template>

<script setup>

defineProps(['data'])

</script>

<style scoped>
.comment-item {
    width: 90%;
    margin: 10px 0;
}

.comment-item .header {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid white;
    background-color: #fff;
}

.comment-item .content {
    background-color: #fff;
    padding: 5px;
    border-radius: 20px;
}

.comment-item .bubble {
    position: relative;
    border-top: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
    border-left: 8px solid transparent;
    width: 0;
    height: 0;
    left: 25px;
}
</style>