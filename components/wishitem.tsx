
import Image from 'next/image';
import cauliflower from '../public/FreshVegs/cauliflower.png'
import { Button } from './ui/button';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState } from 'react';


interface WishItemProps {
  productName: string;
  imageSrc: any;
  price: number;
}

export default function WishItem({productName = 'Product Name', imageSrc = cauliflower, price = 34.90}: WishItemProps){
  const handleDelete = () => {
    
  }
  const handleAdd = () => {
    
  }

  
  const [inStock] = useState(true);

  
  return(
    <div className='w-full flex flex-row justify-between items-center border-b border-gray-400 py-4'>
      <div className='flex flex-row gap-2 items-center'>
        <Image src={imageSrc} alt='product' width={70} height={70} className='rounded-md'/>
        <span>{productName}</span>
      </div>
      <div className='flex flex-row gap-2'>
        <span>GHS {price.toFixed(2)}</span>
        <span className='text-lg line-through text-gray-300'>
          GHS 20.99
        </span>
      </div>
      <div>
        { inStock ? <InStock/> : <OutOfStock/> }
      </div>
      
      
      <div className='flex items-center gap-4 pr-4'>
        <Button onClick={handleAdd}>
          Add to cart
        </Button>
        <RiDeleteBin6Line className='hover:text-rose-500' onClick={() => {handleDelete}} />
        
      </div>
    </div>
  )
}

const InStock =()=>{
  return(
    <div className='p-2 rounded-md bg-green-300 text-green-500'>
      In Stock
    </div>
  )
}

const OutOfStock =()=>{
  return(
    <div className='p-2 rounded-md bg-red-300 text-red-500'>
      Out of Stock
    </div>
  )
}