export default function Contact() {
    return (
      <>
       
       <div className="md:mx-auto md:container px-4">
            <div className="pt-10 md:pt-40">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center pb-12">
                        <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                            <div className="py-2 text-color">
                                <h1 role="heading" className="text-2xl dark:text-black  lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">Boost adoption of product and services</h1>
                                <p role="contentinfo" className="text-lg text-gray-600 lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</p>
                                <button className="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                                    <span aria-label="lets get started" role="button" className="focus outline-none f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700 dark:text-indigo-400">Lets Get Started</span>
                                    <div className="pl-2">
                                       <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg" alt="arrow"/>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                            <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png" alt="A girl enjoying in sunlight" role="img" />
                            <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                                <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                    <div className="flex items-center">
                                        <div className="p-4 bg-yellow-200 rounded-md">
                                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg2.svg" alt="icon"/>
                                        </div>
                                        <div className="ml-6">
                                            <p className="mb-1 leading-5 text-gray-800 font-bold text-2xl">2,330</p>
                                            <p className="text-gray-600 dark:text-gray-200 text-sm tracking-normal font-normal leading-5">Avg Sales</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center pl-3 text-green-400">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg3.svg" alt="arrow"/>
                                            <p className="text-green-700 text-xs tracking-wide font-bold leading-normal pl-1">7.2%</p>
                                        </div>
                                        <p className="font-normal text-xs text-right leading-4 text-green-700 tracking-normal">Increase</p>
                                    </div>
                                </div>
                                <div className="relative mb-3">
                                    <hr className="h-1 rounded-sm bg-gray-200" />
                                    <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                                </div>
                                <h2 className="text-base text-gray-600 dark:text-gray-200 font-normal tracking-normal leading-5">Yearly Goal</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        
                        
        </div>
    
      </>
    );
  }