
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
    getters: {
        greaterThan: state => {
            return state.numbers.filter(number => number.number > 10);
        },
        greaterThanCounter: (state, getters) => {
            return getters.greaterThan.length;
        }
    }
});
