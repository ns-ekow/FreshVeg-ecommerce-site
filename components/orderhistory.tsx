import Link from 'next/link'
import Pagination from './pagination'

export default function OrderHistory(){
  return(
    <div className='w-full h-full bg-white rounded-md shadow-md grid grid-rows-[1fr 9fr]'>
      <div className='w-full flex flex-col justify-between '>
        <h3>Order History</h3>
        <div className='grid grid-cols-5 bg-gray-200 p-2'>
          <h5>ORDER ID</h5>
          <h5>DATE</h5>
          <h5>TOTAL</h5>
          <h5>STATUS</h5>
          <h5>.</h5>
        </div>
      </div>
      <div className='grid grid-rows-[9fr_1fr] p-4'>
        <div>
          
        {
          [
            {
              orderId: 1234,
              date: 'March 10, 2021',
              total: 210,
              status: 'Completed',
              linkHref: '/orders/1234'
            },
            {
              orderId: 1235,
              date: 'March 10, 2021',
              total: 100,
              status: 'Pending',
              linkHref: '/orders/1235'
            }
          ].map((item: any) => (
            <HistoryItem
              key={item.orderId}
              orderId={item.orderId}
              date={item.date}
              total={item.total}
              status={item.status}
              linkHref={item.linkHref}
            />
          ))
        }
        </div>
        <div className='flex flex-row justify-center w-full'>
          
          <Pagination />
        </div>
        
      </div>
    </div>
  )
}

interface HistoryItemProps {
  orderId: number;
  date: string;
  total: number;
  status: string;
  linkHref: string;
}

const HistoryItem = ({orderId, date, total, status, linkHref}: HistoryItemProps)=>{
  return(
    <div className='w-full grid grid-cols-5 p-1'>
      <span>#{orderId}</span>
      <span>{date}</span>
      <span>GHS{total} (<span>5</span> products)</span>
      <span>{status}</span>
      <span className='text-green-500 hover:text-green-800'><Link href={linkHref}>View Details</Link> </span>
      
    </div>
  )
}

HistoryItem.defaultProps = {
  orderId: '#3933',
  date: '4 April, 2021',
  total: '$130.00',
  status: 'Processing',
  linkHref: '#'
}