<script>

    import MyButton from './components/MyButton.vue';
    import { ShallowReactive } from 'vue';

    export default {
        // data用来指定实例对象中的响应式属性
        data(){
            return {
                msg:"hhhhh"
            }
        },

        /**
            methods 用来指定实例对象中的方法
                - 它是一个对象，可以在它里面定义多个方法
                - 这些方法最终将会被挂载到组件实例上
                - 可以直接通过组件实例来调用这些方法
                - 所有组件实例上的属性都可以在模板中直接访问
                - methods中函数的this会被自动绑定为组件实例
         */
        methods:{
            sum(a, b){
                // console.log(this) // 组件实例 vm
                return a + b
            },

            changeMsg(){
                this.msg = "hei hei hei"
            }
        }
    }
    
</script>

<template>
    <h1>{{ msg }}</h1>
    <h2>{{ sum(2, 3) }}</h2>
    <button @click="changeMsg">点我一下</button>
</template>