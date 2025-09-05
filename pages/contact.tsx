
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { CiLocationOn } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";

import map from "../public/FreshVegs/map.png";

export default function ContactPage() {
  return (
    <>
      <Navbar/>
        <main className='flex flex-col items-center p-12'>
          <div>
            <h3>Contact Us</h3>
          </div>
          <div className="contact-container flex gap-4">
            <div className="p-2 rounded-md flex flex-col justify-between bg-white shadow-md">
              <div className="flex flex-col items-center">
                <span className='text-green-300 text-xl mt-2'><CiLocationOn/></span>
                <span>2715 Ash Dr. San Jose, South</span>
                <span>Dakota 83475</span>

              </div>
              <div className="flex flex-col items-center">
                <span className='text-green-300 text-xl mt-2' ><FaRegEnvelope/></span>
                <span>Proxy@gmail.com</span>
                <span>Help.proxy@gmail.com</span>

              </div>
              <div className="flex flex-col items-center">
                <span className='text-green-300 text-xl mt-2'><FiPhoneCall/></span>
                <span>(219) 555-0114</span>
                <span>(164) 333-0487</span>
              </div>
            </div>
            <div className="p-2 rounded-md flex flex-col gap-4 bg-white shadow-md">
              <div className="contact-text">
                <h2>Just Say Hello!</h2>
                <p>Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
              </div>
              <div className="contact-top flex justify-between">
                <input type="text" placeholder="Template Cookie" className='border rounded-md p-2'/>
                <input type="text" placeholder="zakirsoft@gmail.com" className='border rounded-md p-2' />

              </div>

              <div className="contact-middle flex flex-col">
                <input type="text" placeholder="Your message" className='border rounded-md p-2'/>
              </div>
              <div className="contact-bottom flex flex-col">
                <input type="text" placeholder="Subjects" className='border rounded-md p-2' />
              </div>
              <button className='py-2 px-4 text-white bg-green-500 rounded-full'>Send Message</button>

            </div>
          </div>
        </main>
        <section >
          <Image src={map} width={0} height={0} alt="Location map showing FreshVegs store location" />
        </section>
      
      <Footer/>
     
    </>
  );
}


