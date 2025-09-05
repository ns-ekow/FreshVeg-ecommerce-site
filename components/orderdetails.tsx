
import Image from 'next/image';
import pepper from '../public/FreshVegs/pepper.png';


export default function OrderDetails(){
  return(
    
      <div className='h-full w-full border border-gray-300 rounded-lg '>
        <div className='flex flex-col'>
          <div className='header w-full h-10 border-b border-gray-300 flex items-center justify-between p-4'>
            <div className='flex gap-4 items-center'>
              <h3>Order Details</h3>
              <span>April 24, 2021</span>
              <span>3 Products</span>
            </div>
            <span className='text-green-400 hover:text-green-600'> 
              <a href='#'>Back to List</a>
            </span>
          </div>
          <div className='body-top p-4'>
            <div className='grid grid-cols-3 h-72  gap-4'>
              <div className='col-span-2'>
                <div className='grid grid-cols-2 border border-gray-300 rounded-md h-full'>
                  <div className='border-r border-gray-300'>
                    <div className='flex flex-col gap-4'>
                      <div className='h-10 flex items-center px-4 text-sm text-gray-500 border-b border-gray-300'>
                        BILLING ADDRESS
                      </div>
                      <div className='p-4 flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                          <span className='name'>Dianne Russell</span>
                          <span className='address text-sm text-gray-700'>4140 Parker Rd. Allentown, New Mexico 31134</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <span className='text-md text-gray-500'>EMAIL</span>
                          <span className='email'>evansachie011@gmail.com</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <span className='text-md text-gray-500'>PHONE</span>
                          <span className='email'>(671) 555-0110</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <div className='h-10 flex items-center px-4 text-sm text-gray-500 border-b border-gray-300'>
                      SHIPPING ADDRESS
                    </div>
                    <div className='p-4 flex flex-col gap-4'>
                      <div className='flex flex-col gap-1'>
                        <span className='name'>Dianne Russell</span>
                        <span className='address text-sm text-gray-700'>4140 Parker Rd. Allentown, New Mexico 31134</span>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <span className='text-md text-gray-500'>EMAIL</span>
                        <span className='email'>evansachie011@gmail.com</span>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <span className='text-md text-gray-500'>PHONE</span>
                        <span className='email'>(671) 555-0110</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-span-1 border border-gray-300 rounded-md'>
                <div className='h-20 flex items-center px-4 text-sm text-gray-500 border-b border-gray-300 justify-between'>
                  <div className='border-r pr-10 flex flex-col gap-2'>
                    <span>ORDER ID:</span>
                    <span>#4152</span>
                  </div>
                  <div>
                    <span className='flex flex col gap-2'>PAYMENT METHOD:</span>
                    <span>Paypal</span>
                  </div>
                  
                </div>
                <div className='px-2'>
                  <div className='flex justify-between border-b py-3'><span>Subtotal:</span> <span>GHS 365.00</span></div>
                  <div className='flex justify-between border-b py-3'><span>Discount:</span> <span>20%</span></div>
                  <div className='flex justify-between border-b py-3'><span>Shipping:</span> <span>Free</span></div>
                  <div className='flex justify-between py-3'><span className='font-semibold'>Total:</span> <span className='font-semibold text-green-600'>GHS 365.00</span></div>
                </div>
                
                
              </div>
              
            </div>
          </div>
          <div className='body-middle '>
            <div className='w-full h-14 bg-green-500 mb-4'></div>
          </div>
          <div className='body-bottom'>
            <div className='flex justify-between py-1 px-4 bg-gray-300'>
              <span className='text-sm'>PRODUCT</span>
              <span className='text-sm'>PRICE</span>
              <span className='text-sm'>QUANTITY</span>
              <span className='text-sm'>SUBTOTAL</span>
            </div>
            <div className='flex flex-col p-4'>
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </div>
          </div>
        </div>
        
        
      </div>
    

  )
}

const OrderItem =()=>{
  return(
    <div className='flex justify-between items-center py-4 border-b border-gray-300'>
      <div className='flex gap-4 items-center'>
        <Image src={pepper} width={60}  height={60} alt=''/>
        <span>Product Name</span>
      </div>
      <span>GHS 14.00</span>
      <span>x5</span>
      <span>GHS 70.00</span>
    </div>
  )
}