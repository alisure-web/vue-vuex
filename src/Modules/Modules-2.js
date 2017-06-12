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