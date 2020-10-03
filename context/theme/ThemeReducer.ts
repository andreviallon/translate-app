const ThemeReducer = (state, action) => {
    switch (action.type) {
        case "GET_THEME":
            return state.theme;
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
