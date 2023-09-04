import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
export default function Appointment() {
  return (
    <>
      <section className="bg-cover  bg-[url(https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?cs=srgb&dl=pexels-pixabay-236380.jpg&fm=jpg)]">
        <div className="bg-[#276aff] bg-opacity-50">
          <div className="w-11/12 sm:w-5/6 mx-auto top-0 inset-0">
            <section className="relative z-10 overflow-hidden  py-20 lg:py-[120px]">
              <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap lg:justify-between">
                  <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                    <div className=" mb-12 max-w-[570px] lg:mb-0">
                      <h2 className="text-dark mb-6 text-4xl text-white font-bold">
                        Make an Appointment now
                      </h2>
                      <p className=" text-white text-body-color mb-9 font-medium leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eius tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim adiqua minim veniam quis nostrud
                        exercitation ullamco
                      </p>
                      <div className="flex flex-col items-center sm:items-start ">
                        <div className=" mb-8 bg-white p-4 rounded-xl flex w-full max-w-[370px]">
                          <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                            <FaLocationDot className="text-2xl text-[#276aff]" />
                          </div>
                          <div className="w-full">
                            <h4 className="text-dark mb-1 text-xl font-bold">
                              Our Location
                            </h4>
                            <p className="text-body-color text-base">
                              99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                            </p>
                          </div>
                        </div>
                        <div className="mb-8 items-center bg-white p-4 rounded-xl flex w-full max-w-[370px]">
                          <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                            <FaPhoneAlt className="text-2xl text-[#276aff]" />
                          </div>
                          <div className="w-full">
                            <h4 className="text-dark mb-1 text-xl font-bold">
                              Phone Number
                            </h4>
                            <p className="text-body-color text-base">
                              (+62)81 414 257 9980
                            </p>
                          </div>
                        </div>
                        <div className="mb-8 items-center bg-white p-4 rounded-xl flex w-full max-w-[370px]">
                          <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                            <MdEmail className="text-2xl text-[#276aff]" />
                          </div>
                          <div className="w-full">
                            <h4 className="text-dark mb-1 text-xl font-bold">
                              Email Address
                            </h4>
                            <p className="text-body-color text-base">
                              info@yourdomain.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                    <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                      <form>
                        <div className="mb-6">
                          <h1 className="text-xl font-semibold pb-4">
                            Appointment Booking
                          </h1>
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                          />
                        </div>
                        <div className="mb-6">
                          <input
                            type="email"
                            placeholder="Your Email"
                            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                          />
                        </div>
                        <div className="mb-6 flex gap-2">
                          <input
                            type="text"
                            placeholder="Your Phone"
                            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                          />
                          <input
                            type="text"
                            placeholder="Gender"
                            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                          />
                        </div>
                        <div className="mb-6">
                          <textarea
                            rows="6"
                            placeholder="Your Message"
                            className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                          ></textarea>
                        </div>
                        <div className="mb-6 flex items-center justify-between">
                          <p className="font-medium">Pick a time</p>
                          <input
                            type="datetime-local"
                            placeholder="Choose your time"
                            className="text-body-color border-[f0f0f0] focus:border-primary w-72 rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="bg-[#276aff] border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
