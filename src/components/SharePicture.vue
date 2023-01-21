<template>
    <div class="pic-mask" v-if="store.state.isMask">
        <div class="loading" v-if="loading">Loading...</div>
        <img class="pic" :src="url" v-if="!loading">
        <div class="share">长按图片保存分享</div>
    </div>
    <button class="button pic-show-button" @click="loadPic" v-if="!store.state.isMask"><i
            class="iconfont icon-fenxiang"></i></button>
    <button class="button pic-close-button" @click="unloadPic" v-if="store.state.isMask"><i
            class="iconfont icon-guanbixiao"></i></button>

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

<style>
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
    background-color: #FF9966;
    margin: 10px 10px;
    padding: 8px 8px;

    outline: none;
    border: none;

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
    background-color: transparent;
}

@font-face {
    font-family: "iconfont";
    /* Project id 3868376 */
    src: url('//at.alicdn.com/t/c/font_3868376_c1rce9spz3c.woff2?t=1674283116546') format('woff2'),
        url('//at.alicdn.com/t/c/font_3868376_c1rce9spz3c.woff?t=1674283116546') format('woff'),
        url('//at.alicdn.com/t/c/font_3868376_c1rce9spz3c.ttf?t=1674283116546') format('truetype');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 24px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-fenxiang:before {
    content: "\e739";
}

.icon-guanbixiao:before {
    content: "\e8bb";
    font-size: 30px;
}

.share {
    color: white;
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
}
</style>