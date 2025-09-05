'use client'

import { useState } from 'react'
import { useProducts } from '@/hooks/useProducts'
import ShopCard from '@/components/ui/shopcard'
import { ProductGridSkeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'

const categories = ['All', 'Vegetable', 'Fruit', 'Meat & Fish']

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { data: products, isLoading, error } = useProducts()

  const filteredProducts = products?.filter(product =>
    selectedCategory === 'All' || product.category.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0])
  ) || []

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Introducing Our Products
            </h2>
          </div>
          <ProductGridSkeleton />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">Failed to load products. Please try again later.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Introducing Our Products
          </h2>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[120px]"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ShopCard
              key={product.id}
              productName={product.name}
              image={product.image || '/FreshVegs/aubergine.png'}
              price={product.price}
              stars={4} // Default rating for now
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}