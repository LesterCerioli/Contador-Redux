const incrementar = {type: 'INCREMENTAR'}
const decrementar = {DECREMENTAR}


const reducer = (state = {contador: 0}, action) => {
    switch (action.type) {
        case 'INCREMENTAR':
            return {contador: state.contador +1}
        case 'DECREMENTAR':
            return {contador: state.contador -1}
        default:
            return state
    }
}

const store = Redux.createStore(reducer)
function log() {
    console.log('Contador: ', store.getStore().contador)
}