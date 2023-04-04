import React from "react";

const Hero = () => {
  return (
    // <div className='max-w-[1640px] mx-auto p-4'>
    //     <div className='max-h-[500px] relative'>
    //         <div className='absolute w-full h-full max-h-[500px] bg-black/10 flex flex-col justify-center '>
    //             <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#76A7B0]'>Keep <span className='text-gray-200'>The</span></h1>
    //             <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  text-[#E6EAE8]'>Good <span className='text-[#272B51]'>Vibes</span></h1>

    //         </div>
    //         <img className='w-full max-h-[500px] object-fill' src="https://images.unsplash.com/photo-1660469767191-f03463ecde2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
    //     </div>
    // </div>
    // <div className=""/>
    //   className="hero min-h-screen"
    //   style={{
    //     backgroundImage: `url("https://images.unsplash.com/photo-1660469767191-f03463ecde2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
    //   }}
    // >
    //   <div className="hero-overlay bg-opacity-40"></div>
    //   <div className="hero-content text-center text-neutral-content">
    // <div className="max-w-md">
    //   <h2 className="mb-5 text-5xl font-bold text-[#E6EAE8] ">Keep The Good</h2>
    //   <h2 className="mb-5 text-5xl font-bold text-[#E6EAE8] text-center ">Vibes</h2>
    // </div>
    //   </div>
    <div className="max-w-[1640px] mx-auto flex flex-col justify-between lg:flex-row  lg:justify-center">
      <div className="content  ">
        <h2 className="mb-5 text-6xl lg:justify-center text-[#487EB0] ">
          MENTAL
        </h2>
        <h2 className="mb-5 text-6xl  text-[#705D9D] ">HEALTH</h2>
        <p className="text-3xl text-black/70">Keep the good Vibes</p>
      </div>
      <div className="lg:image ">
        <img src="src/assets/5861493-ai (1).png" />
      </div>
    </div>
  );
};

export default Hero;
