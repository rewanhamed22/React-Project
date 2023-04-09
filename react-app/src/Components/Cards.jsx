import React from "react";

const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto -mb-6 p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        {/* <div className="absolute w-full h-full bg-black/25 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Post</p>
          <p className="px-2">Lorem ipsum, consectetur .</p>
          <button className="btn border-white bg-white capitalize text-black mx-2 absolute bottom-4 ">
            Read More
          </button>
        </div> */}
        <img
          className="max-h-[160px] md:max-h-[200px] object-cover rounded-xl  absolute inset-0 h-full w-full scale-100 hover:scale-110 cursor-pointer ease-in duration-300 "
          src="src/assets/3.jpg"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/* <div className="absolute w-full h-full bg-black/25 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Post</p>
          <p className="px-2">Lorem ipsum, consectetur .</p>
          <button className="btn border-white bg-white capitalize text-black mx-2 absolute bottom-4 ">
            Read More
          </button> 
        </div> */}
        <img
          className="max-h-[160px] md:max-h-[200px] object-cover rounded-xl  absolute inset-0 h-full w-full scale-100 hover:scale-110 cursor-pointer ease-in duration-300 "
          src="src/assets/1.jpg"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/* <div className="absolute w-full h-full bg-black/25 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Post</p>
          <p className="px-2">Lorem ipsum, consectetur .</p>
          <button className="btn  border-white bg-white capitalize text-black mx-2 absolute bottom-4 ">
            Read More
          </button> 
        </div> */}
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl inset-0 h-full scale-100 hover:scale-110 cursor-pointer ease-in duration-300 "
          src="src/assets/3.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cards;
