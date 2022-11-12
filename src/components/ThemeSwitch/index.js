import { useContext } from 'react';
import { ThemeModeContext } from '../ThemeMode';
import { StyledSwitch } from './styles';

export default function ThemeSwitch() {
    const themeContext = useContext(ThemeModeContext);

    return (
        <StyledSwitch>
            <input
                id="darkmode"
                type="checkbox"
                onChange={() => {
                    if (themeContext.mode === 'dark') themeContext.setMode('light');
                    if (themeContext.mode === 'light') themeContext.setMode('dark');
                }}
            />
            <label htmlFor="darkmode" className="darkmode-switch">
                <span>🌙</span>
                <span>☀️</span>
            </label>
        </StyledSwitch>
    );
}
