import { createContext, useState } from 'react';

export const ThemeModeContext = createContext({
    mode: 'dark',
    setMode: () => console.log('me configura')
});

export function ThemeModeProvider({ children, initialMode }) {
    const [mode, setMode] = useState(initialMode);

    return (
        <ThemeModeContext.Provider value={{ mode, setMode }}>{children}</ThemeModeContext.Provider>
    );
}
