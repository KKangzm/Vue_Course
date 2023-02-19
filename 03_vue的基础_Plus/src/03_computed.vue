<script>

    import MyButton from './components/MyButton.vue';
    import { ShallowReactive } from 'vue';

    export default {
        // data用来指定实例对象中的响应式属性
        data(){
            return {
                stu:{
                    name:"hhh",
                    age:17,
                    gender:"nan"
                },
                firstName:"r",
                lastName:"k",
                arr:["z", "m"]
            }
        },

        methods:{
            updateAge(){
                if(this.stu.age == 18){
                    this.stu.age = 17
                }
                else{
                    this.stu.age = 18
                }
            }
        },

        /**
            computed 用来指定计算属性
            {
                属性名:getter
            }
            - 计算属性，只在其依赖的数据发生变化的时候才会重新执行
            - 会对数据进行缓存
         */
        computed:{
            info:function(){
                // 在计算属性的getter中，尽量只做读取相关的逻辑
                // 不要执行那些会产生作用（赋值）的代码
                return this.stu.age >= 18
                ? "你是一个成年人！"
                : "你是一个未成年人！"
            },

            // 计算属性的简写（只有getter时）
            // name(){
            //     return this.lastName + this.firstName
            // }

            // 可以为计算属性设置setter，使得计算属性可写，但是不建议这么做
            name:{
                get(){
                    return this.lastName + this.firstName
                },

                set(value){
                    // set在计算属性被修改时调用
                    this.lastName = value[0]
                    this.firstName = value.slice(1)
                }
            }
        }
    }
    
</script>

<template>
    <h1>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h1>
    <h2>
        <!-- 评语：{{ stu.age >= 18?"你是一个成年人":"你是一个未成年人" }} -->
        评语：{{ info }}
    </h2>
    <button @click="updateAge">减龄</button>
    <hr>
    <!-- <h3>{{ info }}</h3> -->
    <h2>{{ arr[0] }} -- {{ arr[1] }}</h2>
</template>