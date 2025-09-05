import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-green-600 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-green-100">
                Get the latest updates on fresh produce and exclusive offers
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">About FreshVegs</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                FreshVegs is a Ghanaian agriculture start-up that offers an online marketplace
                for consumers to shop fresh and quality vegetables and have it delivered at
                their doorstep within the shortest possible time.
              </p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="text-green-400 mr-2">📞</span>
                  (219) 555-0114
                </p>
                <p className="flex items-center">
                  <span className="text-green-400 mr-2">✉️</span>
                  hello@freshvegs.com
                </p>
              </div>
            </div>

            {/* My Account */}
            <div>
              <h3 className="text-xl font-bold mb-4">My Account</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/account" className="text-gray-300 hover:text-white transition-colors">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="/account" className="text-gray-300 hover:text-white transition-colors">
                    Order History
                  </Link>
                </li>
                <li>
                  <Link href="/account" className="text-gray-300 hover:text-white transition-colors">
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <Link href="/account" className="text-gray-300 hover:text-white transition-colors">
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help & Support */}
            <div>
              <h3 className="text-xl font-bold mb-4">Help & Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-400 text-center md:text-right">
                © {new Date().getFullYear()} FreshVegs. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer