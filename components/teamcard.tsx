
export default function TeamCard(){
  return(
    <div className='h-96 w-96 grid grid-rows-[7fr_3fr] border border-gray-400 rounded-md hover:p-4 hover:rounded-md hover:bg-white hover:shadow-md'>
      <div className=' w-full h-full bg-limegreen rounded-t-md '></div>
      <div className='flex flex-col'>
        <h3>Anthony K. S. Wortsem</h3>
        <p>Founder & CEO</p>
      </div>
    </div>
  );
};