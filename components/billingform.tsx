
export default function BillingForm(){
  return(
    <div className='col-span-2 h-full'>
      <h3>Billing Information</h3>
      <div className='grid grid-cols-3 gap-4'>
        <div className='flex flex-col'>
          <label>First Name</label>
          <input type='text' className='border border-black rounded-md p-2 ' />
        </div>
        <div className='flex flex-col'>
          <label>last Name</label>
          <input type='text' className='border border-black rounded-md p-2' />
        </div>
        <div className='flex flex-col'>
          <label>Company Name</label>
          <input type='text' className='border border-black rounded-md p-2' />
        </div>
      </div>
      <div className='flex flex-col'>
        <label>Street Address</label>
        <input type='text' className='border border-black rounded-md p-2'placeholder='Address' />
      </div>
      <div className='grid grid-cols-3 gap-4'> 
        <div className='flex flex-col'>
          <label>Country / Region</label>
          <input type='text' className='border border-black rounded-md p-2' placeholder='Country' />
        </div>
        <div className='flex flex-col'>
          <label>State</label>
          <input type='text' className='border border-black rounded-md p-2' placeholder='State' />
        </div>
        <div className='flex flex-col'>
          <label>Zip Code</label>
          <input type='text' className='border border-black rounded-md p-2' placeholder='Zip Code' />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col'>
          <label>Email</label>
          <input type='text' className='border border-black rounded-md p-2'placeholder='Email Address' />
        </div>
        <div className='flex flex-col'>
          <label>Phone</label>
          <input type='text' className='border border-black rounded-md p-2'placeholder='Phone Number' />
        </div>
        <div className='flex gap-2'>
          <input type='checkbox' className='border border-black rounded-md p-2 mr-2' />Ship to different address
        </div>
      </div>

      <hr/>
      <h3>Additional Info</h3>
      <div className='flex flex-col'>
        <label>Order Notes (Optional)</label>
        <textarea 
          rows={4}
          className='border border-gray-400 rounded-md' />
      </div>


    </div>
  )
}