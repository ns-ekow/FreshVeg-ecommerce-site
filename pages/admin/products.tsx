
import AdminLayout from '../../components/adminlayout';
import styles from '../../components/adminlayout.module.css';
import reciept from '../../public/FreshVegs/illustration.png'
import Image from 'next/image';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from '../../components/pagination';
import tomatoes from '../../public/FreshVegs/tomatoes.png'
import Link from 'next/link';



export default function Orders(){
  const newarr = [1];

  return(
    <>
      <AdminLayout >
        <div className={styles.contentContainer}>

          {newarr.length === 0 ? <EmptyOrders /> : <ProductsList />}
        </div>
      </AdminLayout>

    </>
  )
}



const EmptyOrders = ()=>{
  return(
    <div className={styles.emptyOrders}>
      <div className={styles.containerHead}> <h3>Products</h3></div>
      <div className={styles.emptyContainerBody}>
        <Image src={reciept} width={100} height={120} alt='empty'className='mx-auto'/>
        <h3>Add Products</h3>
        <p>Start making sales by adding your products.
          
         </p>
        <p>You can import and manage your products at any time.</p>
        <Link href='/admin/addproducts'>
          <div className={styles.adminButton}>
            Add Product
          </div>
        </Link>
      </div>
    </div>
  )
}

const ProductsList = ()=>{
  return(
    <div className={styles.ordersList}>
      <div className={styles.containerHead}>
        <h3>Products</h3>
        <div className='flex gap-4'>
        <button className='bg-white border border-gray-300 text-blue-500 px-4 py-1 h-fit rounded-md text-lg'>Export</button>
          <Link href='/admin/addproducts'>
          <button className='bg-blue-500  text-white px-8 py-1 h-fit rounded-md text-lg'>Add Product</button>
          </Link>
        </div>
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
            <span className='col-span-2'>Product</span>
            <span>Inventory</span>
            <span>Category</span>
            <span>Date Posted</span>
            <span>Rating</span>
            
          </div>
          <div className='w-full'>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />


          </div>

        </div>
        <div className='body-footer w-full h-full flex flex-col items-center justify-center'>
          <Pagination />
        </div>
      </div>
    </div>
  )



 
  }

const ProductItem = () => {
  return(
    <div className='grid grid-cols-6 w-full py-2 border-b'>
      <div className='product col-span-2'>
        <div className='flex gap-2'>
          <div className='flex items-center'>
            <input type='checkbox' className='mr-2'/>
            <Image src={tomatoes} width={60} height={60} alt=''/>
          </div>
          <div className='flex flex-col'>
            <span className='font-semibold'>Tomatoes</span>
            <span className='text-gray-400'>Fruit vegetables</span>
          </div>
        </div>
      </div>
      <div className='inventory flex'>
        <span>96</span> in stock
      </div>
      <div className='category'>
        Fruit vegetable
      </div>
      <div>
        07/05/2023
      </div>
      <div className='rating flex'>
        <span className='text-yellow-400'>4.5</span>
        <span className='text-gray-400'>(32 Votes)</span>
      </div>
    </div>
  )}