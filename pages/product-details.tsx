import { useState } from 'react'
import { useRouter } from 'next/router'
import { useProducts } from '@/hooks/useProducts'
import { useCart } from '@/contexts/CartContext'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ShopCard from '@/components/ui/shopcard'
import { Minus, Plus, ShoppingCart, Heart, Star } from 'lucide-react'
import Image from 'next/image'

export default function ProductDetails() {
  const router = useRouter()
  const { id } = router.query
  const { data: products, isLoading } = useProducts()
  const { addItem } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  // Find the current product
  const product = products?.find(p => p.id === id)

  // Get related products (same category, excluding current)
  const relatedProducts = products?.filter(p =>
    p.category === product?.category && p.id !== product?.id
  ).slice(0, 4) || []

  const handleAddToCart = () => {
    if (product) {
      //@ts-ignore
      addItem({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image
      })
    }
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </main>
        <Footer />
      </>
    )
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
            <Button onClick={() => router.push('/shop2')}>
              Back to Shop
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <button onClick={() => router.push('/')} className="hover:text-green-600">
                  Home
                </button>
              </li>
              <li>/</li>
              <li>
                <button onClick={() => router.push('/shop2')} className="hover:text-green-600">
                  Shop
                </button>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{product.name}</li>
            </ol>
          </nav>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative rounded-lg overflow-hidden bg-white">
                <Image
                  src={product.image || '/FreshVegs/aubergine.png'}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Additional images could go here */}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(4.0)</span>
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
                <p className="text-3xl font-bold text-green-600 mb-4">
                  GHC {product.price.toFixed(2)}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                <span className="font-medium">Stock:</span>
                <Badge variant={product.stock > 10 ? 'default' : 'destructive'}>
                  {product.stock > 10 ? 'In Stock' : `${product.stock} left`}
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Product Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">64%</span>
                  </div>
                  <div>
                    <p className="font-semibold">Big Discount</p>
                    <p className="text-sm text-gray-600">Save on bulk orders</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">100% Organic</p>
                    <p className="text-sm text-gray-600">Fresh & healthy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="border-b">
              <nav className="flex">
                {[
                  { id: 'description', label: 'Description' },
                  { id: 'additional', label: 'Additional Information' },
                  { id: 'reviews', label: 'Customer Reviews' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-green-600 text-green-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'description' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Product Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description || `${product.name} is a fresh, high-quality ${product.category.toLowerCase()} sourced directly from local Ghanaian farms. Our commitment to quality ensures that you receive only the best produce for your meals.`}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          100% Fresh and Organic
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          Locally Sourced
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          Rich in Nutrients
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          Sustainably Grown
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Storage Tips:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          Store in cool, dry place
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          Best consumed within 3-5 days
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          Keep away from direct sunlight
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'additional' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Additional Information</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3 font-medium bg-gray-50">Category</td>
                          <td className="p-3">{product.category}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium bg-gray-50">Stock Status</td>
                          <td className="p-3">
                            <Badge variant={product.stock > 10 ? 'default' : 'destructive'}>
                              {product.stock > 10 ? 'In Stock' : 'Low Stock'}
                            </Badge>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium bg-gray-50">Origin</td>
                          <td className="p-3">Ghana</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium bg-gray-50">Storage</td>
                          <td className="p-3">Refrigerate at 4°C</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <div className="text-center py-8 text-gray-600">
                    <p>No reviews yet. Be the first to review this product!</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ShopCard
                    key={relatedProduct.id}
                    productName={relatedProduct.name}
                    image={relatedProduct.image || '/FreshVegs/aubergine.png'}
                    price={relatedProduct.price}
                    stars={4}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
