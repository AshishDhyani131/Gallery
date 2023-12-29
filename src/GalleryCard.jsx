export default function GalleryCard({
  imgSrc,
  subheading,
  heading,
  order = false,
}) {
  const descClass = `px-10  my-auto  ${
    order ? "sm:order-first sm:text-right" : "sm:order-last sm:text-left"
  } lg:px-16`;
  return (
    <div className="grid grid-cols-1 mx-3 sm:grid-cols-2 lg:mx-0">
      <div className="relative group">
        <img
          src={imgSrc}
          alt="gallery-img"
          className="h-screen w-full object-cover object-center"
        ></img>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white border-solid p-1 opacity-0  group-hover:opacity-100 duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
            />
          </svg>
        </div>
      </div>
      <div className={descClass}>
        <h3 className="text-[#373737] uppercase text-sm font-bold tracking-[3px] mb-2">
          {subheading}
        </h3>
        <h2 className="text-white text-4xl font-bold mb-5">{heading}</h2>

        <p className=" text-white/25 text-base font-normal mb-8">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove.
        </p>
        <a
          href="#"
          target="_blank"
          className="uppercase text-yellow-400 text-sm tracking-[2px] border-2 border-yellow-400 border-solid font-bold px-1"
        >
          View portfolio
        </a>
      </div>
    </div>
  );
}
