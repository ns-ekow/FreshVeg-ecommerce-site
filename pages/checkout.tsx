import Layout from '../components/layout';
import BillingForm from '../components/billingform';
import Image from 'next/image';
import pepper from '../public/FreshVegs/pepper.png';
import { Button } from '../components/ui/button';


export default function Checkout(){
  return(
    <>
      <Layout>
        <div className="w-full h-fit p-4">
          <div className="w-full h-fit grid grid-cols-3 gap-4">
            <BillingForm />

            
            <div className=' border border-gray-400 rounded-md p-4'>
              <h3>Order Summary</h3>
              <div className='flex flex-col'>
                <SummaryItem />
                <SummaryItem />
                
              </div>
              <div className='w-full flex justify-between border-b border-gray-400 py-4'>
                <span>Subtotal:</span>
                <span>GHS84.00</span>
              </div>
              <div className='w-full flex justify-between border-b border-gray-400 py-4'>
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className='w-full flex justify-between border-b border-gray-400 py-4 mb-4'>
                <span>Total:</span>
                <span>GHS84.00</span>
              </div>
              <h3>Payment Method</h3>
              <div className='flex flex-col'>
                <input type='radio' className='border border-black rounded-md p-2 mr-2' />Cash on Delivery
                <input type='radio' className='border border-black rounded-md p-2 mr-2' />Paypal
                <input type='radio' className='border border-black rounded-md p-2 mr-2' />Amazon Pay
              </div>

              <Button>Place Order</Button>
              
            </div>
          </div>
         
        </div>
      </Layout>
    </>
  )
  
}


const SummaryItem =()=>{
  return(
    <div className='w-full flex flex-row justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <Image src={pepper} width={60} height={60} alt='prod'/>
        <div className='flex gap-2'>
          <span>product name</span>
          <span>x5</span>
        </div>
      </div>
      <span>GHS 70.00</span>
    </div>
  )
}