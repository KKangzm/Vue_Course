<script setup>
import { ref } from 'vue';
const arr = ref(["aa", "bb", "cc"])

</script>

<template>
    <ul>
        <li v-for="name in arr">{{name}}</li>
    </ul>
</template>