import React, { createContext, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";
import Cookie from "js-cookie";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export type ThemeContextType = {
    theme: Theme;
    setInitTheme?: () => void;
    setTheme?: () => void;
}

const initialState = {
    theme: Theme.LIGHT
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export const ThemeStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState);

    function setInitTheme() {
        const initTheme = Cookie.get('theme') ? Cookie.get('theme') : Theme.LIGHT;

        dispatch({
            type: "SET_INIT_THEME",
            payload: initTheme,
        });
    }

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
            value={{ theme: state.theme, setInitTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
