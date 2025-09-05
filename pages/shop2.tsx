import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import ShopCard from '@/components/ui/shopcard'
import { useProducts } from '@/hooks/useProducts'
import { ProductGridSkeleton } from '@/components/ui/skeleton'
import { useCart } from '@/contexts/CartContext'

const Shop2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('latest')
  const { data: products, isLoading, error } = useProducts()
  const { addItem } = useCart()

  const categories = ['All', 'Vegetable', 'Fruit', 'Meat & Fish']

  const filteredProducts = products?.filter(product =>
    selectedCategory === 'All' || product.category.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0])
  ) || []

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  })

  //@ts-ignore
  const handleAddToCart = (product: any) => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    })
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-8 text-center">
            <p className="text-green-100 text-sm font-medium uppercase tracking-wide mb-2">
              BEST DEALS
            </p>
            <h1 className="text-3xl font-bold mb-4">Sale of the Month</h1>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">00</div>
                <div className="text-sm">DAYS</div>
              </div>
              <span className="text-2xl">:</span>
              <div className="text-center">
                <div className="text-2xl font-bold">00</div>
                <div className="text-sm">HOURS</div>
              </div>
              <span className="text-2xl">:</span>
              <div className="text-center">
                <div className="text-2xl font-bold">00</div>
                <div className="text-sm">MINS</div>
              </div>
              <span className="text-2xl">:</span>
              <div className="text-center">
                <div className="text-2xl font-bold">00</div>
                <div className="text-sm">SECS</div>
              </div>
            </div>
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Shop Now →
            </Button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Price Range</option>
                  <option>GHC 0 - 50</option>
                  <option>GHC 50 - 100</option>
                  <option>GHC 100+</option>
                </select>

                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Rating</option>
                  <option>4+ Stars</option>
                  <option>3+ Stars</option>
                  <option>2+ Stars</option>
                </select>
              </div>

              <div className="flex justify-end gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="latest">Sort by: Latest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>

                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Show: 16</option>
                  <option>Show: 32</option>
                  <option>Show: 48</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Active Filters:</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  Wing Chair
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  Min GHC300 - Max 500
                </span>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">
                  {sortedProducts.length}
                </span>{' '}
                Results found
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <ProductGridSkeleton />
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">Failed to load products. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <ShopCard
                  key={product.id}
                  productName={product.name}
                  image={product.image || '/FreshVegs/aubergine.png'}
                  price={product.price}
                  stars={4}
                />
              ))}
            </div>
          )}

          {sortedProducts.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <p className="text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}






export default Shop2;