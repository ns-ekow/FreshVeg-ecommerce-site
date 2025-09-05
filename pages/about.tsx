
import Layout from "../components/layout";
import styled from "styled-components";
import TeamCard from "../components/teamcard";
import Image from "next/image";
import farmer from '../public/FreshVegs/Image-4.png'
import woman from '../public/FreshVegs/woman.png'
import woman2 from '../public/FreshVegs/Image-3.png'
import { Button } from "../components/ui/button";

export default function About() {
  return (
    <>
      <Layout>
        <AboutStyled>
          <h3>ABOUT US</h3>
          <section className="first" >
            <div className="text-content flex flex-col gap-8 text-lg">
              <h3>100% Trusted Organic Vegies Store</h3>
              <p><strong>Freshvegs</strong> is a Ghanaian agriculture start-up that offers an online marketplace for consumers to shop fresh and quality vegetables and have it delivered at your doorstep or at your preferred location within the shortest possible time. We make sure your favourite vegetables are delivered to you right on time for that special recipe that gives you the best nutritional value and satisfaction.</p>
              <p>We provide a wide range of fresh, quality vegetables at very affordable prices compared to the open market. We save you the hassle of commuting from home to marketplaces and the stress of moving from one vendor shed to other just to find affordable fresh quality vegetables.</p>
            </div>
            <div className="image">
              <Image src={farmer} width={0} height={0} alt="" className="rounded-sm"/>
            </div>
          </section>
          <section className="experience">
            <div className="image">
              <Image src={woman} width={0} height={0} alt="" className="rounded-sm"/>
            </div>
            <div className="text-content">
              <h2>Experience Our Story...</h2>
              <p>At Freshvegs, we value where we started from, what we have done so far. Our journey is essential to what we want to achieve and where we want to be.</p>
              <div>
              </div>
              
            </div>
          </section>
          <section className="mission">
            <div className="text-content">
              <h3>Our Vision & Mission</h3>
              <div className="flex flex-col gap-4 mb-4">
                <h4>Vision</h4>
                <p>Establish a sustainable food system with the help of technology to contribute to zero post-harvest losses, enhance productivity, improve food security as well as improve economic wellbeing of smallholder farmers.</p>
              </div>
              <div className="flex flex-col gap-4 mb-4">
                <h4>Mision</h4>
                <p>Freshvegs aims to use technology to become the leading agriculture supply chain platform for vegetables in Africa, by transforming the means fresh vegetables are sourced from producers, transported, handled and sold to consumers.</p>
              </div>
              <Button>Shop Now</Button>
            </div>
            <div className="image-larger">
              <Image src={woman2} width={0} height={0} alt="" className="rounded-sm"/>
            </div>
          </section>
          <section className="team">
            <div>
              <h3>Our Awesome team</h3>
              <p>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.g</p>
            </div>
            <div className="team-container">
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
            </div>
          </section>
          <section className="tesimonial-section bg-gray-100 mt-41">
            <div>
              <h3>Client Testimonial</h3>
              <div>
                <span>l</span>
                <span>r</span>
              </div>
            </div>
            <div className="testimonial-container p-10 flex gap-4 ">
              <div className="testimonial-card w-[400px] h-[250px] bg-white rounded-sm p-16">
                <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                <div className="flex justify-between items-center"> <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-400">
                  </div>
                  <div className="flex flex-col">
                    <h4>John Doe</h4>
                    <p>Customer</p>
                  </div>
                    
                </div>
                </div>
              </div>
              <div className="testimonial-card w-[400px] h-[250px] bg-white rounded-sm p-16">
                <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                <div className="flex justify-between items-center"> <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-400">
                  </div>
                  <div className="flex flex-col">
                    <h4>John Doe</h4>
                    <p>Customer</p>
                  </div>
                    
                </div>
                </div>
              </div>
              <div className="testimonial-card w-[400px] h-[250px] bg-white rounded-sm p-16">
                <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                <div className="flex justify-between items-center"> <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-400">
                  </div>
                  <div className="flex flex-col">
                    <h4>John Doe</h4>
                    <p>Customer</p>
                  </div>
                    
                </div>
                </div>
              </div>
              
            </div>
          </section>
          <section className="sponsors">
          </section>
          
        </AboutStyled>
      </Layout>
    </>
  );
}


const AboutStyled = styled.div`
  width: 100%;
  height: 100%;
  /* background: yellow; */
  display: flex;
  flex-direction: column;

  .team{
    width: 100%;
  }

  .team-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .first, .experience, .mission{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 3rem;
    
  }

  .mission{
    border-top: 1px solid gray;;
    padding: 1rem;
  }
  
`;