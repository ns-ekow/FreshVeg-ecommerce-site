import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ProductsSection } from '@/components/sections/ProductsSection'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FreshVegs - Fresh & Healthy Organic Food</title>
        <meta name="description" content="FreshVegs delivers fresh, quality vegetables and organic food right to your doorstep in Ghana." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />

      </main>
      <Footer />
    </>
  )
}

export default Home;
