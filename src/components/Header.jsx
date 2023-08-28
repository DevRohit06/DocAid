import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
export default function Header() {
  const [mobile, setmobile] = useState(false);
  function mobileView() {
    setmobile(!mobile);
  }
  return (
    <>
      <div className="bg-[#276aff] py-4 flex items-center  top-0 inset-0 ">
        <div className="w-5/6 mx-auto ">
          <div className="flex items-start sm:items-center gap-2 flex-col sm:flex-row ">
            <div className="flex items-center gap-2">
              <BsFillTelephoneFill color="white" />
              <h1 className="text-white font-semibold">+012 (345) 6789</h1>
            </div>
            <div className="flex items-center gap-2 sm:ml-8 ml-0">
              <MdEmail color="white" className="text-xl" />
              <h1 className="text-white font-semibold">docaid@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
      <header className="w-5/6 mx-auto py-4">
        <nav className="flex items-center justify-between">
          <div>
            <h1 className="sm:text-5xl text-3xl font-bold">
              <span className="text-[#010a44]">Doc</span>
              <span className="text-[#276aff]">Aid</span>
            </h1>
          </div>
          <div className="md:hidden hidden sm:hidden xl:flex items-center gap-8 text-[#565972] ">
            <a href="">Home</a>
            <a href="">Find Doctor</a>
            <a href="">Our Services</a>
            <a href="">How It Works</a>
            <a href="">Contact Us</a>
          </div>
          <a
            className="py-4 px-5 bg-[#276aff] text-white rounded-lg md:hidden hidden sm:hidden xl:block"
            href=""
          >
            Book Now
          </a>
          {/* mobile menu */}
          <button onClick={mobileView} className="md:block xl:hidden">
            <HiMenuAlt3 className="sm:text-4xl text-3xl" />
          </button>
        </nav>
        {mobile ? (
          <div className="mt-12 text-xl flex flex-col md:flex xl:hidden items-center gap-8 text-[#565972] ">
            <a href="">Home</a>
            <a href="">Find Doctor</a>
            <a href="">Our Services</a>
            <a href="">How It Works</a>
            <a href="">Contact Us</a>
            <a className="py-4 px-5 bg-[#276aff] text-white rounded-lg" href="">
              Book Now
            </a>
          </div>
        ) : null}
      </header>
    </>
  );
}
