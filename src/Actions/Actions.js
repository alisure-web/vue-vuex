/**
 *Action 类似于 mutation，不同在于：
 *      1.Action 提交的是 mutation，而不是直接变更状态。
 *      2.Action 可以包含任意异步操作。
 * */
var Vue = require("vue");
var Vuex = require("vuex");

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: function (state) {
            state.count ++;
        },
        incrementPayload: function (state, payload) {
            state.count += payload.amount;
        }
    },
    /**
     * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
     * 因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state
     * 和 context.getters 来获取 state 和 getters。
     * */
    actions: {
        increment1 (context) {
            context.commit("increment");
            console.log(store.state.count + " increment1");
        },
        /* 参数解构 */
        increment2 ({ commit }) {
            commit("increment");
            console.log(store.state.count + " increment2");
        },
        /* 异步操作 */
        incrementAsync ({ commit }) {
            setTimeout(() => {
                commit("increment");
                console.log(store.state.count + " incrementAsync");
            }, 2000);
        },
        /* Payload */
        incrementPayload ({ commit }, payload) {
            commit("incrementPayload", payload);
            console.log(store.state.count + " incrementPayload");
        },
        /* 组合 Actions */
        incrementPromise ({ commit }){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit("increment");
                    console.log(store.state.count + " incrementPromise");
                    resolve();
                }, 3000);
            });
        },
        incrementPromise2 ({ dispatch, commit }){
            return dispatch("incrementPromise").then(() => {
                commit("increment");
                console.log(store.state.count + " incrementPromise2");
            });
        },
    }
});

/* 分发 Action */
store.dispatch("increment1");
store.dispatch("increment2");

/* 异步 */
store.dispatch("incrementAsync");

/* Payload */
store.dispatch("incrementPayload", {
    amount: 33
});
store.dispatch({
    type: "incrementPayload",
    amount: 55
});

/* 组合 Actions */
/* 先 incrementPromise，后 incrementAsync */
store.dispatch("incrementPromise").then(() => {
    store.dispatch("incrementAsync");
});
/* 先 incrementPromise，后 incrementPromise2 */
store.dispatch("incrementPromise2");