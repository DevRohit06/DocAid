
export default function NewsLetter(){
    return (
        <>
        <section className="w-full sm:w-5/6 mx-auto">
        <div className="bg-[#276aff] w-full h-auto sm:rounded-xl rounded-none">

        <div className="sm:w-3/6 px-2 mx-auto sm:py-20 py-8">
        <h1 className="sm:text-5xl text-3xl font-medium text-white">
            Subscribe for any news update from us
          </h1>
    <div className="mt-12 py-2 px-2 rounded-xl flex bg-white sm:w-5/6 w-full gap-4 justify-between">
        <input type="email" name="" className="p-4 px-2 w-full" id="" placeholder="Enter your email " />
        <input type="submit" className="p-4 bg-[#276aff] rounded-xl text-white text-xl" value="Subscribe" />
    </div>

        </div>
     
        </div>
        </section>
        </>
    )
}