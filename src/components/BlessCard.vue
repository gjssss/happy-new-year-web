<template>
    <div>
        <div class="bless-card">
            <div class="wapper-hidder">
                <div class="wapper">
                    <div class="main">
                        <div class="avator">
                            <img :src="avator" alt="avator">
                        </div>
                        <div class="content">
                            {{ content }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="deco">
                <div class="pao">
                    <div class="dot" />
                    <img src="@/assets/鞭炮.png" class="pao-img" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

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
    background-color: #ed5a65;
    border-radius: 20px 8px 20px 8px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .25);
}

.wapper-hidder {
    border-radius: 20px;
    overflow: hidden;
}

.wapper {
    width: 100%;
    height: 100%;
    background-image: url("http://zhongguose.com/img/texture.png");
    z-index: 9;
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

.deco {
    position: absolute;
    width: 80vw;
    max-width: 420px;
    transform: translateY(-100%);
}

.pao {
    width:50px;
    float: right;
    transform: translateX(25px);
}

.pao .dot {
    border-radius: 50%;
    width: 3px;
    height: 3px;
    background-color: #fff;
    position: relative;
    left: 7px;
    top: 7px;
}

.pao .pao-img {
    width: 50px;
}
</style>