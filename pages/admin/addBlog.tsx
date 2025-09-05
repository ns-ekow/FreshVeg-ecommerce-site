
import AdminLayout from "../../components/adminlayout";
import styles from '../../components/adminlayout.module.css';
import Link from "next/link";

export default function Addblog(){
  return(
    <AdminLayout>
      <div className={styles.addContainer}>
        <div className={styles.addHead}>
          
          <div className="w-full h-full flex flex-col">
            <Link href='/admin/blog'><span className="text-md text-gray-500">Back</span></Link>
            <h3>Add Blog</h3>
           
            
          </div>
        </div>
        <div className={styles.addBody}>
          <div className="content bg-white rounded-md p-4 flex flex-col gap-4">
            <h4>Information</h4>
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm">Blog Name</label>
              <input type="text" placeholder="Benefits of eating an orange everyday" className="border px-2 py-1 rounded-sm"/>
            </div>
            <div className="flex flex-col pb-4 border-b">
              <label className="text-gray-500 text-sm">Blog Description</label>
              <textarea  placeholder="Content of the Blog" rows={50} className="border px-2 py-1 h-40 rounded-sm"/>
            </div>
            <div className="flex flex-col">
              <h4>Images</h4>
              <div className=" border border-dashed rounded-md h-40">
                <div className="flex flex-col items-center">
                  <button className="p-2 border border-blue-400 rounded-sm mt-8">Add file</button>
                  <p className="text-gray-400 text-sm">Or drag and drop file</p>
                </div>
              </div>
            </div>
            
          </div>
          <div className="sidebar grid grid-rows-8 gap-4">
            <div className="row-span-3 bg-white rounded-md p-4  flex flex-col">
              <h4>Categories</h4>
              <div className="flex flex-col">
                <div>
                  <input type="checkbox" className="border-gray-300 rounded-sm mr-2"/>Fruit vegetables
                </div>
                <div>
                  <input type="checkbox" className="border-gray-300 rounded-sm mr-2"/>Greens
                </div>
                <div>
                  <input type="checkbox" className="border-gray-300 rounded-sm mr-2"/>Tubers
                </div>
                <div>
                  <input type="checkbox" className="border-gray-300 rounded-sm mr-2"/>Root vegetables
                </div>
                <div>
                  <input type="checkbox" className="border-gray-300 rounded-sm mr-2"/>Leafy vegetables
                </div>
                
                
              </div>
              <div>
                <span className="text-blue-500 text-md">Create New</span>
              </div>
              
            </div>
            <div className="row-span-2 bg-white rounded-md p-4">
              <h4>Tags</h4>
              <div className="flex flex-col">
                <label className="text-sm text-gray-400">Add Tags</label>
                <input type="text" placeholder="Enter tag name" className="border px-2 py-1 rounded-sm"/>
              </div>
            </div>
            <div className="row-span-3 bg-white rounded-md p-4">
              <h4>SEO Settings</h4>
              <div className="flex flex-col">
                <label className="text-sm text-gray-400">Title</label>
                <input type="text" placeholder="Enter title" className="border px-2 py-1 rounded-sm"/>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-400">Description</label>
                <textarea rows={20} className="border px-2 py-1 rounded-sm h-16"/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addFooter}>
          <div className="pt-2 border-t mt-2 flex justify-between">
            <div></div>
            <div className="flex gap-4">
              <button className="bg-white px-2 py-1 border text-blue-500 rounded-sm">Cancel</button>
              <button className="bg-orange-400 text-white px-4 py-2 rounded-md">Draft</button>
              <button className="bg-blue-400 text-white px-4 py-2 rounded-md">Publish</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
  
};