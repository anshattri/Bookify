import React from 'react'
import videoA from '../about/bookvid.mp4'

export const Banner = () => {
    return (
    //     <div className="bg- px-4 lg:px-24 flex items-center">
    //     <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40">
    //         {/* Right side - BannerCard component */}
    //         <div className="md:w-1/2 h-full">
    //             <BannerCard />
    //         </div>

    //         {/* Left side - Welcome message, search bar */}
    //         <div className="md:w-1/2 space-y-8">
    //             <h1 className="lg:text-4xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug">
    //                 Hello, welcome here to learn something <span className='text-purple-600'> new every day !!! </span>
    //             </h1>
    //             <p className="text-gray-700">
    //                 Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.
    //             </p>
    //             <div className="py-10">
    //                 <input
    //                     type="search"
    //                     placeholder="Search a book here"
    //                     className="py-2 px-2 rounded-s-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //                 />
    //                 <button className="bg-blue-700 px-6 py-2 ml-2 text-white font-medium rounded hover:bg-black transition-all ease-in duration-200">
    //                     Search
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div className="relative bg-gray-100 overflow-hidden">
      {/* Video Background Section */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoA} type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white px-4">
          <h1 className="text-5xl md:text-5xl font-extrabold mb-4 tracking-wide">
            Hello, welcome here to learn something
          </h1>
          <p className="text-lg md:text-3xl text-center max-w-2xl">
            <span className='text-white font-medium'> new every day !!! </span>
          </p>
        </div>
      </div>
    </div>
    )
}
