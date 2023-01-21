<template>
    <div class="pic-mask" v-if="store.state.isMask">
        <div class="loading" v-if="loading">Loading...</div>
        <img class="pic" :src="url" v-if="!loading">
    </div>
    <button class="button pic-show-button" @click="loadPic" v-if="!store.state.isMask">分享图片</button>
    <button class="button pic-close-button" @click="unloadPic" v-if="store.state.isMask">关闭</button>
</template>

<script setup>
import { ref } from 'vue';
import { load } from '@/utils/loadPicture';
import { useStore } from 'vuex';

const store = useStore();
const loading = ref(false);
const url = ref("");

function loadPic() {
    store.commit('swicthMask');
    load(store.state.userInfo.name, store.state.userInfo.content, store.state.userInfo.id).then(
        data => {
            loading.value = false;
            url.value = data;
        }
    )
}
function unloadPic() {
    store.commit('swicthMask');
    loading.value = true;
}
</script>

<style scoped>
.pic-mask {
    background-color: hsla(0, 0%, 7%, .65);
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
}

.pic-mask .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: white;
    font-size: 2rem;
    font-weight: bolder;
}

.pic-mask .pic {
    max-height: 90%;
    max-width: 85%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.button {
    background-color: #409eff;
    margin: 10px 10px;
    padding: 5px 10px;

    outline: none;
    border: none;

    font-size: 1.1rem;
    color: white;

    border-radius: 5px;
}

.button:active {
    background-color: #083869;
}

.pic-show-button {
    position: absolute;
    right: 0;
    top: 0;
}

.pic-close-button {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
}
</style>