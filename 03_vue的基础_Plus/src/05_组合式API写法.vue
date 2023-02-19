<script setup>
    // 导入响应式对象方法
    import { reactive } from 'vue';

    const msg = "hhh"
    const count = 0
    
    // 创建响应式对象
    const stu = reactive({
        name:"rk"
    })

    function fn(){
        alert("ohhhhhh")
    }

</script>

<template>
    <h1 @click="fn">组合式API</h1>
    <h2>{{ msg }} -- {{ count }}</h2>
</template>