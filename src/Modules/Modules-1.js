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