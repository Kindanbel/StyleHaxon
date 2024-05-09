import {useState} from "react"

import { LuShoppingCart } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { GiClothes } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const navLinks = [
    {
        link: "Home",
        href: "/"
    },{
        link: "Men",
        href: "/men"
    },{
        link: "Women",
        href: "/women"
    },{
        link: "Lifestyle",
        href: "/lifestyle"
    },
]





function Navbar(){
    const [isClicked, setIsCLicked] = useState(false)

    function handleClick(){
        setIsCLicked(!isClicked)
    }

    return (
        <div>
            <nav className="navbar text-haxonBlack bg-white h-5 w-full px-[10%] py-10 flex items-center justify-between relative">
                <div className="logo text-[17px] font-[500] flex items-center gap-1 cursor-pointer">
                    Style Haxon <GiClothes />
                </div>
                <div className={
                    `${isClicked ? "flex absolute top-[70px] w-full h-screen right-0 bg-white z-10 gap-10 items-center pt-[100px]" 
                    : "hidden md:flex" 
                    } 
                    flex-col md:flex-row md:items-center md:gap-10 `}>
                    {navLinks.map((links) => {
                        return <p key={links.link} className="text-[25px] md:text-[17px] hover:text-haxonBlack hover:font-[500] cursor-pointer">
                            {links.link}
                        </p>
                    })}
                    <div className={`${isClicked ? "flex flex-col absolute bottom- z-10 " : "hidden " }otherlinks items-center gap-5 relative`}>
                    <FiSearch className="text-[30px] cursor-pointer"/>
                    <LuShoppingCart className="text-[30px] cursor-pointer "/>
                    <p className="number absolute top-[40px] right-[-8px] bg-red-700 text-white rounded-[50%] px-1">
                        0
                    </p>
                </div>
                </div>

                <div className={`otherlinks hidden md:flex items-center gap-5 relative`}>
                    <FiSearch className="text-[20px] cursor-pointer"/>
                    <LuShoppingCart className="text-[20px] cursor-pointer "/>
                    <p className="number absolute top-[-12px] right-[-8px] bg-red-700 text-white rounded-[50%] px-1">
                        0
                    </p>
                </div>

                <div className="hamburer-menu md:hidden flex items-center">
                    <button onClick={handleClick}>
                        {
                            isClicked ? <IoMdClose className="text-[30px]"/> : <RxHamburgerMenu  className=" text-[30px]"/> 

                        }
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
