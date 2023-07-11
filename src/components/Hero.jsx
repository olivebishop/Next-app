import React from "react";
const HeroPage = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black text-white">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="/assets/hero.jpeg"
          alt="TukTuk App"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 p-10">
        <h1 className="text-6xl font-bold mb-6 mt-20">ITISHA UBEBWE</h1>
        <p className="text-2xl mb-10 font-bold ">
          Call us for your next trip <br/> tunakubebea mizigo yako popte pale
        </p>
        <div className="mb-6">
          <button className="bg-purple-500 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded">
            Download Now
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 ml-4 rounded">
            Get Started
          </button>
        </div>
        <p className="font-bold">
          Call us now at: <span className="font-normal">0799799223</span>
        </p>
      </div>
    </div>
  );
};

export default HeroPage;
