import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:mx-0 lg:h-screen">
      <form className="px-8 py-10">
        <h2 className="uppercase text-3xl text-white">Get in touch</h2>
        <div className="mt-6 flex flex-col gap-4">
          <label
            htmlFor="name"
            className="uppercase text-white/50 text-sm font-semibold"
          >
            Name
          </label>
          <input
            type="text"
            className="placeholder:text-white/75 text-sm text-white/75 focus:border-b focus:outline-none bg-transparent pb-2 border-b  border-b-white/75 border-solid
             "
            id="name"
            placeholder={"Name"}
          />
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <label
            htmlFor="email"
            className="uppercase text-white/50 text-sm font-semibold"
          >
            Email Address
          </label>
          <input
            type="text"
            className="placeholder:text-white/75 text-sm text-white/75 focus:border-b focus:outline-none bg-transparent pb-2 border-b  border-b-white/75 border-solid
             "
            id="email"
            placeholder={"Email"}
          />
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <label
            htmlFor="subject"
            className="uppercase text-white/50 text-sm font-semibold"
          >
            Subject
          </label>
          <input
            type="text"
            className="placeholder:text-white/75 text-sm text-white/75 focus:border-b focus:outline-none bg-transparent pb-2 border-b  border-b-white/75 border-solid
             "
            id="subject"
            placeholder={"Subject"}
          />
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <label
            htmlFor="message"
            className="uppercase text-white/50 text-sm font-semibold"
          >
            message
          </label>
          <textarea
            className="placeholder:text-white/75 text-sm text-white/75 focus:border-b focus:outline-none bg-transparent pb-2 border-b  border-b-white/75 border-solid
             "
            id="message"
            placeholder={"Message"}
          />
        </div>

        <input
          type="submit"
          value={"Send Message"}
          className="bg-yellow-400 mt-6 px-4 py-2 rounded-full"
        />
      </form>
      <div className="bg-yellow-400 px-8 pt-10 pb-12">
        <h2 className="text-[1.7rem] font-extralight">Let's get in touch</h2>
        <p className="mt-3 text-sm">
          We're open for any suggestion or just to have a chat
        </p>
        <div className="mt-6 flex gap-4  items-start">
          <div className="p-2 border  border-solid border-black rounded-full">
            <FaLocationDot size={16} />
          </div>
          <div>
            <span className="font-semibold">Address:</span>
            198 West 21th Street, Suite 721 New York NY 10016
          </div>
        </div>
        <div className="mt-6 flex gap-4 items-start">
          <div className="p-2 border  border-solid border-black rounded-full">
            <FaPhoneAlt size={16} />
          </div>
          <div>
            <span className="font-semibold">Phone:</span>
            +1235 2355 98
          </div>
        </div>
        <div className="mt-6 flex gap-4 items-start">
          <div className="p-2 border  border-solid border-black rounded-full">
            <FaPaperPlane size={16} />
          </div>
          <div>
            <span className="font-semibold">Email:</span>
            info@yoursite.com
          </div>
        </div>
        <div className="mt-6 flex gap-4 items-start">
          <div className="p-2 border  border-solid border-black rounded-full">
            <FaEarthAmericas size={16} />
          </div>
          <div>
            <span className="font-semibold">Website:</span>
            yourWebsite.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
