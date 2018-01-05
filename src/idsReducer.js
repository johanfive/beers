
const ids = (state = [], action) => {
    switch (action.type) {
        case 'GET_BEER':
            return [...state, action.id];
        default:
            return state;
    }
};

export default ids;
