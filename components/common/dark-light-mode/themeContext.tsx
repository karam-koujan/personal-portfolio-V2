import React from 'react';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

   return 'light' // light theme as the default;
};
interface ThemeContextI {
    theme:string;
    setTheme : React.Dispatch<React.SetStateAction<string>>|any
}
interface ThemeProviderI{
    initialTheme:string;
    children:React.ReactNode;
}
export const ThemeContext:React.Context<ThemeContextI> = React.createContext({theme:"light",setTheme:()=>undefined});

export const ThemeProvider = ({ initialTheme, children }:ThemeProviderI) => {
    const [theme, setTheme] = React.useState(getInitialTheme);

    const rawSetTheme = (rawTheme:string) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';


        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }

    React.useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export const useThemeContext = ()=>{
	const {theme,setTheme} = React.useContext(ThemeContext)
        return {theme,setTheme}	
}

