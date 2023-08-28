import {AiFillInstagram, AiFillFacebook, AiFillLinkedin} from "react-icons/ai"
export default function Team() {
  return (
    <>
      <section className="w-full bg-[#f4f8fb] pb-12">
        <div className="w-5/6 mx-auto pt-28">
          <div className="mt-12">
            <h1 className="sm:text-4xl text-3xl text-center text-[#010a44] font-bold">
              Meet Our Experience Doctor
            </h1>
            <p className="text-center text-[#565972] sm:text-xl text-base sm:w-3/6 w-full mx-auto py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className=" mx-auto grid sm:grid-cols-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:gap-24 gap-6 mt-12">
            <div className=" w-full bg-white rounded-xl">
              <div className="p-6  rounded-xl">
                <img
                  className="rounded-xl "
                  src="https://media.licdn.com/dms/image/C4D03AQE7YScjLU4qhQ/profile-displayphoto-shrink_800_800/0/1584844567410?e=2147483647&v=beta&t=kfCdZUdTLS654Rtigf8QjpaUXT1DyvbaICarBIonbQg"
                  alt=""
                />
                <h1 className="text-xl font-semibold pt-2 text-center">Dr. Ken Redcross</h1>
                <p className="text-center">CardioLogy Specialist</p>
                <div className="flex gap-2 pt-2 items-center justify-center">
                    <AiFillFacebook className="text-3xl text-[#343434] hover:text-[#276aff]"/>
                    <AiFillInstagram className="text-3xl text-[#343434] hover:text-[#276aff]"/>
                    <AiFillLinkedin className="text-3xl text-[#343434] hover:text-[#276aff]"/>
                </div>
              </div>
            </div>
            <div className=" w-full bg-white rounded-xl">
              <div className="p-6  rounded-xl">
                <img
                  className="rounded-xl "
                  src="https://www.jeanlouismedical.com/img/doctor-profile-small.png"
                  alt=""
                />
                <h1 className="text-xl font-semibold pt-2 text-center">Dr. Ken Redcross</h1>
                <p className="text-center">CardioLogy Specialist</p>
                <div className="flex gap-2 pt-2 items-center justify-center">
                    <AiFillFacebook className="text-3xl text-[#343434] hover:text-[#276aff]"/>
                    <AiFillInstagram className="text-3xl text-[#343434] hover:text-[#276aff]"/>
                    <AiFillLinkedin className="text-3xl text-[#343434] hover:text-[#276aff]"/>
                </div>
              </div>
            </div>
            <div className=" w-full bg-white rounded-xl">
              <div className="p-6  rounded-xl">
                <img
                  className="rounded-xl "
                  src="https://media.licdn.com/dms/image/D4E03AQEZXW7zW2BPSQ/profile-displayphoto-shrink_800_800/0/1673267155968?e=2147483647&v=beta&t=XaAceXp62JMapaAjqpkgG7bF9Qyg4eSoji3GYlwDH5k"
                  alt=""
                />
                <h1 className="text-xl font-semibold pt-2 text-center">Dr. Jhonny sins</h1>
                <p className="text-center">CardioLogy Specialist</p>
                <div className="flex gap-2 pt-2 items-center justify-center">
                    <AiFillFacebook className="text-3xl text-[#343434] hover:text-[#276aff]"/>
                    <AiFillInstagram className="text-3xl text-[#343434] hover:text-[#276aff]"/>
                    <AiFillLinkedin className="text-3xl text-[#343434] hover:text-[#276aff]"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
}
