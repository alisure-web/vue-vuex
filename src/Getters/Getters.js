
var Vue = require("vue");
var Vuex = require("vuex");

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        numbers: [
            {id: 1, text: "111", number: 10},
            {id: 2, text: "222", number: 15},
            {id: 3, text: "333", number: 18},
            {id: 4, text: "444", number: 19},
            {id: 5, text: "555", number: 6},
            {id: 6, text: "666", number: 3},
            {id: 7, text: "777", number: 1},
            {id: 8, text: "888", number: 12}
        ]
    },
    /* 可以认为是 store 的计算属性 */
    getters: {
        /* Getters 接受 state 作为其第一个参数 */
        greaterThan: state => {
            return state.numbers.filter(number => number.number > 10);
        },
        /* Getters 也可以接受其他 getters 作为第二个参数 */
        greaterThanCounter: (state, getters) => {
            return getters.greaterThan.length;
        }
    }
});

/* Getters 会暴露为 store.getters 对象 */
console.log(store.getters.greaterThan[0].id);
console.log(store.getters.greaterThan[0].text);
console.log(store.getters.greaterThan[0].number);

console.log(store.getters.greaterThanCounter);