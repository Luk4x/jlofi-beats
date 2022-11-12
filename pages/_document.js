import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="pt-br">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="https://raw.githubusercontent.com/Luk4x/user-register-interface/main/public/favicon.ico"
                />
                <meta name="author" content="Lucas Maciel (luk4xm4ci3l@gmail.com)" />
                <meta
                    name="keywords"
                    content="HTML, CSS, Javascript, JS, nextjs, react, styled-components, nodejs, npm, alura, imersaoreact, JLofi-Beats"
                />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />
                <meta property="og:title" content="JLofi" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
                <title>JLofi</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
