import React from "react";
import { useState, useRef, useCallback } from "react";
import useFetchImages from "../hooks/useFetchImages";

import HomeCard from "../components/HomeCard";
import GalleryCard from "../components/GalleryCard";

const Gallery = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {imageGallery.map((item, index) => {
        if (index + 1 === imageGallery.length) {
          return (
            <GalleryCard
              imgSrc={item.imgSrc}
              subheading={item.subheading}
              heading={item.heading}
              alt={item.alt}
              order={index % 2 ? "first" : "second"}
              key={item.id}
              ref={lastImageElementRef}
            ></GalleryCard>
          );
        }
        return (
          <GalleryCard
            imgSrc={item.imgSrc}
            subheading={item.subheading}
            heading={item.heading}
            alt={item.alt}
            order={index % 2 ? "first" : "second"}
            key={item.id}
          ></GalleryCard>
        );
      })}
      {isLoading && (
        <p className="text-white text-3xl uppercase">Loading....</p>
      )}
      {isError && (
        <p className="text-white text-3xl uppercase">An error occured...</p>
      )}
    </div>
  );
};

export default Gallery;
