import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function () {
            return {
                massage: 'This is store message!'
            }
        }
    })
}

export default createStore
