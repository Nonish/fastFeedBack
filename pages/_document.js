import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
   return (
      <Html>
         <Head>
            <link href="../public/favicon.ico" rel="icon" />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
               rel="stylesheet"
            />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com/"
               crossOrigin=""
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   )
}