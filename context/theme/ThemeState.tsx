import React, { createContext, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";
import Cookie from "js-cookie";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export type ThemeContextType = {
    theme: Theme;
    setTheme?: () => void;
}

const initialState = {
    theme: Cookie.get('theme') ? Cookie.get('theme') : Theme.LIGHT
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export const ThemeStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState);

    function setTheme() {
        const newTheme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

        Cookie.set('theme', newTheme, { secure: true });

        dispatch({
            type: "SET_THEME",
            payload: newTheme,
        });
    }

    return (
        <ThemeContext.Provider
            value={{ theme: state.theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
