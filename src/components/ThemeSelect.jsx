import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


export default function ThemeSetter() {
    const { theme, setTheme } = useContext(ThemeContext);
    const themeOptions = [{ value: "light" }, { value: "dark" }, { value: "green" }];

    return (
        <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
            {themeOptions.map((option, idx) => (
                <option value={option.value} key={idx}>
                    {option.value}
                </option>
            ))}
        </select>
    );
}

