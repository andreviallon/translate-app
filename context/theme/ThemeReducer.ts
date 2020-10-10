const ThemeReducer = (state, action) => {
    switch (action.type) {
        case "SET_INIT_THEME":
            return {
                ...state,
                theme: action.payload
            }
        case "SET_THEME":
            return {
                ...state,
                theme: action.payload
            };
        default:
            return state;
    }
};

export default ThemeReducer
