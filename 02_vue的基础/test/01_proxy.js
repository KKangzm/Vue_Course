/*
如果直接修改对象的属性，那么就仅仅修改了属性，没有去做其他的事情
这种操作只会影响对象自身，不会导致元素的重新渲染

希望在修改一个属性的同时，可以进行一些其他的操作，比如触发元素的重新渲染

要实现这个目的，必须要对对象进行改造，vue3中使用的是代理模式来完成对象的改造
*/

// 创建一个对象
const obj = {
    name: "hhh",
    age: 18
}

// 来为对象创建一个代理
const handler = {} // handler 用来指定代理的行为

// 创建代理
const proxy = new Proxy(obj, handler)

// 修改代理的属性
proxy.age = 28

console.log(obj.age)