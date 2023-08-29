export default function Services() {
  return (
    <>
      <section className="mt-12">
        <h1 className="text-[#010a44] font-semibold text-4xl text-center ">
          Our Services
        </h1>
        <p className="sm:w-2/6 w-11/12 mx-auto text-center py-2 text-lg text-[#646464] font-normal">
          It is a long established fact that a reader will be distract by the
          readable content layout
        </p>
        <div className="sm:w-5/6 w-11/12 mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8">
          <div className=" mx-auto bg-white p-8 hover:shadow-xl rounded-xl">
            <div>
              <h1 className="text-3xl font-bold py-2">
                Telemedicine Consultations
              </h1>
              <p className="">
                Connect users with healthcare professionals for virtual
                appointments, offering convenient medical advice, diagnosis, and
                prescriptions through secure video calls.
              </p>
              <div className="py-4">
                <button className="px-5 py-3 text-white bg-[#276aff] rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className=" mx-auto bg-white p-8 hover:shadow-xl rounded-xl">

            <div>
              <h1 className="text-3xl font-bold py-2">
                Second Opinion Network
              </h1>
              <p className="">
                Provide expert second opinions by matching user's medical cases
                with specialists, helping users make informed decisions about
                their health.
              </p>
              <div className="py-4">
                <button className="px-5 py-3 text-white bg-[#276aff] rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className=" mx-auto bg-white p-8 hover:shadow-xl rounded-xl">

            <div>
              <h1 className="text-3xl font-bold py-2">
                Health Monitoring
              </h1>
              <p className="">
                Offer subscription-based health monitoring using wearable
                devices, delivering personalized insights and alerts to users
                and healthcare providers for proactive wellness management
              </p>
              <div className="py-4">
                <button className="px-5 py-3 text-white bg-[#276aff] rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
