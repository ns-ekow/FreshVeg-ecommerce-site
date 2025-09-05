import Image from 'next/image'
import { Button } from '@/components/ui/button'
import heroImage from '@/public/FreshVegs/Image.png'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-green-600 uppercase tracking-wide">
              Welcome to FreshVegs
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fresh & Healthy
              <span className="block text-green-600">Organic Food</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Free shipping on all your orders. We deliver fresh, quality vegetables
              right to your doorstep.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Shop Now →
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src={heroImage}
                alt="Fresh organic vegetables and fruits"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}