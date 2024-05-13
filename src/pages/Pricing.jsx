import React from "react";
import PriceCard from "../components/PriceCard";

const Pricing = () => {
  return (
    <div className="h-screen w-screen lg:w-auto grid  grid-cols-1 lg:grid-cols-4">
      <PriceCard bgImg={"bg-price-1"} heading={"Model Photography"}></PriceCard>
      <PriceCard
        bgImg={"bg-price-2"}
        heading={"Events Photography"}
      ></PriceCard>
      <PriceCard
        bgImg={"bg-price-3"}
        heading={"Corporate Photography"}
      ></PriceCard>
      <PriceCard
        bgImg={"bg-price-4"}
        heading={"Movies Photography"}
      ></PriceCard>
    </div>
  );
};

export default Pricing;
