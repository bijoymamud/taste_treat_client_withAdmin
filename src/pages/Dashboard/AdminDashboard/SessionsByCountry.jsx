import React from "react";

const SessionsByCountry = () => {
  return (
    <div className=" mx-auto  rounded-lg px-2   ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 px-2 ">Sessions by Country</h2>
      
      {/* World Map with Countries */}
      <div className="relative h-64  rounded-lg">
        <img
          src="https://pngimg.com/d/world_map_PNG25.png"
          alt="World Map"
          className="absolute inset-0 object-cover w-full h-full rounded-lg  "
        />
        
        {/* Country Labels */}
        <div className="absolute top-10 left-20">
          <span className="text-sm font-medium text-gray-700">Canada</span>
        </div>
        <div className="absolute top-20 left-16">
          <span className="text-sm font-medium text-gray-700">United States</span>
        </div>
        <div className="absolute bottom-20 left-28">
          <span className="text-sm font-medium text-gray-700">Brazil</span>
        </div>
        <div className="absolute top-12 right-28">
          <span className="text-sm font-medium text-gray-700">Russia</span>
        </div>
        <div className="absolute top-24 right-28">
          <span className="text-sm font-medium text-gray-700">China</span>
        </div>
      </div>

      {/* Session Data */}
      <div className="mt-6 flex justify-between text-gray-600 px-2">
        <div>
          <p className="text-base pt-2 text-green-500 font-bold">This Week</p>
          <p className="text-xl font-semibold  text-black">23.5k</p>
        </div>
        <div>
          <p className="text-base pt-2 text-amber-500 font-bold">Last Week</p>
          <p className="text-xl font-semibold text-black">41.05k</p>
        </div>
      </div>
    </div>
  );
};

export default SessionsByCountry;
