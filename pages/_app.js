import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/components/GlobalStyles';
import { ThemeModeProvider, ThemeModeContext } from '../src/components/ThemeMode';

const theme = {
    light: {
        backgroundBase: '#f9f9f9',
        backgroundLevel1: '#ffffff',
        backgroundLevel2: '#f0f0f0',
        borderBase: '#e5e5e5',
        textColorBase: '#222222'
    },
    dark: {
        backgroundBase: '#181818',
        backgroundLevel1: '#202020',
        backgroundLevel2: '#313131',
        borderBase: '#383838',
        textColorBase: '#FFFFFF'
    }
};

function ThemeModeProviderWrapper({ children }) {
    return <ThemeModeProvider initialMode={'dark'}>{children}</ThemeModeProvider>;
}

function _AppWrapper({ children }) {
    const themeContext = useContext(ThemeModeContext);

    return <ThemeProvider theme={theme[themeContext.mode]}>{children}</ThemeProvider>;
}

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeModeProviderWrapper>
            <_AppWrapper>
                <GlobalStyles />
                <Component {...pageProps} />
            </_AppWrapper>
        </ThemeModeProviderWrapper>
    );
}
