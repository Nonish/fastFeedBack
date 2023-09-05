import { ProvideAuth } from "@/lib/auth";

export default function App({ Component, pageProps }) {
   return (
      <ProvideAuth>
         <Component {...pageProps} />
      </ProvideAuth>
   );
};