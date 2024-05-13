import React from "react";
import { useState, useEffect } from "react";
import { getDataList } from "../utils/getDataList";
const useFetchImages = (count) => {
  const [imageGallery, setImageGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // console.log(url);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getDataList()
      .then((result) => setImageGallery((prev) => [...prev, ...result]))
      .catch((e) => {
        console.log(e.message);
        setIsError(true);
      });
    setIsLoading(false);
  }, [count]);

  return { imageGallery, isLoading, isError };
};

export default useFetchImages;
