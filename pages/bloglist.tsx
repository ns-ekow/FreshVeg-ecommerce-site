import Layout from '../components/layout';
import styled from 'styled-components';
import BlogCard from '../components/blogcard';
import BlogNav from '../components/blognav';
import Link from 'next/link';



export default function BlogList(){
  return(
    <>
      <Layout>
       <ListStyled>
         <div className='left-col'>
          <BlogNav/>
         </div>
         <div className='right-col'>
           <div className='top'>
             
           </div>
           <div className='blog-list'>
             <Link href='/singleblog'>
                <BlogCard />
             </Link>
             <Link href='/singleblog'>
                <BlogCard />
             </Link>
             <Link href='/singleblog'>
                <BlogCard />
             </Link>
             <Link href='/singleblog'>
                <BlogCard />
             </Link>
             <Link href='/singleblog'>
                <BlogCard />
             </Link>
             <Link href='/singleblog'>
                <BlogCard />
             </Link>
             <Link href='/singleblog'>
                <BlogCard />
             </Link>
             <Link href='/singleblog'>
                <BlogCard />
             </Link>
             <Link href='/singleblog'>
                <BlogCard />
             </Link>
             
             
           </div>
         </div>
         
       </ListStyled>
          
      </Layout>
    </>
  )
}



const ListStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background: blue; */
  display: grid;
  grid-template-columns: 29% 70%;
  gap: 1rem;

  .left-col{
    max-height: 1250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    .search{
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      padding: 8px;
      border-bottom: 1px solid grey;
    }

    .category{
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 4px;
      
    }

    .gallery-images{
      display: flex; 
      flex-wrap: wrap;
      gap: 4px;

      .img{
        border-radius: 8px;
      }
    }

    .recently-card{
      display: flex;
      gap: 8px;
      padding: 8px;

      .recent-card-content{
        display: flex; 
        flex-direction: column;
      }
    }
  }

  .blog-list{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    
  }
`