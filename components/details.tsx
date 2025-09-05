
export default function Details(){
  return(
    <div className="w-full h-fit grid grid-cols-2 p-4">
      <div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 border-b py-2 border-gray-400">
          <div className="flex flex-row gap-2">
            <h1 className="text-2xl font-semibold">Chinese Cabbage</h1>
            <span className="p-1 rounded-md bg-green-200 text-green-600">In Stock</span>
          </div>
          <div className="flex flex-row gap-2">
            <span>4 reviews</span>
            <span>.</span>
            <span>SKU: 2,51,594</span>
          </div>
          <div className="flex flex-row gap-2">
            <span className="text-gray-400 text-md line-through">GHC 48.00 </span>
            <span className="text-2xl text-green-500 font-semibold">GHS 17.28</span>
            <span className="p-1 rounded-2xl bg-rose-300">64% Off</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-b py-2 border-gray-400">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <span>Brand: </span>
              <div className="w-10 h-10 border border-gray-400 rounded-md"></div>
            </div>
            <div>
              Share Item:
            </div>
          </div>
          <div>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar</p>
          </div>
           
        </div>
        <div className="flex flex-col gap-2 border-b py-2 border-gray-400">
          <div></div>
          <button className="w-full p-2 bg-green-500 text-white rounded-full hover:bg-green-600">Add to cart</button>
          <div className="w-13 h-13 rounded-full bg-green-200"></div>
        </div>
        <div className="flex flex-col gap-2 ">
          <p><span className="font-semibold">Category: </span>Vegetables</p>
          <div className="flex flex-row">
            <span className="font-semibold">Tag: </span> 
            <ul className="flex flex-row gap-4">
              <li className="hover:underline">Vegetables</li>
              <li className="hover:underline">Healthy</li>
              <li className="hover:underline">Chinese</li>
              <li className="hover:underline">Green</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}