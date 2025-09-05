import Link from 'next/link'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SlLocationPin } from 'react-icons/sl'
import { LuPhoneCall } from 'react-icons/lu'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/CartContext'

const Navbar = () => {
  const { data: session } = useSession()
  const { state: cartState } = useCart()

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <header className="bg-green-600 text-white shadow-lg" role="banner">
        {/* Top Bar */}
        <div className="bg-green-700 py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <SlLocationPin className="w-4 h-4" aria-hidden="true" />
              <span>Store Location: Accra, Ghana</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span>Eng</span>
                <button className="p-1 hover:bg-green-600 rounded" aria-label="Language selector">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-1">
                <span>GHS</span>
                <button className="p-1 hover:bg-green-600 rounded" aria-label="Currency selector">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              {session ? (
                <div className="flex items-center gap-2">
                  <span className="text-green-100">Welcome, {session.user?.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => signOut()}
                    className="text-white hover:bg-green-600"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Link href="/signin" className="hover:text-green-200 transition-colors">
                  Sign In / Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-green-600 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-bold text-white">
                  FreshVegs
                </Link>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
                <Categories />
                <Link href="/bloglist" className="text-white hover:text-green-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 rounded px-2 py-1">
                  Blog
                </Link>
                <Link href="/about" className="text-white hover:text-green-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 rounded px-2 py-1">
                  About Us
                </Link>
                <Link href="/contact" className="text-white hover:text-green-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 rounded px-2 py-1">
                  Contact Us
                </Link>
              </nav>

              {/* Search Bar */}
              <div className="hidden lg:block flex-1 max-w-md mx-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-4 pr-10 py-2 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Contact & Cart */}
              <div className="flex items-center space-x-4">
                <div className="hidden lg:flex items-center text-white">
                  <LuPhoneCall className="w-4 h-4 mr-2" />
                  <span>(219) 555-0114</span>
                </div>

                <Link href="/account" className="text-white hover:text-green-200 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>

                <Link href="/account" className="relative text-white hover:text-green-200 transition-colors">
                  <HiOutlineShoppingBag className="w-6 h-6" />
                  {cartState.itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartState.itemCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    { name: 'Root Vegetables', href: '/shop2?category=root' },
    { name: 'Leafy Vegetables', href: '/shop2?category=leafy' },
    { name: 'Fruit Vegetables', href: '/shop2?category=fruit' },
    { name: 'Stems', href: '/shop2?category=stems' }
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:text-green-200 transition-colors px-3 py-2 rounded-md hover:bg-green-700"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <RxHamburgerMenu className="w-5 h-5" />
        <span>All Categories</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar