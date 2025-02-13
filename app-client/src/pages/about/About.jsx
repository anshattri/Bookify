import React from 'react';
// import videoA from '../about/bookvid.mp4'
import image from '../about/download.jpg'
import BannerCard from '../shared/BannerCard'

const About = () => {
  return (
    <div>
        <div className="bg- px-4 lg:px-24 flex items-center">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40">
            {/* Right side - BannerCard component */}
            <div className="md:w-1/2 h-full">
                <BannerCard />
            </div>

            {/* Left side - Welcome message, search bar */}
            <div className="md:w-1/2 space-y-8">
                <h1 className="lg:text-4xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug">
                    About Us !!!
                </h1>
                <p className="text-gray-700">
                Welcome to our online bookstore <span className='text-purple-600 font-medium text-lg'>BOOKIFY</span>, your ultimate destination for discovering and enjoying a world of literature. We are passionate about connecting readers and authors, creating a vibrant platform where stories come to life. For readers, we offer an intuitive dashboard to explore, purchase, and track books while enjoying seamless payment options and order history. For authors, we provide a dynamic space to showcase their work, upload new editions, and engage with their audience through ratings and reviews. Whether you're here to lose yourself in a great story or to share your literary creations, our platform is designed to inspire and empower the love of reading and writing.
                </p>
            </div>
        </div>
    </div>



      {/* Story Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Story</h2>
          <p className="text-md md:text-lg text-gray-600 leading-relaxed">
            Founded in 2020, our bookstore began with a simple mission: to make books accessible to everyone, anywhere. 
            From rare classics to the latest bestsellers, we are passionate about connecting readers with their next great read.
          </p>
        </div>
      </section>

      {/* Team Section with Grid Layout */}
      <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">Meet the Team</h2>
        <div class="flex items-center space-x-80">
           <div class="flex flex-col text-xl">
           <img src={image} alt="Team Member" class="w-50 h-50 rounded-full object-cover" />
              <span class="font-semibold text-gray-800">ANSH</span>
              <span class="text-sm text-gray-500">Member 1</span>
            </div>


            <div class="flex flex-col text-lg">
            <img src={image} alt="Team Member" class="w-50 h-50 rounded-full object-cover" />
              <span class="font-semibold text-gray-800">ANSH SHUKLA</span>
              <span class="text-sm text-gray-500">Member 2</span>
            </div>

            <div class="flex flex-col text-xl">
            <img src={image} alt="Team Member" class="w-50 h-50 rounded-full object-cover" />
              <span class="font-semibold text-gray-800">ANSH DUVEDI</span>
              <span class="text-sm text-gray-500">Member 3</span>
            </div>

            <div class="flex flex-col text-xl">
            <img src={image} alt="Team Member" class="w-50 h-50 rounded-full object-cover" />
              <span class="font-semibold text-gray-800">AYUSH PALAD</span>
              <span class="text-sm text-gray-500">Member 4</span>
            </div>
        </div>
      </section>

      {/* Services Section with Parallax Effect */}
      <section className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('parallax-background.jpg')" }}>
        <div className="bg-black bg-opacity-50 py-16 px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl font-semibold text-center text-white mb-8">What We Offer</h2>
          <ul className="max-w-xl mx-auto text-center space-y-4">
            <li className="text-lg text-white hover:text-gray-300 transition-colors duration-300">📚 Wide range of books across genres</li>
            <li className="text-lg text-white hover:text-gray-300 transition-colors duration-300">🔍 Personalized book recommendations</li>
            <li className="text-lg text-white hover:text-gray-300 transition-colors duration-300">💸 Special discounts and offers</li>
            <li className="text-lg text-white hover:text-gray-300 transition-colors duration-300">🚚 Free shipping on orders over $50</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section with Slider */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="max-w-2xl mx-auto">
          {/* Simple Slider with TailwindCSS */}
          <div className="flex overflow-x-scroll no-scrollbar space-x-4">
            {/* Testimonial Card */}
            <div className="min-w-full md:min-w-[400px] p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg italic text-gray-600">
                "A fantastic place to find all my favorite books! Great service and quick delivery." - John Smith
              </p>
            </div>
            {/* Repeat for other testimonials */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r bg-white text-center text-black">
        <h2 className="text-4xl font-semibold mb-6">Join Our Reading Community!</h2>
        <p className="text-lg mb-8">Explore our vast collection and find your next favorite book today.</p>
        <button className="bg-white text-purple-500 py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105" 
          onClick={() => window.location.href = '/shop'}>
          Browse Books
        </button>
      </section>

      
    </div>
  );
};

export default About;