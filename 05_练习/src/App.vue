<script setup>
    import {ref, reactive} from "vue"
    import TabItem from "./components/TabItem.vue"

    // 创建一个变量来记录选项卡的状态
    const current = ref(0)  // 0 表示吃的， 1 表示用的

    // const food = reactive({
    //     name: "蛋糕甜品",
    //     img: "/images/蛋糕甜品.png",
    //     rate: 1,
    //     hot: 300
    // })

    // const goods = reactive({
    //     name: "个护清洁",
    //     img: "/images/个护清洁.png",
    //     rate: 1,
    //     hot: 200
    // })

    const foods = reactive([
        {
            name: "蛋糕甜品",
            img: "/images/蛋糕甜品.png",
            rate: 1,
            hot: 600
        },
        {
            name: "烤肉",
            img: "/images/烤肉.png",
            rate: 2,
            hot: 300
        },
        {
            name: "小吃",
            img: "/images/小吃.png",
            rate: 3,
            hot: 100
        }
    ])

    const goods = reactive([
        {
            name: "生活家电",
            img: "/images/生活家电.png",
            rate: 1,
            hot: 1000
        },
        {
            name: "母婴亲子",
            img: "/images/母婴亲子.png",
            rate: 2,
            hot: 500
        },
        {
            name: "个护清洁",
            img: "/images/个护清洁.png",
            rate: 3,
            hot: 150
        }
    ])

    // 获取最大热度
    const foodMaxHot = foods[0].hot
    const goodMaxHot = goods[0].hot

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
                    <!-- <TabItem :type="foods[0]" :maxHot="maxHot"></TabItem>
                    <TabItem :type="foods[1]" :maxHot="maxHot"></TabItem>
                    <TabItem :type="foods[2]" :maxHot="maxHot"></TabItem> -->

                    <TabItem 
                        v-for="food in foods"
                        :type="food" 
                        :maxHot="foodMaxHot"
                        ></TabItem>

                </div>
            </div>
            <div v-show="current === 1">
                <!-- 用的 -->
                <div class="tab-list">
                    <TabItem 
                        v-for="good in goods"
                        :type="good"
                        :maxHot="goodMaxHot"
                        ></TabItem>
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