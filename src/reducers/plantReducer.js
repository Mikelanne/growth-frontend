export default function plantReducer(state = {plants: []}, action){
    switch (action.type){

        case "GOT_PLANTS":
            return {...state, plants: action.payload}

        default:
            return state
    }
}