import React from 'react';

const Hero = () => {
  return (
    <div className="bg-hero bg-center bg-cover h-[20vh] md:h-[30vh] grid place-items-center rounded-2xl p-5">
      <div className="text-white text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
          Book accommodation with Tripster
        </h1>
        <p className="md:text-lg lg:text-xl">
          1,340,076 rooms worldwide are waiting for you!
        </p>
      </div>
    </div>
  );
};

export default Hero;
