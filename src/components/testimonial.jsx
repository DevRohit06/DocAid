import {AiFillStar} from "react-icons/ai"
export default  function Testomonials(){
    return (
        <>
        <section className="w-5/6 mt-20 mx-auto">
            <h1 className="sm:text-4xl text-3xl text-center text-[#010a44] font-bold">What our Customer say about us</h1>
            <p className=" py-4 text-[#565972] font-medium w-11/12 sm:w-3/6  mx-auto text-center">
            Integer suscipit mi non felis fermentum, sed egestas neque sagittis. Donec quis mollis libero, eu pellentesque nisl. Nulla facilisi. Phasellus hendrerit lectus et neque luctus,
            </p>
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 mb-28">
                <div className="p-4 py-8 shadow-md rounded-xl">
                    <div className="flex items-center gap-4">
                        <div>
                            <img className="w-16 rounded-full" src="https://i.pinimg.com/1200x/c3/51/18/c3511874093854d317bc7c3927132b7b.jpg" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">Mila McShabbu</h1>
                            <p className="font-medium text-[#565972]">Freelance Designer</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex py-2">
                            <AiFillStar className="text-base text-orange-400"/>
                            <AiFillStar className="text-base text-orange-400"/>
                            <AiFillStar className="text-base text-orange-400"/>
                            <AiFillStar className="text-base text-orange-400"/>
                            <AiFillStar className="text-base text-orange-400"/>
                        </div>
                        <p>If you want a partner you can trust, look no further than DocAids. </p>
                    </div>
                </div>
                <div className="p-4 py-8 shadow-md rounded-xl">
                    <div className="flex items-center gap-4">
                        <div>
                            <img className="w-16 rounded-full" src="https://i.pinimg.com/1200x/c3/51/18/c3511874093854d317bc7c3927132b7b.jpg" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">Mila McShabbu</h1>
                            <p className="font-medium text-[#565972]">Freelance Designer</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex py-2">
                            <AiFillStar className="text-base text-orange-400"/>
                            <AiFillStar className="text-base text-orange-400"/>
                            <AiFillStar className="text-base text-orange-400"/>
                            <AiFillStar className="text-base text-orange-400"/>
                            <AiFillStar className="text-base text-orange-400"/>
                        </div>
                        <p>If you want a partner you can trust, look no further than DocAids. </p>
                    </div>
                </div>
                <div className="p-4 py-8 shadow-md rounded-xl">
                    <div className="flex items-center gap-4">
                        <div>
                            <img className="w-16 rounded-full" src="https://i.pinimg.com/1200x/c3/51/18/c3511874093854d317bc7c3927132b7b.jpg" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">Mila McShabbu</h1>
                            <p className="font-medium text-[#565972]">Freelance Designer</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex py-2">
                            <AiFillStar className="text-base text-orange-400"/>
                            <AiFillStar className="text-base text-orange-400"/>
                            <AiFillStar className="text-base text-orange-400"/>
                            <AiFillStar className="text-base text-orange-400"/>
                            <AiFillStar className="text-base text-orange-400"/>
                        </div>
                        <p>If you want a partner you can trust, look no further than DocAids. </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}