import {AiFillPlayCircle} from "react-icons/ai"
export default function Hero(){
    return (
        <>
        <div className="w-11/12 md:w-11/12 xl:w-7/12 mx-auto mt-20 pb-32">
            <h1 className="text-[#010a44] text-center font-bold text-4xl sm:text-6xl">
                Providing Best Online  Clinic to get Solutions in hand
            </h1>
            <div className="flex flex-col sm:flex-row text-center gap-4 justify-center mt-12">
                <a className="px-5 py-4 bg-[#276aff] text-white rounded-lg" href="">Make Appointment</a>
                <a className="px-5 py-4 text-center flex items-center justify-center gap-2" href=""><AiFillPlayCircle color="#276aff" className="text-center text-2xl"/>Watch in Video</a>
            </div>
            <div className=" rounded-xl mt-12 w-full h-auto bg-center">
                <img className="rounded-xl shadow-xl" src="https://images.pexels.com/photos/7089011/pexels-photo-7089011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
        </>
    )
}