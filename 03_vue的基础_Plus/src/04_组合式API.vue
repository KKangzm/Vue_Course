<script>
import { reactive } from 'vue'

    export default {

        // setup是一个钩子函数，可以通过这个函数向外部暴露组件的配置
        setup()
        {
            // 定义变量
            // 在组合式api中直接声明的变量，就是一个普通的变量，不是响应式属性
            //      -修改这些属性时，不会在视图中产生效果
            let msg = "hhh"
            let count = 0

            // 可以通过 reactive()来创建一个响应式的对象
            const stu = reactive({
                name:"hhh",
                age:17,
                gender:"nan"
            })

            function changeAge(){
                stu.age = 77
            }

            // 在setup()中可以通过返回值来指定哪些内容要暴露给外部
            // 暴露后的内容，可以直接在模板中使用
            return {
                msg,
                count,
                stu,
                changeAge
            }
        }
    }
</script>

<template>
    <h1>演示组合式API</h1>
    <h2>{{ msg }}</h2>
    <button @click="changeAge">Click</button>
    <h2>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h2>
</template>