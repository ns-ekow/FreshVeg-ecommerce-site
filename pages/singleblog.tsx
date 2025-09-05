import Layout from '../components/layout';
import styled from 'styled-components';
import { Button } from '../components/ui/button';
import BlogNav from '../components/blognav';


export default function SingleBlog(){
  return(
    <Layout>
      <BlogStyled>
        <div className='left-col'>
          <BlogContent />
          <div className='after-blog flex flex-col gap-4 '>
            <div className='w-full rounded-md h-56 bg-black p-4'>
              <button className=' px-6 py-2 bg-white text-green-500 font-semibold text-md rounded-full '>Shop Now</button>
            </div>
            <h3>Leave a comment</h3>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-4'>
                <label>Full name</label>
                <input type='text' className='border border-gray-200 p-2 rounded-md' placeholder='Your name'/>
              </div>
              <div className='flex flex-col gap-4'>
                <label>Email</label>
                <input type='text' className='border border-gray-200 p-2 rounded-md w-full' placeholder='example@gmail.com'/>
              </div>
            </div>
            <div className='flex flex-col'>
              <label>Message</label>
              <textarea className='border border-gray-200 p-2 rounded-md w-full' placeholder='write your comment here...'/>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' className='border border-gray-200  rounded-md'/>
              <span className='font-light text-sm'>Save my name and email in this browser for the next time i comment</span>
            </div>
            <Button>Post Comment</Button>
          </div> 
          <h3>Comments</h3>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>

          <button className="py-2 px-6 text-green-500 border border-green-500 bg-white rounded-full mt-4"> Load More</button>
          
        </div>
        <div className='right-col'>
          <BlogNav/>
        </div>
      </BlogStyled>
    </Layout>
  )
}

const BlogStyled = styled.div`
width: 100%;
min-height: 100vh;
/* background: blue; */
display: grid;
grid-template-columns:70% 29%;
gap: 1rem;
`


const Comment =()=>{
  return(
    <div className='flex gap-2 py-2 border-b'>
      <div className='w-16 h-14 rounded-full bg-gray-200'></div>
      <div className='flex flex-col gap-2'>
        <p>
          <span className='font-semibold'>John Doe . </span>
          <span className='text-sm font-light text-gray-300'>25 April, 2023</span>
        </p>
        <p>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</p>
      </div>
    </div>
  )
}

const BlogContent =()=>{
  return(
    <article className='w-full h-screen bg-green-100 text-green-700 p-8 text-center rounded-lg text-3xl font-semibold mb-8'>
      BLOG CONTENT GOES HERE
    </article>
  )
}