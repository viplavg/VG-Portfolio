import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme) return savedTheme;

    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark":"light";
}

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(()=>{
        document.documentElement.setAttribute(
            "data-theme",
            theme
        );
        localStorage.setItem("theme", theme);
    },[theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    }

    const value = {theme, toggleTheme};

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;