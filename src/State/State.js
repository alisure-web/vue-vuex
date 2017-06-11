
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state){
            state.count ++ ;
            console.log(state.count);
        },
        decrement (state){
            state.count -- ;
            console.log(state.count);
        }
    }
});

store.commit("increment");
store.commit("decrement");
