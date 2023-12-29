import { useState } from "react";
export default function Header() {
  const link =
    "border-b-2 border-transparent hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 duration-300";
  const activeLink =
    "text-yellow-400 border-b-2 border-text-yellow-400 border-yellow-400";
  const [isNavVisible, setNavVisible] = useState(false);
  function handleClick() {
    setNavVisible((prev) => !prev);
  }
  const asideClasses = `fixed h-screen w-7/12 inset-0 z-50 aside-bg-1 px-6 py-8 sm:px-10 sm:py-12 ${
    isNavVisible ? "" : "-translate-x-full"
  } duration-300 lg:translate-x-0 lg:z-0 lg:w-1/3`;
  return (
    <>
      <div>
        <div
          className="text-white fixed top-2 left-1 z-10 cursor-pointer hover:scale-105 duration-200 lg:hidden"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon h-9 w-8 stroke-2"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M80 160h352M80 256h352M80 352h352"
            />
          </svg>
        </div>
        <aside className={asideClasses}>
          <div
            className="close-container absolute top-4 right-4 text-white cursor-pointer lg:hidden"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="ionicon h-8 w-8 stroke-2"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </div>
          <h2 className="aside-bg-2 text-[2.5rem] sm:text-6xl font-bold  text-transparent  tracking-[1px] bg-clip-text bg-[center_19.4rem] mb-6">
            Mostudio
          </h2>
          <nav className="mb-28">
            <ul className="text-white flex flex-col uppercase gap-6 font-semibold text-base tracking-[1px] ">
              <li>
                <a href="#" className={activeLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className={link}>
                  gallery
                </a>
              </li>
              <li>
                <a href="#" className={link}>
                  about
                </a>
              </li>
              <li>
                <a href="#" className={link}>
                  pricing
                </a>
              </li>
              <li>
                <a href="#" className={link}>
                  contact
                </a>
              </li>
            </ul>
          </nav>
          <form action="" method="post">
            <h3 className="text-gray-400 uppercase text-sm font-semibold mb-2">
              Subscribe for newsletter
            </h3>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-transparent border rounded-none border-gray-400 border-solid p-3 placeholder:text-gray-400 placeholder:text-sm focus:outline-none focus:text-gray-400"
              placeholder="Enter Email Address"
            />
          </form>
        </aside>
      </div>
    </>
  );
}
