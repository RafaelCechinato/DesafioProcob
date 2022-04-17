
const initial_value = [];

function rootReducer(state = initial_value, action) {
    switch (action.type) {
        case "ADD_Favorite":
            return [...state, action.item];
    
        default:
            return state;
    }
}

export default rootReducer