<script setup>
import {ref, computed} from "vue"

const msg = ref("Hello Vue")

// {value: obj}
// obj.value.name（推荐使用这个方法）
const obj = ref({
    name:"rk",
    age:17
})

// obj_2.name.value
const obj_2 = {
    name: ref("rk"),
    age: ref(17)
}
// const{name, age} = obj_2

const changeMagHandler = () => {
    // 修改ref对象时，必须通过value
    msg.value = "hhh"
}

// computed 用来生成计算属性
const newMsg = computed(() => {
    return msg.value + "-lelele"
})

</script>

<template>
    <!-- ref对象在模板中会自动解包（要求ref对象必须是顶层对象） -->
    <h1>{{ msg }}</h1>
    <h1>{{ newMsg }}</h1>
    <h2>{{ obj.name }}</h2>
    <!-- name不是顶层的响应式对象，所以不能自动解包 -->
    <h2>{{ obj_2.name.value }}</h2>
    <hr>
    <h2>{{ obj.age + 1 }}</h2>
    <h2>{{ obj_2.age + 1 }}</h2>
    <button @click="changeMagHandler">Click</button>
</template>