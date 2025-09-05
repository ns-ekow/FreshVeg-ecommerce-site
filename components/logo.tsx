
import Image from "next/image";
import icon from "../public/FreshVegs/freshvegs1 1.png";

export default function Logo(){
  return(
    <>
      <Image src={icon} alt='freshVegs' width={195} height={57}/>
    </>

  )
}