<script setup>
    // 导入响应式对象方法
    import { reactive, ref } from 'vue';

    /*
        reactive()
            - 返回一个对象的响应式代理
            - 返回的是一个深层的响应式对象
            - 也可以使用shallowReactive()创建一个浅层的响应式对象
            - 缺点：
            - 只能返回对象的响应式代理

        ref()
            - 接受一个任意值，并返回它的响应式代理
    */

    // 创建响应式对象
    const stu = reactive({
        name:"rk"
    })

    // ref在生成响应式代理时，它是将值包装为一个对象 0 --> {value:0}
    // 访问ref对象时，必须通过 对象.value 来访问其中的值
    // 在模板中，ref对象会被自动解包
    let count = ref(0)  // 生成一个0的响应式代理

    // count = 10 改变量只会影响到变量自己，在js中，无法实现对一个变量的代理
    // console.log(count.value)

    // vue给我们提供了一个语法糖，使得ref对象在script标签中也可以自动解包
    // $是一个实验性的，需要在vite中进行一些配置 reactivityTransform:true
    function fn(){
        // count自增
        count.value++
    }

</script>

<template>
    <h1>组合式API</h1>
    <h2 @click="fn">{{ count }}</h2>
</template>