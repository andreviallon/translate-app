import React, { createContext, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export type ThemeContextType = {
    theme: Theme;
    getTheme?: () => void;
    setTheme?: () => void;
}

const initialState = {
    theme: Theme.DARK
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export const ThemeStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState);

    function getTheme() {
        dispatch({
            type: "GET_THEME",
        });
    }

    function setTheme() {
        const newTheme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        dispatch({
            type: "SET_THEME",
            payload: newTheme,
        });
    }

    return (
        <ThemeContext.Provider
            value={{ theme: state.theme, getTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
