
import CartItem from "./cartItem";



export default function ShoppingCart() {
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-4 w-full h-full">
      <div className="grid grid-rows-[4fr_1fr] gap-6 h-2/3 ">
        <div className="bg-white rounded-md shadow-md p-4">
          <div className="grid grid-cols-4 p-2 items-center justify-between border-b border-gray-400">
            <span>PRODUCT</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>SUBTOTAL</span>
          </div>
          <div className="w-full h-full overflow-y-auto">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md h-full flex justify-between items-center p-4">
          <h3>Coupon Code</h3>
          <div className="flex flex-row">
            <input className="border border-gray-400 px-4 mr-[-30px] rounded-tl-md rounded-bl-md w-96" type="text" placeholder="Enter Code" />
            <button className="p-4 rounded-full bg-black text-white font-semibold">Apply Coupon</button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md shadow-md p-4 h-1/2">
        <h3>Card Total</h3>
        <div className="p-6 border-b border-gray-400 flex justify-between">
          <span>Subtotal: </span>
          <span>GHS130.00</span>
        </div>
        <div className="p-6 border-b border-gray-400 flex justify-between">
          <span>Shipping: </span>
          <span>Free</span>
        </div>
        <div className="p-6 border-b border-gray-400 flex justify-between">
          <span>Total: </span>
          <span>GHS130.00</span>
        </div>
        <button className="mt-8 w-full px-4 py-2 bg-green-400 rounded-full hover:bg-green-600 text-white">Proceed to checkout</button>
      </div>
    </div>
  );
}


