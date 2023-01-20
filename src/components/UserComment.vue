<template>
    <div>
        <div class="comment-container">
            <div style="height:100%; padding: 0 10px;">
                <div class="item-container">
                    <CommentItem v-for="item in data" :key="item.id" :data-item="item"></CommentItem>
                </div>
                <div class="comment-input">
                    <div class="input-style" id="comment" contenteditable :class="{ shakeX: shake[0].value }"></div>
                    <div style="display: flex;justify-content: space-around;">
                        <div>
                            <label for="name" class="label-text">昵称</label>
                            <input class="input-style" :class="{ shakeX: shake[1].value }" type="text" name="name"
                                id="name">
                        </div>
                        <button class="button" @click="submit">发表评论</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CommentItem from "@/components/widgets/CommentItem.vue"
import { ref, onMounted } from "vue";
import { postComments } from "@/utils/axios.js"
defineProps(['data'])

const shake = [ref(false), ref(false)]

let commentN;
let nameN;

function valid() {
    let flag = true;
    if (commentN.textContent == "") {
        shake[0].value = true;
        setTimeout(() => {
            shake[0].value = false;
        }, 1000);
        flag = false;
    }
    if (nameN.value == "") {
        shake[1].value = true;
        setTimeout(() => {
            shake[1].value = false;
        }, 1000);
        flag = false;
    }
    return flag;
}

function submit() {
    if (valid()) {
        postComments(15, nameN.value, commentN.textContent).then(d => console.log(d)).catch(e=>console.log(e))
    }
}
onMounted(() => {
    commentN = document.getElementById('comment');
    nameN = document.getElementById('name');
})

</script>

<style scoped>
.comment-container {
    width: 100%;
    border-radius: 20px;
    padding-top: 10px;
    padding-bottom: 10px;

    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .25);
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)
}

.item-container {
    height: 400px;
    overflow: scroll;
    border-bottom: 2px solid rgba(59, 59, 59, 0.322);
    z-index: 10;
}

.item-container::-webkit-scrollbar {
    display: none;
}

.comment-input {
    display: flex;
    flex-direction: column;
}

#comment {
    background-color: #fff;
    margin: 5px 30px;

}

.input-style {
    font-size: 18px;
    padding: 5px 8px;
    border-radius: 10px;
}

.comment-input .label-text {
    font-size: 20px;
}

#name {
    margin: 0 5px;
    border: none;
    width: 100px;
}

.comment-input .button {
    outline: none;
    border: none;
    background-color: #e95863;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 18px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .25);
    color: white;
}

@keyframes shakeX {

    from,
    to {
        transform: translate3d(0, 0, 0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        transform: translate3d(-5px, 0, 0);
    }

    20%,
    40%,
    60%,
    80% {
        transform: translate3d(5px, 0, 0);
    }
}

.shakeX {
    animation: shakeX;
    animation-duration: .8s;
}
</style>