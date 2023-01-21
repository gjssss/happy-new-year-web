<template>
    <div>
        <RandomTitle></RandomTitle>
        <div>
            <div class="random-card">
                <div class="wapper-hidder">
                    <div class="wapper">
                        <div class="main">
                            <div class="content" @click="nextWish">
                                {{ content }}
                            </div>
                            <div class="avator" @click="jumpRandom">
                                <img :src="avator" alt="avator">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tip">
                <span>
                    点击左侧切换下一跳祝福
                </span>
            </div>
            <div class="tip">
                <span>
                    点击头像看看他的祝福
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import RandomTitle from './widgets/RandomTitle.vue';
import { useStore } from "vuex";
import { getRandomWish } from '@/utils/axios';

const store = useStore();
const routeData =

    defineProps({
        content: {
            type: String,
            default() { return "新年快乐" }
        },
        avator: {
            type: String,
            default() { return "https://api.dicebear.com/5.x/micah/svg?seed=gjs&eyebrows=up,eyelashesUp&mouth=pucker,laughing,smile,smirk,surprised,nervous" }
        }
    })

function nextWish() {
    getRandomWish(store.state.userInfo.id).then(d => {
        d = JSON.parse(d.data.data)
        store.commit('setRandomInfo', {
            id: d.id,
            name: d.name,
            content: d.wish + "  ——来自" + d.area + "的" + d.name
        })
    }).catch(e => console.error(e))
}

function jumpRandom() {
    location.replace("/#/?id="+store.state.randomInfo.id)
    location.reload()
}
</script>

<style>
.random-card {
    width: 100%;
    background-color: #eea2a4;
    border-radius: 20px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .25);
}

.random-card .main {
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.random-card .main .avator {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
    padding: 3px;
}

.random-card .main .content {
    width: 200px;
    color: #fff;
    text-indent: 2em;
    margin-right: 5px;
    font-size: 17px;
}

.tip {
    text-align: center;
    font-size: small;
    color: #5f5f5f;
}
</style>