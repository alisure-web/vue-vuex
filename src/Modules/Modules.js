
var Vue = require("vue");
var Vuex = require("vuex");

Vue.use(Vuex);

/* 模块A */
const moduleA = {
    state: {
        count: 0
    },
    /* 对于模块内部的 mutation 和 getter，
        接收的第一个参数是模块的局部状态对象。 */
    mutations: {
        /* 这里的 `state` 对象是模块的局部状态 */
        incrementCount (state) {
            state.count ++;
            console.log("count from Module A " + state.count);
        }
    },
    /* 对于模块内部的 action，
        局部状态通过 context.state 暴露出来，
        根节点状态则为 context.rootState.*/
    actions: {
        incrementCount ({ state, commit, rootState }) {
            commit("incrementCount");
            console.log("incrementCount " + state.count);
        }
    },
    /* 对于模块内部的 getter，
        根节点状态会作为第三个参数暴露出来 */
    getters: {
        greaterThan5: (state, getters, rootState) => {
            return state.count > 5;
        }
    }
};

/* 模块B */
const moduleB = {
    state: {
        number: 0
    },
    mutations: {
        incrementNumber (state) {
            state.number ++;
            console.log("count from Module B " + state.number);
        }
    },
    actions: {
        incrementNumber ({ commit }) {
            commit("incrementNumber");
            console.log("incrementNumber");
        }
    }
};

/* Vuex */
const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
});

/* 转发 */
store.dispatch("incrementCount");
store.dispatch("incrementNumber");
store.dispatch("incrementCount");
store.dispatch("incrementNumber");

console.log(store.state.a.count);
console.log(store.state.b.number);
