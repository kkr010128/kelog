import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"

import Head from 'next/head'

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>
          <Head>
            <meta name="google-site-verification" content="rnyVBPK-KqC4bRK_La_EtOk25IocDxB7ZC1zuOBM69E" />
            </Head>
          {getLayout(<Component {...pageProps} />)}
        </RootLayout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
