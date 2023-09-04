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
            <div className="">
              <h1 className="text-center text-2xl font-bold py-2 text-[#010a44]">
                Consultations
              </h1>
              <p className="text-center">
                Provide expert second opinions by matching user's medical cases
                with specialists, helping users make informed decisions about
                their health.
              </p>
            </div>
          </div>
          <div className=" mx-auto bg-white p-8 shadow-xl rounded-xl">
            <div>
              <h1 className="text-center text-2xl font-bold py-2 text-[#010a44]">
                Second Opinion Network
              </h1>
              <p className="text-center">
                Provide expert second opinions by matching user's medical cases
                with specialists, helping users make informed decisions about
                their health.
              </p>
            </div>
          </div>
          <div className=" mx-auto bg-white p-8 hover:shadow-xl rounded-xl">
            <div>
              <h1 className="text-center text-2xl font-bold py-2 text-[#010a44]">Health Monitoring</h1>
              <p className="text-center">
                Provide expert second opinions by matching user's medical cases
                with specialists, helping users make informed decisions about
                their health.
              </p>
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
