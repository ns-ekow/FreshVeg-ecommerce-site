
import Image from "next/image";
import pic from "../public/FreshVegs/Image-5.png";

const NewsCard = ()=>{
  return(
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm max-w-[400px]">
      <Image src={pic} alt="news" width={0} height={0} objectFit="cover" />
        

      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
          pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
          mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>

        <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600">
          Read More

          <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
            &rarr;
          </span>
        </a>
      </div>
    </article>
  )
}

export default NewsCard;





