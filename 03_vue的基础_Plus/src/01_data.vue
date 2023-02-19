<script>

    import MyButton from './components/MyButton.vue';
    import { ShallowReactive } from 'vue';

    export default {
        data(){
            // data返回的对象最终会被Vue代理
            // this.$data.xxx = "xxx" 动态添加响应式数据（不建议这么做）
            // 建议将那些暂时没有使用到的属性，添加到data返回的对象中，值可以设置为null
            return {
                msg:"hhhhh",

                // vue在构建响应式对象时，会同时将对象中的属性也做成响应式属性
                // 深层响应式对象
                stu:{
                    name:"rk",
                    age:17,
                    gender:"nan",
                    friend:{
                        name:"lwc"
                    }
                },
                hello:null
            }

            // 有些场景下，可以通过shallowReactive()来创建一个浅层的响应式对象
            // return shallowReactive({
            //     msg:"lelelele",
            //     stu:{
            //         name:"rk",
            //         age:17,
            //         gender:"nan",
            //         friend:{
            //             name:"lwc"
            //         }
            //     }
            // })
        },

        components:{
            MyButton
        }
    }
    
</script>

<template>
    <h1>{{ msg }}</h1>

    <h2>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h2>
    <h3>{{ stu.friend.name }}</h3>

    <hr>
    <MyButton></MyButton>
    <MyButton></MyButton>
</template>