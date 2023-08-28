import { getFeatures } from "../lib/feature";
import FCard from "./featureCard";
export default function Features() {
  const features = getFeatures();

  return (
    <>
      <div className="bg-[#f4f8fb] pb-12">
        <div className="text-center pt-28 pb-8">
            <h1 className="w-11/12 mx-auto text-5xl font-semibold pb-8">Easy Steps to Get your Solutions</h1>
            <p className="text-[#565972] text-base w-11/12 sm:w-3/6  mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  px-4 sm:px-24 py-4 sm:py-12">
          {features.map((item, index) => {
            return (
              <FCard
                key={index}
                title={item.title}
                description={item.description}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
