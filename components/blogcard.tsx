import Image from 'next/image';
import nine from '../public/Image-9.png'
import Link from 'next/link';

export default function BlogCard(){ 
  return(
    
    <div className='w-96 grid-rows-2'>
      <div className=' w-full h-full rounded-t-lg'>
        <Link href={'#'}>
          
          <Image width={0} height={0} src={nine} alt=''/>
        </Link>
      </div>
      <div className=' w-full h-full p-4 bg-white border border-gray-300 rounded-b-lg'>
        <div className=' flex items-center gap-3 text-gray-500'>
          <span>Food</span>
          <span>By Admin</span>
          <span>65 comments</span>
        </div>
        <div>
          <Link href={'#'}>
            <h3>Lorem ipsum some card title title card</h3>
          </Link>
        </div>
        <span className='text-green-500 text-lg font-semibold '> <Link href={'#'}> Read More</Link> </span>
      </div>
    </div>
  )
}