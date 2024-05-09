function Newsletter(){
    return (
        <div>
            <main className="bg-gray-200 py-10 px-[10%] h-[470px] md:h-[300px] my-20 ">
                <div className="container flex flex-col gap-10 items-center">
                    <div className="con-text text-center flex flex-col gap-3 items-center">
                        <h2 className="text-[30px] md:text-[25px] font-[500]">
                            Subscribe to our News letter
                        </h2>
                        <p className="w-[70%]">
                            Dont miss out on the latest trends, limited time promotions and more
                            pakages. 
                        </p>
                    </div>

                    <div className="input relative flex flex-col items-center md:flex-none">
                        <input 
                        type="email" 
                        name="email" 
                        id="email-id" 
                        placeholder="Enter your email adress"
                        className="p-5 w-[300px] md:w-[500px] rounded-full relative"
                         />
                        <button 
                        className="
                        button 
                      bg-black 
                      text-white 
                        p-5 
                        rounded-full right-0 w-[100%] md:w-[150px] mt-5 md:mt-0 md:absolute hover:bg-white hover:text-haxonBlack">
                            Subscribe
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Newsletter;