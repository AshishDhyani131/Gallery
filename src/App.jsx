import Header from "./Header";
import Work1 from "./assets/work1.webp";
import Work2 from "./assets/work2.webp";
import Work3 from "./assets/work3.webp";
import Work4 from "./assets/work4.webp";
import Work5 from "./assets/work5.webp";
import Work6 from "./assets/work6.webp";
import Work7 from "./assets/work7.webp";
import Work8 from "./assets/work8.webp";
import Work9 from "./assets/work9.webp";
import GalleryCard from "./GalleryCard";
function App() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-[1fr_2fr]">
        <Header></Header>
        <main>
          <GalleryCard
            imgSrc={Work1}
            subheading="portrait"
            heading="Black & Gold Paint Face"
          ></GalleryCard>
          <GalleryCard
            imgSrc={Work2}
            subheading="Nature"
            heading="Green Leaves"
            order="first"
          ></GalleryCard>
          <GalleryCard
            imgSrc={Work3}
            subheading="Nature"
            heading="Coal"
          ></GalleryCard>
          <GalleryCard
            imgSrc={Work4}
            subheading="portrait"
            heading="Top Leaf"
            order="first"
          ></GalleryCard>
          <GalleryCard
            imgSrc={Work5}
            subheading="portrait"
            heading="Building"
          ></GalleryCard>
          <GalleryCard
            imgSrc={Work6}
            subheading="fashion"
            heading="Black Girl Model"
            order="first"
          ></GalleryCard>
          <GalleryCard
            imgSrc={Work7}
            subheading="animals"
            heading="Pug Puppy"
          ></GalleryCard>
          <GalleryCard
            imgSrc={Work8}
            subheading="nature"
            heading="White Flower"
            order="first"
          ></GalleryCard>
          <GalleryCard
            imgSrc={Work9}
            subheading="animals"
            heading="Turtle"
          ></GalleryCard>
        </main>
        <footer
          className="mx-3 block lg:col-start-2 lg:col-end-3 lg:mx-0
        "
        >
          <button className="bg-yellow-400 uppercase w-full cursor-pointer  text-black font-semibold py-4 ">
            Load more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="ionicon h-4 w-4 inline-block ml-1"
            >
              <path
                d="M320 146s24.36-12-64-12a160 160 0 10160 160"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M256 58l80 80-80 80"
              />
            </svg>
          </button>
        </footer>
      </div>
    </>
  );
}

export default App;
