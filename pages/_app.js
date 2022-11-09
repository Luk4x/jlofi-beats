import { GlobalStyles } from '../src/components/GlobalStyles';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}
