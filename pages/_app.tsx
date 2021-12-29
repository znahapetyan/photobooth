import type { AppProps } from 'next/app';

import { ImagesContextProvider } from '../context/Images';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ImagesContextProvider>
            <Component {...pageProps} />
        </ImagesContextProvider>
    );
}

export default MyApp;
