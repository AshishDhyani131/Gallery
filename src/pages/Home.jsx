import { useState, useCallback, useRef } from "react";
import React from "react";
import HomeCard from "../components/HomeCard";
import useFetchImages from "../hooks/useFetchImages";

const Home = () => {
  const [count, setCount] = useState(1);
  const { imageGallery, isLoading, isError } = useFetchImages(count);

  const observer = useRef();
  const lastImageElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setCount((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );
  return (
    <>
      {imageGallery.map((item, index) => {
        if (index + 1 === imageGallery.length) {
          return (
            <HomeCard
              imgSrc={item.imgSrc}
              subheading={item.subheading}
              heading={item.heading}
              alt={item.alt}
              order={index % 2 ? "first" : "second"}
              key={item.id}
              ref={lastImageElementRef}
            ></HomeCard>
          );
        }
        return (
          <HomeCard
            imgSrc={item.imgSrc}
            subheading={item.subheading}
            heading={item.heading}
            alt={item.alt}
            order={index % 2 ? "first" : "second"}
            key={item.id}
          ></HomeCard>
        );
      })}
      {isLoading && (
        <p className="text-white text-3xl uppercase">Loading....</p>
      )}
      {isError && (
        <p className="text-white text-3xl uppercase">An error occured...</p>
      )}
    </>
  );
};

export default Home;
