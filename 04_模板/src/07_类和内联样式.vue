<script setup>
    const arr = ["box1", "box2", "box3"]
    const arr2 = [{box1:true}, {box2:false}, {box3:true}]
    const style = {
        color: "red",
        backgroundColor: "#bfa"
    }
</script>
<template>
    <h1 class="header">hhhh</h1>
    <div :class="arr" :style="style">aaa</div>
</template>
<style scoped>
    .header {
        background-color: yellowgreen;
    }
</style>