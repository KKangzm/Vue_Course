//引入组件
import MyButton from "./components/MyButton"

// 创建根组件
export default {

    // 数据
    data(){
        return {
            msg:"我爱vue",
        }
    },

    // 在组件中注册子组件
    components: {
        // MB:MyButton
        my_button:MyButton
    },

    /*
        template是用字符串的形式编写模板
            1.这些字符串会在项目运行时，在浏览器中被编译为js的函数（性能不太好）
            2.在字符串中编写代码，体验很差

        为了解决这个问题，Vue为我们提供了一个单文件组件（SFC）
            - 单文件组件的格式是vue (vscode需要安装插件 Vue Language Features (Volar))
            - vue文件用来编写单文件组件，vue文件本身不能被浏览器识别
                它必须被构建工具打包后，才可以使用
            - 同时vue文件在打包时，构建工具会直接将template转换为函数
                无需再浏览器中编译，性能也会有所提高
    */

   // 视图
    // template: `
    // <h1>{{msg}}</h1>
    // <my_button></my_button>
    // `
}