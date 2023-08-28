export default function FCard(props) {
  return (
    <>
   
    <div className="w-full flex  items-center h-52 bg-white px-4 rounded-xl shadow-xl">
        <div className="flex items-center gap-4 px-0 sm:px-8" >
          <div className=" rounded-full bg-blue-300 p-4 sm:p-8 flex items-center justify-center">
            <img
              className="sm:w-16 w-16"
              src={props.img}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#276aff] py-2">{props.title}</h1>
            <p className="text-[#565972]">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
