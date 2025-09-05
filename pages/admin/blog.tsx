
import AdminLayout from '../../components/adminlayout';
import styles from '../../components/adminlayout.module.css';
import reciept from '../../public/FreshVegs/blogill.png'
import Image from 'next/image';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from '../../components/pagination';
import image from '../../public/FreshVegs/blog.png'
import Link from 'next/link';



export default function Orders(){
  const newarr = [1];

  return(
    <>
      <AdminLayout >
        <div className={styles.contentContainer}>

          {newarr.length === 0 ? <EmptyOrders /> : <BlogList />}
        </div>
      </AdminLayout>

    </>
  )
}



const EmptyOrders = ()=>{
  return(
    <div className={styles.emptyOrders}>
      <div className={styles.containerHead}> <h3>Blogs</h3></div>
      <div className={styles.emptyContainerBody}>
        <Image src={reciept} width={100} height={100} alt='empty' className='mx-auto'/>
        <h3>No Blogs Yet</h3>
        <p>Add a blog feature to enable readers to access perks, exclusive content, and special features, 



         </p>
        <p>making the platform more engaging and attractive to users/readers.</p>
        <Link href='/admin/addBlog'>
          <div className={styles.adminButton}>
            Add Blog
          </div>
        </Link>
      </div>
    </div>
  )
}

const BlogList = ()=>{
  return(
    <div className={styles.ordersList}>
      <div className={styles.containerHead}>
        <h3>Blogs</h3>
        <div className='flex gap-4'>
        <button className='bg-white border border-gray-300 text-blue-500 px-4 py-1 h-fit rounded-md text-lg'>Export</button>
          <Link href='/admin/addBlog'>
            <button className='bg-blue-500  text-white px-8 py-1 h-fit rounded-md text-lg'>Add Blog</button>
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
            <span className='col-span-2'>Blog Name</span>
            <span>Status</span>
            <span>Date Posted</span>
            <span>Category</span>
            <span>Popular Tag</span>
            
          </div>
          <div className='w-full'>
            <BlogItem />
            <BlogItem />
            


          </div>

        </div>
        <div className='body-footer w-full h-full flex flex-col items-center justify-center'>
          <Pagination />
        </div>
      </div>
    </div>
  )
}


const BlogItem = ({ name, image, status, datePosted, category, popularTag }: { name: string, image: string, status: string, datePosted: string, category: string, popularTag: string }) => {
  return (
    <div className='grid grid-cols-6 py-4 border-b items-center'>
      <div className="name col-span-2 flex gap-3 items-center">
        <input type="checkbox" className="border-gray-300" />
        <div className="image rounded-sm ">
          <Image src={image} alt='' width={80} height={80} />
        </div>
        <div className="flex flex-col  items-start">
          <span className="font-semibold text-left">{name}</span>

        </div>
      </div>
      <div className='status col-span-1'>
        {status === 'Published' ? <PublishedStatus /> : <DraftStatus />}
      </div>
      <div className='date col-span-1'>
        {datePosted}
      </div>
      <div className='category col-span-1'>
        <span>{category}</span>
      </div>
      <div className='popular col-span-1'>
        <span>{popularTag}</span>
      </div>
    </div>
  )
}
BlogItem.defaultProps = {
  name: 'Blog Name',
  image: image,
  status: 'Published',
  datePosted: '01/01/2023',
  category: 'Category',
  popularTag: 'Tag',
}

const PublishedStatus = () => {
  return (
    <div className="py-1 px-4 bg-green-200 max-w-24 mx-auto text-green-500 rounded-sm">
      Published
    </div>
  );
};
const DraftStatus = () => {
  return (
    <div className="py-1 px-3 bg-orange-200 max-w-20 mx-auto text-orange-500 rounded-sm">
      Draft
    </div>
  );
};