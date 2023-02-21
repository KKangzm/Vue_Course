<script setup>
    /*
        父组件可以通过props来向子组件传递数据
        注意：父组件传递给子组件的props都是只读的，无法修改
            即使可以修改，我们也尽量不要在子组件中去修改父组件的数据
            如果非得要改，可以通过 [自定义事件] 修改
        
        属性名
            - 定义属性名时，属性名要遵循驼峰命名法，或者使用（max-length）
    */

    // 定义props
    // const props = defineProps(["count", "obj", "maxLength"])

    // 组件的完整配置
    const props = defineProps({
        count: Number,
        obj: Object,
        maxLength:{
            type: String,
            required: true,
            default: "hhh",
            validator(value){
                return value !== "aaa"
            }
        }
    })

</script>

<template>
    <div>
        <h2>我是子组件 MyBox {{ props.obj.count }}</h2>
        <button @click="props.obj.count++">MB_Click</button>
        <hr>
    </div>
</template>

<style scoped>
    div {
        color: tomato;
    }
</style>