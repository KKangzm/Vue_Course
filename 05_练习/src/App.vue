<script setup>
    import {ref, reactive} from "vue"
    import TabItem from "./components/TabItem.vue"

    // 创建一个变量来记录选项卡的状态
    const current = ref(0)  // 0 表示吃的， 1 表示用的

    const food = reactive({
        name: "蛋糕甜品",
        img: "/images/蛋糕甜品.png",
        rate: 1,
        price: "300 刀勒"
    })

    const goods = reactive({
        name: "个护清洁",
        img: "/images/个护清洁.png",
        rate: 1,
        price: "200 刀勒"
    })
</script>

<template>
    <!-- 选项卡的外部容器 -->
    <div class="tab-wrapper">
        <!-- 选项卡的头部 -->
        <header class="tab-head">
            <div
                @click="current = 0"
                class="tab-button" 
                :class="{active: current === 0 }">吃的</div>
            <div
                @click="current = 1"
                class="tab-button" 
                :class="{active: current === 1 }">用的</div>
        </header>
        <!-- 选项卡的主体 -->
        <div class="main">
            <!-- 
                current === 0 显示吃的
                current === 1 显示用的
                    v-show 指令，用来设置一个内容是否显示
                    - v-show 是通过display来设置是否显示一个元素
             -->
            <div v-show="current === 0">
                <!-- 吃的 -->
                <div class="tab-list">
                    <TabItem :item="food"></TabItem>
                </div>
            </div>
            <div v-show="current === 1">
                <!-- 用的 -->
                <div class="tab-list">
                    <TabItem :item="goods"></TabItem>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tab-wrapper {
    box-sizing: border-box;
    width: 800px;
    padding: 20px;
    background-color: rgb(45, 83, 211);
}

.tab-head {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
}

.tab-button {
    background-color: #fff;
    font-size: 30px;
    padding: 10px 0;
    text-align: center;
    flex: auto;

    cursor: pointer;
    transition: 0.5s;
}
.tab-button:not(.active):hover {
    color: rgb(187, 3, 52);
}

.active {
    background-color: rgb(187, 3, 52);
    color: #fff;
}

.tab-list {
    margin: 20px;
}
</style>