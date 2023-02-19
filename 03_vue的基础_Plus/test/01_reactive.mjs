import {reactive, ref} from "vue"

const stu = reactive({name:"rk"})
const count = ref(0)    // {value:0}
const person = ref({
    name:"hhh",
    age:17
})

console.log(person.value.name)