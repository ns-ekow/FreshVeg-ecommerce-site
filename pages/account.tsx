import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
// import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useOrders } from '@/hooks/useOrders'
import { useCart } from '@/contexts/CartContext'

import { MdDashboard } from 'react-icons/md'
import { FiRefreshCcw } from 'react-icons/fi'
import { IoIosHeartEmpty } from 'react-icons/io'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { CiSettings } from 'react-icons/ci'
import { IoIosLogOut } from 'react-icons/io'

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: MdDashboard },
  { id: 'orders', label: 'Order History', icon: FiRefreshCcw },
  { id: 'wishlist', label: 'Wishlist', icon: IoIosHeartEmpty },
  { id: 'cart', label: 'Shopping Cart', icon: HiOutlineShoppingBag },
  { id: 'settings', label: 'Settings', icon: CiSettings },
]

export default function Account() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const { data: session, status } = useSession()
  const { data: orders } = useOrders()
  const { state: cartState } = useCart()
  const router = useRouter()

  // Redirect if not authenticated
  if (status === 'loading') {
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

  if (!session) {
    router.push('/signin')
    return null
  }

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' })
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent session={session} orders={orders || []} />
      case 'orders':
        return <OrdersContent orders={orders || []} />
      case 'cart':
        return <CartContent cartState={cartState} />
      case 'wishlist':
        return <WishlistContent />
      case 'settings':
        return <SettingsContent session={session} />
      default:
        return <DashboardContent session={session} orders={orders || []} />
    }
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              My Account
            </h1>
            <p className="text-gray-600">
              Welcome back, {session.user?.name}
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Account Menu</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-green-100 text-green-700'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                      {item.id === 'cart' && cartState.itemCount > 0 && (
                        <Badge variant="secondary" className="ml-auto">
                          {cartState.itemCount}
                        </Badge>
                      )}
                    </button>
                  ))}
                  <hr className="my-4" />
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <IoIosLogOut className="w-5 h-5" />
                    Logout
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

// Dashboard Content Component
function DashboardContent({ session, orders }: { session: any; orders: any[] }) {
  const totalOrders = orders?.length || 0
  const totalSpent = orders?.reduce((sum, order) => sum + order.total, 0) || 0

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{totalOrders}</div>
              <div className="text-sm text-gray-600">Total Orders</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">GHC {totalSpent.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Total Spent</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {session.user?.role === 'admin' ? 'Admin' : 'Customer'}
              </div>
              <div className="text-sm text-gray-600">Account Type</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          {orders && orders.length > 0 ? (
            <div className="space-y-4">
              {orders.slice(0, 3).map((order: any) => (
                <div key={order.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">Order #{order.id.slice(-8)}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">GHC {order.total.toFixed(2)}</p>
                    <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-4">No orders yet</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// Orders Content Component
function OrdersContent({ orders }: { orders: any[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
      </CardHeader>
      <CardContent>
        {orders && orders.length > 0 ? (
          <div className="space-y-4">
            {orders.map((order: any) => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium">Order #{order.id.slice(-8)}</h3>
                    <p className="text-sm text-gray-600">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-lg">GHC {order.total.toFixed(2)}</p>
                    <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                      {order.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  {order.items?.length || 0} items
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center py-8">No orders found</p>
        )}
      </CardContent>
    </Card>
  )
}

// Cart Content Component
function CartContent({ cartState }: { cartState: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shopping Cart</CardTitle>
      </CardHeader>
      <CardContent>
        {cartState.items.length > 0 ? (
          <div className="space-y-4">
            {cartState.items.map((item: any) => (
              <div key={item.productId} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium">GHC {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span>GHC {cartState.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-center py-8">Your cart is empty</p>
        )}
      </CardContent>
    </Card>
  )
}

// Wishlist Content Component
function WishlistContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wishlist</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center py-8">Wishlist feature coming soon</p>
      </CardContent>
    </Card>
  )
}

// Settings Content Component
function SettingsContent({ session }: { session: any }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <p className="text-gray-900">{session.user?.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <p className="text-gray-900">{session.user?.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Type
            </label>
            <Badge variant="outline">
              {session.user?.role === 'admin' ? 'Administrator' : 'Customer'}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

