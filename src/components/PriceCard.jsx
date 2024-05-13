import React from "react";

const PriceCard = ({ bgImg, heading }) => {
  return (
    <div
      className={`w-full h-full ${bgImg} bg-center bg-cover px-8  py-12 lg:px-4`}
    >
      <h1 className="text-white text-2xl">{heading}</h1>
      <div className="my-5">
        <div className="mb-4">
          <h4 className="uppercase text-white/75 font-semibold text-sm">
            Photos
          </h4>
          <p className="text-white text-sm mt-1">Package of 50</p>
        </div>
        <div className="mb-4">
          <h4 className="uppercase text-white/75 font-semibold text-sm">
            Processing
          </h4>
          <p className="text-white text-sm mt-1">Retouch</p>
        </div>
        <div className="mb-4">
          <h4 className="uppercase text-white/75 font-semibold text-sm">
            type of camera
          </h4>
          <p className="text-white text-sm mt-1">Semi Professional</p>
        </div>
        <div className="mb-4">
          <h4 className="uppercase text-white/75 font-semibold text-sm">
            Resolution
          </h4>
          <p className="text-white text-sm mt-1">12 MP</p>
        </div>
        <div className="mb-4">
          <h4 className="uppercase text-white/75 font-semibold text-sm">
            Term
          </h4>
          <p className="text-white text-sm mt-1">14 Days</p>
        </div>
      </div>
      <h3 className="text-3xl font-bold text-white">$50</h3>
      <a
        href="#"
        target="_blank"
        className="uppercase text-yellow-400 text-sm tracking-[2px] border-2 border-yellow-400 border-solid font-bold px-1"
      >
        Explore
      </a>
    </div>
  );
};

export default PriceCard;
