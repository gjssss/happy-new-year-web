<template>
    <div>
        <div class="comment-container">
            <div style="height:100%; padding: 0 10px;">
                <div class="item-container">
                    <CommentItem v-for="item in data" :key="item.id" :data-item="item"></CommentItem>
                </div>
            </div>
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
    padding: 10px 0;

    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .25);
    background: linear-gradient(315deg, #42d392 25%, #647eff);

}

.item-container {
    height: 100%;
    overflow: scroll;
}

.item-container::-webkit-scrollbar {
    display: none;
}
</style>