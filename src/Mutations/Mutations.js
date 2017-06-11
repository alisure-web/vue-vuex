/*
* 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
* 在 Vuex 中，mutation 都是同步事务。
* */

var Vue = require("vue");
var Vuex = require("vuex");

// 由于需要配置babel和webpack，暂时先这样处理。
// import MutationTypes from "./Mutation-types";
var MutationTypes = {
    Mutation_Test: "mutationTest"
};

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment: function (state) {
            state.count ++;
            console.log(state.count);
        },
        /* 提交载荷（Payload） */
        incrementN: function (state, n) {
            state.count += n;
            console.log(state.count);
        },
        /* 在大多数情况下，载荷应该是一个对象，
            这样可以包含多个字段并且记录的 mutation 会更易读 */
        incrementPayload: function (state, payload) {
            state.count += payload.amount;
            console.log(state.count);
        },
        /* 使用常量替代 Mutation 事件类型 */
        [MutationTypes.Mutation_Test]: function (state) {
            state.count *= state.count;
            console.log(state.count);
        }
    }
});

store.commit("increment");

/* 提交载荷（Payload） */
store.commit("incrementN", 12);
store.commit("incrementPayload", {
    amount: 123
});

/* 对象风格的提交方式 */
store.commit({
    type: "increment"
});
store.commit({
    type: "incrementPayload",
    amount: -123
});

/* 使用常量替代 Mutation 事件类型 */
store.commit({
    type: MutationTypes.Mutation_Test
});