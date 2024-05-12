import Button from "../components/Button";


function Hero(){
    return (
        <div>
            <main className="hero px-[10%] w-full h-[100vh] md:h-[90vh] lg:h-[90vh] bg-haxonGrey2 py-[100px] overflow-hidden">

                <div className="hero-textcon flex flex-col gap-10 relative">
                    <div className="hero-text flex flex-col gap-5 ">
                        <h1 className="text-white text-[50px] md:text-[90px] lg:text-[120px] flex flex-col gap-1 leading-none relative overflow-hidden">
                            New <span className="tracking-[0.2rem]">Collection</span>
                        </h1>

                        <p className="text-white pl-4 text-[17px]">
                            Discover Your Signature Style at Style Haxon
                        </p>
                        <div className="hero-image absolute md:right-[0] md:bottom-[-400px] lg:right-[-100px] lg:bottom-[-250px] xl:right-[400px] xl:bottom-[-1100px] 2xl:bottom-[-250px]">
                            <img src="/images/hood 12.svg" alt="" className="w-[600px] "/>
                        </div>
                    </div>


                    <div className="hero-button pl-4">
                        <Button name="Start Shopping"/>
                    </div>

                </div>
            </main>
        </div>
    )
}


export default Hero;