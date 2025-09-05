
import AdminLayout from "../../components/adminlayout";
import styles from "../../components/adminlayout.module.css";
import Link from "next/link";

export default function Addblog(){
  return(
    <AdminLayout>
      <div className={styles.addContainer}>
        
        <div className={styles.addHead}>
  
          <div className="w-full h-full flex flex-col">
            <Link href='/admin/customers'><span className="text-md text-gray-500">Back</span></Link>
            <h3>Customer Information</h3>
  
          </div>
        </div>
        <div className={styles.addBody}>
          <div className="content grid grid-rows-2 gap-4 ">
            <div className="bg-white rounded-md p-4 flex flex-col">
              <div className="flex justify-between pb-4 border-b">
                <div className="flex gap-2 items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-500"></div>
                  <div className='flex flex-col gap-2'>
                    <h3>John Doe</h3>
                    <div className="flex flex-col" >
                      <span className="text-sm text-gray-400">Ghana</span>
                      <span className="text-sm text-gray-400">5 Orders</span>
                      <span className="text-sm text-gray-400">Customer for 2 years</span>
                    </div>
                    
                  </div>
                </div>
                <div> ....</div>
              </div>
              <div className="flex flex-col gap-2">
                <h3>Customer Notes</h3>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-400">
                    Notes </label>
                  <textarea className="w-full h-20 rounded-md border border-gray-300 p-2" placeholder='Add notes about customer'/>
                </div>
              </div>
              
            </div>
            <div className="bg-white rounded-md flex flex-col p-4">
              <h3>Customer Orders</h3>
              <div className='flex flex-col overflow-auto'>
                <div className="grid grid-cols-4 py-2 border-b">
                  <span className="text-sm text-gray-400">Order Id</span>
                  <span className="text-sm text-gray-400">Date</span>
                  <span className="text-sm text-gray-400">order Status</span>
                  <span className="text-sm text-gray-400">Total</span>
                </div>
                <CustomerOrder/>
                <CustomerOrder/>
                
                
                
              </div>
              
            </div>
          </div>
          <div className="sidebar h-fit  grid grid-rows-8 gap-4">
            <div className="bg-white rounded-md row-span-5 p-4 flex flex-col gap-2">
              <div className='flex justify-between'>
                <h4>overview</h4>
                <span className='text-sm text-blue-500'>Edit</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-sm text-gray-400 mb-2'>Address</span>
                <span className='text-md text-gray-400'>Accra, Ghana</span>
                <span className='text-md text-gray-400'>Near the Makola Market</span>
                <span className='text-md text-gray-400'>close to wherever</span>
                
              </div>
              <div className='flex flex-col'>
                <span className='text-sm text-gray-400 mb-2'>Email Address</span>
                <span className='text-md text-gray-400'>johndoe"gmail.com</span>            
                
              </div>
              <div className='flex flex-col'>
                <span className='text-sm text-gray-400 mb-2'>Phone</span>
                <span className='text-md text-gray-400'>+233 8804 12345</span>            
                
              </div>
              <div className='py-2 border-t'>
                <span className='text-md text-red-500'>Delete Customer</span>
              </div>
              
            </div>
            <div className="row-span-2 bg-white rounded-md p-4">
              <h4>Tags</h4>
              <div className="flex flex-col">
                <label className="text-sm text-gray-400">Add Tags</label>
                <input type="text" placeholder="Enter tag name" className="border px-2 py-1 rounded-sm"/>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.addFooter}>
          <div className="pt-2 border-t mt-2 flex justify-between">
            <div></div>
            <div className="flex gap-4">
              <button className="bg-white px-2 py-1 border text-blue-500 rounded-sm">
                Cancel
              </button>
  
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )

};


const CustomerOrder =()=>{
  return(
    <div className="grid grid-cols-4 py-4 border-b items-center">
      <span>#23534D</span>
      <span>May 25, 3:12 PM</span>
      <div><Completed/></div>
      <span>GHS 94.14</span>
    </div>
  )
};


const Completed =()=>{
  return(
    <div className='py-1 px-4 max-w-24  bg-green-300 rounded-sm text-green-600 text-sm'>
      Completed
    </div>
  )
}