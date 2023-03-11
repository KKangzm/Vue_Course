<script setup>
import { ref } from 'vue';
const arr = ref(["aa", "bb", "cc"])
const arr2 = ref([
    {
        id:1,
        name:"aa",
        age:18
    },
    {
        id:2,
        name:"bb",
        age:28
    },
    {
        id:3,
        name:"cc",
        age:38
    }
])

</script>

<template>
    <button @click="arr.push('dd')">Click</button>
    <button @click="arr2.unshift({id:4, name:ee, age:16})">Click_2</button>
    <ul>
        <li v-for="name in arr">{{name}}</li>
    </ul>

    <ul>
        <li v-for="(name, index) in arr">{{ index }} - {{ name }}</li>
    </ul>

    <div v-for="obj in arr2">{{ obj.name }} -- {{ obj.age }}</div>
    <hr>
    <!-- <template v-for="obj in arr2">{{ obj.name }} -- {{ obj.age }}</template> -->

    <!-- 
        我们在使用v-for遍历时，旧的结构和新的结构是按照顺序进行对比的
        <div>aa</div>
        <div>bb</div>
        <div>cc</div>

        <div>aa</div>
        <div>bb</div>
        <div>cc</div>
        <div>dd</div>

        在使用v-for时，可以为元素指定一个唯一的key
            - 有了key以后，元素在比较时就会按照相同的key去比较而不是顺序
            - key不能使用索引index，一般使用元素自身的属性，例如：id

            <div key=1>aa</div>
            <div key=2>bb</div>
            <div key=3>cc</div>

            <div key=4>dd</div>
            <div key=1>aa</div>
            <div key=2>bb</div>
            <div key=3>cc</div>
     -->
     <ul>
         <li v-for="{id, name, age} in arr2" key="id">
            {{ name }} -- {{ age }}
            <input type="text"/>
        </li>
     </ul>

</template>