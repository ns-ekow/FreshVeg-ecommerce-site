import Image from 'next/image'
import delivery from '@/public/FreshVegs/delivery.png'
import service from '@/public/FreshVegs/service.png'
import box from '@/public/FreshVegs/box.png'
import bag from '@/public/FreshVegs/shopping-bag.png'

const features = [
  {
    icon: delivery,
    title: 'Free Shipping',
    description: 'Free shipping with discount',
    alt: 'Delivery truck icon'
  },
  {
    icon: service,
    title: 'Great Support',
    description: 'Instant access to Contact',
    alt: 'Customer service icon'
  },
  {
    icon: bag,
    title: '100% Secure Payment',
    description: 'We ensure your money is safe',
    alt: 'Secure payment icon'
  },
  {
    icon: box,
    title: 'Money-Back Guarantee',
    description: '30 days money-back guarantee',
    alt: 'Money back guarantee icon'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-16 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}