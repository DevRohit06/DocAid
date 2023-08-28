import { BsFillCheckCircleFill } from "react-icons/bs";
export default function CallToAction() {
  const data = [
    "Top Specialist Doctor",
    "State of the Art Doctor Services",
    "Discount for All Medical Treatment",
    "Enrollment is Quick and Easy",
    "Online Prescription",
  ];
  return (
    <>
    <div  className="sm:w-5/6 w-11/12 mt-36 mx-auto">
    <div className="w-full h-full flex justify-between items-center flex-col-reverse sm:flex-row">
        <div className="w-11/12 sm:w-3/6"> 
          <h1 className="text-5xl pb-8 font-bold text-[#010a44]">We ensure Top Qualify Doctors for You</h1>
          {data.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-4 pb-4">
                <BsFillCheckCircleFill color="#276aff" className="text-xl"/>
                <p className="text-[#96969a] text-lg font-semibold"> {item}</p>
              </div>
            );
          })}
          <br />
          <div className="text-center sm:text-start">
          <a className=" px-5 py-4 bg-[#276aff] text-white rounded-lg " href="#"> Get Started</a>
          </div>
        </div>
        <div>
            <img className="rounded-xl shadow-sm mb-10 sm:mb-0" src="https://img.freepik.com/premium-photo/doctor-healthcare-team-medical-expert-working-hospital-together-doing-consultation-happy-clinic-portrait-motivation-teamwork-cardiology-arms-crossed-partnership_590464-83759.jpg" alt="" />
        </div>
      </div>
    </div>
    <br />
    <br />
    </>
  );
}
