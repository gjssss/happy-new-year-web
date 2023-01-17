<template>
    <div>
        <RandomTitle></RandomTitle>
        <div>
            <div class="bless-card">
                <div class="main">
                    <div class="content">
                        {{ content }}
                    </div>
                    <div class="avator">
                        <img :src="avator" alt="avator">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import RandomTitle from './widgets/RandomTitle.vue';

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
</script>

<style>
.bless-card {
    width: 100%;
    background-color: #dc7474;
    border-radius: 20px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .25);
}

.bless-card .main {
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.main .avator {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
    padding: 3px;
}

.main .content {
    width: 200px;
    color: #fff;
    text-indent: 2em;
    margin-right: 5px;
    font-size: 17px;
}
</style>