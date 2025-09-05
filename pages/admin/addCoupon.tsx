
import AdminLayout from "../../components/adminlayout";
import styles from "../../components/adminlayout.module.css";
import Link from "next/link";

export default function Addblog(){
  return(
    <AdminLayout>
      <div className={styles.addContainer}>
        <div className={styles.addHead}>

          <div className="w-full h-full flex flex-col">
            <Link href='/admin/blog'><span className="text-md text-gray-500">Back</span></Link>
            <h3>Add Coupon</h3>

          </div>
        </div>
        <div className={styles.couponBody}>
          <div className="content p-4 w-full h-full bg-white flex flex-col rounded-md">
            <div className="pb-4 border-b">
              
              <h3>Coupon Information</h3>
              <p className="text-sm text-gray-400 mb-4">Code will be used by the users in checkout</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <label htmlFor="couponName" className= "text-sm text-gray-400">Coupon Code</label>
                  <input type="text" id="couponName" className="w-96 rounded-md p-2 border" placeholder="FeshDiscount20"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="couponName" className= "text-sm text-gray-400">Coupon name</label>
                  <input type="text" id="couponName" className="w-96 p-2 border rounded-md" placeholder="Price Discount"/>
                </div>
              </div>
            </div>
            <div>
              <h3>Coupon Type</h3>
              <p className="text-sm text-gray-400 mb-4">Type of coupon you want to create</p>
              <div className="flex gap-4 mt-2">
                <div className="h-40 w-full border rounded-md"></div>
                <div className="h-40 w-full border rounded-md"></div>
                <div className="h-40 w-full border rounded-md"></div>
                <div className="h-40 w-full border rounded-md"></div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col gap-2">
                <label  className= "text-sm text-gray-400">Discount Value</label>
                <input type="text" className="w-96 p-2 border rounded-md" placeholder="Amount"/>
                
              </div>
              <div className="flex flex-col gap-2">
                <label  className= "text-sm text-gray-400">Applies to</label>
                <input type="text" className="w-96 p-2 border rounded-md" placeholder="Choose"/>
                
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col gap-2">
                <label  className= "text-sm text-gray-400">Duration</label>
                <input type="text" className="w-96 p-2 border rounded-md" placeholder="Set Duration"/>
                <div className="flex gap-1 items-center mb-8">
                  <input type="checkbox" className="w-4 h-4 border rounded-md"/> 
                  <span>Don't set the duration</span>
                </div>
                
              </div>
              <div className="flex flex-col gap-2">
                <label  className= "text-sm text-gray-400">Usage Limits</label>
                <input type="text" className="w-96 p-2 border rounded-md" placeholder="Amount of uses"/>
                <div className="flex gap-1 items-center">
                  <input type="checkbox" className="w-4 h-4 border rounded-md"/> 
                  <span>Don't limit amount of users</span>
                </div>
                
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