function Coming() {
    return(
        <div>
            <main className="bg-haxonBlack text-white w-full h-[680px] md:h-[400px] my-[50px] py-10 px-[10%]">
                <div className="container flex flex-col gap-7 justify-center md:flex-row md:justify-between items-center">
                    <div className="header-side flex flex-col gap-3 items-center md:items-start">
                        <h2 className="text-[40px] md:text-[30px]">
                            Coming Soon!!!
                        </h2>
                        <p className="w-[70%] text-center md:text-start text-[20px] md:text-[17px] ">
                            Preorder cloths coming in the fall of the summer with 
                            discount that will blow your mind and make you happy.
                        </p>
                    </div>

                    <div className="image max-w-[450px] h-[350px] md:min-w-[300px] md:h-[300px]">

                        <img src="/images/packet-shirt.jpg" alt="shirt" className="w-[100%] h-[100%]" />
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Coming;