import { forwardRef } from "react";
const GalleryCard = forwardRef(function GalleryCard(
  { alt, imgSrc, subheading, heading },
  ref
) {
  return (
    <div ref={ref} className="mx-3 md:mx-0">
      <div className="relative group">
        <img
          src={imgSrc}
          alt={alt}
          className="h-screen w-full object-cover object-center grayscale"
        ></img>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-3/4 lg:opacity-0 lg:group-hover:opacity-100 duration-300">
          <h3 className="text-[#373737] uppercase text-sm font-bold tracking-[3px] mb-2">
            {subheading || "earth"}
          </h3>
          <h2 className="text-white text-3xl lg:text-2xl font-bold mb-5 capitalize line-clamp-2 tracking-wide">
            {heading || alt}
          </h2>
          <a
            href="#"
            target="_blank"
            className="uppercase text-yellow-400 text-sm tracking-[2px] border-2 border-yellow-400 border-solid font-bold px-1"
          >
            View portfolio
          </a>
        </div>
      </div>
    </div>
  );
});
export default GalleryCard;
