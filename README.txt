Vuex学习

0.配置和安装
    配置IDEA
    安装vue和vuex
    npm init
    npm install vue --save-dev
    npm install vuex --save-dev

1.介绍
    Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
    它采用集中式存储管理应用的所有组件的状态，并以相应
    的规则保证状态以一种可预测的方式发生变化。

    用户界面负责触发动作（Action)，
    进而改变对应状态（State），
    从而反映到视图（View）上。

    Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：
        1.应用层级的状态应该集中到单个 store 对象中。
        2.提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
        3.异步逻辑都应该封装到 action 里面。

2.项目结构
    参考：https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart

3.严格模式
    开启严格模式，仅需在创建 store 的时候传入 strict: true。