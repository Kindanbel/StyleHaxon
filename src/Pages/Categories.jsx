import { BsHandbag } from "react-icons/bs";
import {SecondButton} from "../components/Button";

const buttonLinks = [
    {name: "Shirts", href: "/shirts"},
    {name: "Shorts", href: "/shorts"},
    {name: "Jacket", href: "/jacket"},
    {name: "Hoodies", href: "/hoodies"},
    {name: "Joggers", href: "/joggers"},
    {name: "Shoes", href: "/shoes"},
    {name: "Accessories", href: "/accessories"}
]



function Categories(){
    return (
        <div>
            <main className=" pb-10 flex flex-col gap-10 overflow-hidden">
                <div className="header flex flex-col gap-5 items-center">
                    <h2 className="text-[25px] font-[500]">
                        Categories
                    </h2>

                    <div className="button-links pl-[20%] md:pl-0 overflow-x-scroll flex flex-row gap-7">
                        {buttonLinks.map((button) => {
                            return(
                                <span key={button.name} className=" text-haxonBlack cursor-pointer hover:font-[500] text-[17px]">
                                {button.name}
                            </span>
                            )
                        })}
                    </div>
                </div>

                <div className="collection-gal grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-3 px-[10%]">

                    <div className="gal1 bg-gray-200 text-haxonBlack w-auto h-[400px] overflow-hidden px-3 pt-3">
                        <div className="gal-header flex justify-between">
                            <div className="header-text">
                                <h2 className="font-[500]">Men Plain T-Shirts</h2>
                                <span className="price  text-orange-500 text-[18px]">$3,000</span>
                            </div>
                            <div className="header-icon px-2 h-[30px] w-[30px] rounded-full bg-haxonBlack flex items-center">
                                <BsHandbag className="text-[20px] text-white"/>
                            </div>
                        </div>
                        <div className="image w-auto h-[350px] flex items-center justify-center">
                            <img src="/images/hoodie5 1.svg" alt="boy" className="h-[100%]" />
                        </div>
                    </div>

                    <div className="gal1 bg-gray-200 text-haxonBlack w-auto h-[400px] overflow-hidden px-3 pt-3">
                    <div className="gal-header flex justify-between">
                            <div className="header-text">
                                <h2 className="font-[500]">Men Plain T-Shirts</h2>
                                <span className="price  text-orange-500 text-[18px]">$3,000</span>
                            </div>
                            <div className="header-icon px-2 h-[30px] w-[30px] rounded-full bg-haxonBlack flex items-center">
                                <BsHandbag className="text-[20px] text-white"/>
                            </div>
                        </div>
                        <div className="image w-auto h-[400px] flex items-center justify-center">
                            <img src="/images/girlpic2 1.svg" alt="boy" className="h-[100%]" />
                        </div>
                    </div>

                    <div className="gal1 bg-gray-200 text-haxonBlack w-auto h-[400px] overflow-hidden px-3 pt-3">
                    <div className="gal-header flex justify-between">
                            <div className="header-text">
                                <h2 className="font-[500]">Men Plain T-Shirts</h2>
                                <span className="price  text-orange-500 text-[18px]">$3,000</span>
                            </div>
                            <div className="header-icon px-2 h-[30px] w-[30px] rounded-full bg-haxonBlack flex items-center">
                                <BsHandbag className="text-[20px] text-white"/>
                            </div>
                        </div>
                        <div className="image w-auto h-[350px] flex items-center justify-center">
                            <img src="/images/oversized 1.svg" alt="boy" className="h-[100%]" />
                        </div>
                    </div>

                    <div className="gal1 bg-gray-200 text-haxonBlack w-auto h-[400px] overflow-hidden px-3 pt-3">
                    <div className="gal-header flex justify-between">
                            <div className="header-text">
                                <h2 className="font-[500]">Men Plain T-Shirts</h2>
                                <span className="price  text-orange-500 text-[18px]">$3,000</span>
                            </div>
                            <div className="header-icon px-2 h-[30px] w-[30px] rounded-full bg-haxonBlack flex items-center">
                                <BsHandbag className="text-[20px] text-white"/>
                            </div>
                        </div>
                        <div className="image w-auto h-[350px] flex items-center justify-center">
                            <img src="/images/boy shirt 1.svg" alt="boy" className="h-[100%]" />
                        </div>
                    </div>

                    <div className="gal1 bg-gray-200 text-haxonBlack w-auto h-[400px]  lg:col-span-2 overflow-hidden px-3 pt-3">
                    <div className="gal-header flex justify-between">
                            <div className="header-text">
                                <h2 className="font-[500]">Men Plain T-Shirts</h2>
                                <span className="price  text-orange-500 text-[18px]">$3,000</span>
                            </div>
                            <div className="header-icon px-2 h-[30px] w-[30px] rounded-full bg-haxonBlack flex items-center">
                                <BsHandbag className="text-[20px] text-white"/>
                            </div>
                        </div>
                        <div className="image w-auto h-[400px] flex items-center justify-center">
                            <img src="/images/couple black tees 1.svg" alt="boy" className="h-[100%]" />
                        </div>
                    </div>
                </div>

                <div className="button flex flex-col items-center mt-10">
                    <SecondButton name="Load More"/>
                </div>

            </main>
        </div>
    )
}


export default Categories;