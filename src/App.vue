<template>
  <div class="background">
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<script setup>


</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 80vw;
  max-width: 420px;
  margin: auto;
  z-index: 0;
}

.container>div {
  padding-top: 20px;
}

.background {
  background-image: linear-gradient(0deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
  width: 100vw;
  min-height: 100vh;
}
</style>