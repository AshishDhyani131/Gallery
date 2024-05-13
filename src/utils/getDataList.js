export async function getDataList() {
  const url = `https://api.unsplash.com/photos/random?count=5&client_id=${
    import.meta.env.VITE_UNSPLASH_API_KEY
  }`;
  // let newImages = localStorage.getItem("images");
  // // console.log(url);
  // if (newImages) {
  //   return JSON.parse(newImages);
  // }
  // console.log("response");
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) throw new Error("An error occured");
  const newImages = data.map((item) => {
    return {
      id: item.id,
      imgSrc: item.urls.regular,
      subheading: item.location.name,
      heading: item.description,
      alt: item.alt_description,
    };
  });
  // localStorage.setItem("images", JSON.stringify(newImages));
  return newImages;
}
