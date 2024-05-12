import Button from "../components/Button";

function Collection() {
    return (
        <div>
            <main className="md:px-[10%]  py-[50px] overflow-hidden">
                <div className="header text-[30px] font-[500] px-[10%] md:px-0">
                    Top collections for you
                </div>
                <div className="paragraph py-3 lg:w-[50%] md:w-[70%] w-full px-[10%] md:px-0">
                    We take great pride in curating our top collections to cater the diverse
                    tastes and preferences of our esteemed customers. Each collection embodies a unique 
                    essence qnd showcases the latest trends. Here are some of our top collections
                </div>
                <div 
                className=
                "pl-[10%] pr-[40px] md:pr-0 md:pl-0 image-gallery pt-5 md:grid flex gap-5 md:grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 overflow-scroll ">
                    {/*Image galleries */}

                    <div className="galleries
                     md:w-[100%] 
                     w-[fit]
                     h-[400px]
                     md:h-[520px]
                     flex-shrink-0
                      text-white
                       bg-[url('/images/vintage1.jpg')] bg-no-repeat bg-center bg-cover bg-blend-overlay
                       md:col-span-1 md:row-span-2 flex flex-col justify-end p-5">
                        <div className="gall-header text-[25px] pb-2 font-[500] ">
                            Vintage Collections
                        </div>
                        <div className="gall-paragraph">
                            We pride in bringing all the vintage cloths that the world
                            could have.
                        </div>
                        <div className="button py-5 ">
                            <Button name="Shop Now"/>
                        </div>
                    </div>

                    <div className="galleries
                     w-[fit] h-[400px] md:h-[500px] lg:h-[250px] flex-shrink-0
                      text-white
                      bg-[url('/images/hoodie6.jpg')] bg-no-repeat bg-center bg-cover bg-blend-overlay
                       flex flex-col justify-end p-5">
                        <div className="gall-header text-[25px] pb-2 font-[500]">
                            Seasonal Collections
                        </div>
                        <div className="gall-paragraph">
                            We pride in bringing all the vintage cloths that the world
                            could have.
                        </div>
                    </div>

                    <div className="galleries 
                     w-[fit] h-[400px] md:h-[500px]  lg:h-[250px] flex-shrink-0
                     text-white
                     bg-[url('/images/children2.jpg')] bg-no-repeat bg-center bg-cover bg-blend-overlay
                      flex flex-col justify-end p-5">
                        <div className="gall-header text-[25px] pb-2 font-[500]">
                            Children Collections
                        </div>
                        <div className="gall-paragraph">
                            We pride in bringing all the vintage cloths that the world
                            could have.
                        </div>
                    </div>

                    <div className="galleries
                     w-[fit] h-[400px] md:h-[500px]  lg:h-[250px] flex-shrink-0
                      text-white
                      bg-[url('/images/activewear.jpg')] bg-no-repeat bg-center bg-cover bg-blend-overlay
                      flex flex-col justify-end p-5">
                        <div className="gall-header text-[25px] pb-2 font-[500]">
                            Activewear Collections
                        </div>
                        <div className="gall-paragraph">
                            We pride in bringing all the vintage cloths that the world
                            could have.
                        </div>
                    </div>

                    <div className="galleries 
                    w-[fit] h-[400px] md:h-[500px]  lg:h-[250px] flex-shrink-0
                     text-white
                     bg-[url('/images/caps2.jpg')] bg-no-repeat bg-center bg-cover bg-blend-overlay
                      flex flex-col justify-end p-5">
                        <div className="gall-header text-[25px] pb-2 font-[500]">
                           Capsule Collections
                        </div>
                        <div className="gall-paragraph">
                            We pride in bringing all the vintage cloths that the world
                            could have.
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Collection;