// import Vue from "vue";
// import Vuex from "vuex";

var Vue = require("vue");
var Vuex = require("vuex");

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
            console.log(state.count);
        },
        decrement(state) {
            state.count--;
            console.log(state.count);
        }
    }
});

store.commit("increment");
store.commit("decrement");

//# sourceMappingURL=myVuex-cmd-compiled.js.map