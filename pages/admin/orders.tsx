import AdminLayout from '../../components/adminlayout';
import styles from '../../components/adminlayout.module.css';
import reciept from '../../public/FreshVegs/receipt.png'
import Image from 'next/image';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from '../../components/pagination';


export default function Orders(){
  const newarr = [1];
  
  return(
    <>
      <AdminLayout >
        <div className={styles.contentContainer}>
          
          {newarr.length === 0 ? <EmptyOrders /> : <OrdersList />}
        </div>
      </AdminLayout>
      
    </>
  )
}



const EmptyOrders = ()=>{
  return(
    <div className={styles.emptyOrders}>
      <div className={styles.containerHead}> <h3>Orders</h3></div>
      <div className={styles.emptyContainerBody}>
        <Image src={reciept} width={100} height={120} alt='empty'className='mx-auto'/>
        <h3>No Orders Yet</h3>
        <p>All the upcoming orders from your store will be visible in this page.
         </p>
        <p>You can add orders by yourself if you sell offline.</p>
      </div>
    </div>
  )
}
const OrdersList = ()=>{
  return(
    <div className={styles.ordersList}>
      <div className={styles.containerHead}>
        <h3>Orders</h3>
        <button className='bg-white border border-gray-300 text-blue-500 px-4 py-1 h-fit rounded-md text-lg'>Export</button>
      </div>
      <div className={styles.containerBody}>
        <div className='body-head flex flex-row justify-between items-center px-2 w-full'>
          <div className='flex gap-4'>
            <div></div>
            <input type='text' placeholder='Search'/>
          </div>
          <div className='flex gap-4'>
            <button className='bg-white border border-gray-300 rounded-sm p-1 text-blue-500'><CiEdit/></button>
            <button className='bg-white border border-gray-300 rounded-sm p-1 text-blue-500'><RiDeleteBin6Line/></button>
          </div>
            
        </div>
        <div className='body-body w-full flex flex-col overflow-auto'>
          <div className='grid grid-cols-6 text-sm text-gray-400 border-b border-gray-300 py-2 px-4 w-full'>
            <span>Order</span>
            <span>Date</span>
            <span>Customer</span>
            <span>Payment Status</span>
            <span>Order Status</span>
            <span>Total</span>
          </div>
          <div className='w-full'>
            <OrdersItem />
            <OrdersItem />
            <OrdersItem />
            <OrdersItem />
            <OrdersItem />
            
            
          </div>
          
        </div>
        <div className='body-footer w-full h-full flex flex-col items-center justify-center'>
          <Pagination />
        </div>
      </div>
    </div>
  )
}


const OrdersItem =()=>{
  return(
    <div className='w-full grid grid-cols-6 p-4 border-b border-gray-300'>
      <div className='flex gap-2 items-center'>
        <input type='checkbox'/>
        <span>#12512B</span>
      </div>
      <span>May 5, 4:20 PM</span>
      <span>Tom Anderson</span>
      <StatusPaid />
      <OrderStatusReady />
      <span>$125.00</span>
    </div>
  )
}

const StatusPaid =()=>{
  return(
    
  <div className='px-2 py-1 bg-green-200 rounded-md text-green-400 min-w-16 mx-auto'>
    Paid
  </div>
  )
}
const OrderStatusReady =()=>{
  return(

  <div className='px-2 py-1 min-w-16 mx-auto bg-orange-500 rounded-md text-white'>
    Ready
  </div>
  )
}

