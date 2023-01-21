<template>
    <div class="title-container">
        <div class="title-img">
            <div class="title">随机祝福</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.title-container {
    width: 100%;
}

.title-img {
    width: 200px;
    height: 55px;
    margin: auto;
    background-image: url("@/assets/biaoti.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}
.title-img .title{
    height: 85%;
    display:flex;
    justify-content:center;
    align-items:center;

    color: #ffe706;
    font-size: 1.2em;
    font-weight: bold;
}
</style>