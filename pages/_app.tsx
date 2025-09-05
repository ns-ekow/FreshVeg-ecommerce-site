import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Providers } from '@/lib/providers'
import { CartProvider } from '@/contexts/CartContext'
import { ErrorBoundary } from '@/components/ErrorBoundary'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <SessionProvider session={pageProps.session}>
        <Providers>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </Providers>
      </SessionProvider>
    </ErrorBoundary>
  )
}

export default MyApp
