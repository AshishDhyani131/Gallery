import { useState } from "react";
import { NavLink } from "react-router-dom";
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
              className="ionicon h-4 w-4 phone:h-8 phone:w-8 stroke-2"
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
          <h2 className="aside-bg-2 text-[2rem] phone:text-[2.5rem] sm:text-6xl font-bold  text-transparent  tracking-[1px] bg-clip-text bg-[center_19.4rem] mb-6">
            Mostudio
          </h2>
          <nav className="mb-28">
            <ul className="text-white flex flex-col uppercase gap-6 font-semibold text-[0.8rem] phone:text-base sm:text-lg tracking-[1px] ">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) => (isActive ? activeLink : link)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/gallery"}
                  className={({ isActive }) => (isActive ? activeLink : link)}
                >
                  gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) => (isActive ? activeLink : link)}
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/pricing"}
                  className={({ isActive }) => (isActive ? activeLink : link)}
                >
                  pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) => (isActive ? activeLink : link)}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <form action="" method="post">
            <h3 className="text-gray-400 uppercase text-xs phone:text-sm sm:text-lg font-semibold mb-2">
              Subscribe for newsletter
            </h3>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-transparent border rounded-none border-gray-400 border-solid p-2 phone:p-3 placeholder:text-gray-400 placeholder:text-sm focus:outline-none focus:text-gray-400"
              placeholder="Enter Email Address"
            />
          </form>
        </aside>
      </div>
    </>
  );
}
