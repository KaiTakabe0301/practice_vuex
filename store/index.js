import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const createStore = () => {
    return new Vuex.Store({
        state: function(){
            return {
                message: 'This is store message!',
                counter: 0
            }
        },
        mutations: {
            count: function (state,n) {
                state.counter += n;
            },
            say: function (state,msg) {
                state.message = msg;
            },
            reset: function (state) {
                state.counter = 0;
                state.message='reset now ...'
            },
            doit: function (state) {
                let n = Math.floor(Math.random() * 10);
                state.counter+=n
                state.message = "add " + n + '.';
            }
        },
        plugins: [
            createPersistedState(),
        ]
    })
}

export default createStore
