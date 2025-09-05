
import { Button } from './ui/button';
import Image from 'next/image';
import eight from '../public/FreshVegs/Image-8.png'

export default function BlogNav(){
  return(
    <div className=" flex flex-col gap-4 p-4">
       <div className="flex flex-col gap-4 p-2 border-b">
          <Button>Filter</Button>
          <input type="text" placeholder="Search" className='border rounded-md px-4 py-2' />
        </div>
       <div>
         <h3>Top Categories</h3>
         <div className="w-full flex justify-between p-4 ">
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className="w-full flex justify-between p-4 ">
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className="w-full flex justify-between p-4 ">
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className="w-full flex justify-between p-4 ">
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className="w-full flex justify-between p-4 ">
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className="w-full flex justify-between p-4 ">
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className="w-full flex justify-between p-4 ">
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className="w-full flex justify-between p-4 ">
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
       </div>
       <div >
         <h3>Popular Tag</h3>
         <div>
           <span>healthy</span>
           <span>low fat</span>
           <span>vegetarian</span>
           <span>bread</span>
           <span>vitamins</span>
         </div>
       </div>
       <div className='allery'>
         <h3>Our Gallery</h3>
         <div className=" flex flex-wrap gap-4">
           <Image src={eight} alt ="" width={100} height={100} className="rounded-md"/> 
           <Image src={eight} alt ="" width={100} height={100} className="rounded-md"/> 
           <Image src={eight} alt ="" width={100} height={100} className="rounded-md"/> 
           <Image src={eight} alt ="" width={100} height={100} className="rounded-md"/> 
           <Image src={eight} alt ="" width={100} height={100} className="rounded-md"/> 
           <Image src={eight} alt ="" width={100} height={100} className="rounded-md"/> 
           <Image src={eight} alt ="" width={100} height={100} className="rounded-md"/> 
           <Image src={eight} alt ="" width={100} height={100} className="rounded-md"/> 
         </div>
       </div>
       <div className='recent'>
         <h3>Recently Added</h3>
         <Recent/>
         <Recent/>
         <Recent/>
         
       </div> 
     </div>
  )
}


const Recent = () =>{
  return(
    <div className='grid grid-cols-5 mb-2 '>
      <div className='col-span-2 mr-2'>
        <div className='w-full rounded-md bg-rose-300'>
          <Image src={eight} alt ="" width={0} height={0} className="rounded-md"/>
        </div>
      </div> 
      <div className='col-span-3 flex flex-col gap-2 title'>Curabitur porttitor orci eget nequ accusamsn.
        <span>Apr 25,2021</span>
      </div>
    </div>
  )
}