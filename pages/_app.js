import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from "@/lib/auth";
import theme from '@/styles/theme';
import Head from 'next/head';
import { Global, css } from '@emotion/react';

const GlobalStyle = ({ children }) => {
   return (
      <>
         <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
         </Head>
         <CSSReset />
         <Global
            styles={css`
           html {
             scroll-behavior: smooth;
           }
 
           #__next {
             display: flex;
             flex-direction: column;
             min-height: 100vh;
           }
         `}
         />
         {children}
      </>
   );
};

export default function App({ Component, pageProps }) {
   return (
      <ChakraProvider theme={theme}>
         <AuthProvider>
            {/* <GlobalStyle /> */}
            <Component {...pageProps} />
         </AuthProvider>
      </ChakraProvider>
   );
};