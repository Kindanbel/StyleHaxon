import { useState } from "react";
import Appbox from "./Appbox"
import { PiAppleLogoLight } from "react-icons/pi";
import { FaGooglePlay } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";


const getHelp = [
    {
        link: "Help Center",
        href: "/"
    },{
        link: "Track Order",
        href: "/track"
    },{
        link: "Shopping Info",
        href: "/shopping"
    },{
        link: "Contact Us",
        href: "/contact"
    },
]

const company = [
    {
        link: "Careers",
        href: "/career"
    },{
        link: "About",
        href: "/about"
    },{
        link: "Stores",
        href: "/store"
    },{
        link: "Want to Collab",
        href: "/collab"
    },
]

const quick = [
    {
        link: "Site Guide",
        href: "/guide"
    },{
        link: "Sitemap",
        href: "/sitemap"
    },{
        link: "Gift Cards",
        href: "/giftcard"
    },{
        link: "Check Gift",
        href: "/checkgift"
    },
]



function Footer(){

    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)


    function handleClick(){
        setIsOpen(!isOpen)
    }

    function handleClick2(){
        setIsOpen2(!isOpen2)
    }

    function handleClick3(){
        setIsOpen3(!isOpen3)
    }


    return(
        <div>
            <footer className="px-[10%] bg-black text-white py-10 h-fit">

                <div className="con grid grid-cols-1 gap-10 md:grid-cols-[3fr,2fr,2fr] lg:grid-cols-[3fr,2fr,2fr,1fr]">

                {/*Logo */}
                <div className="flex flex-col gap-5">
                <div className="logo text-[20px] font-[500] flex items-center gap-1 cursor-pointer">
                    Style Haxon
                </div>   
                <div className="appbox flex flex-col lg:flex-row gap-4 lg:items-center">
                    <Appbox icon={<FaGooglePlay className="w-10 h-10"/>} upText="Available on the" lowerText="Google Play"/>
                    <Appbox icon={<PiAppleLogoLight className="w-10 h-10" />} upText="Download on the" lowerText="Apple Store"/>
                </div>
                </div>

                 {/*links */}

                    <div className="gethelp flex flex-col gap-5 md:border-none border-b-2 border-white md:pb-0 pb-5">
                        <h2 className="text-[20px] flex justify-between items-center">Get Help 
                        <RiArrowDropDownLine onClick={handleClick} className="text-white text-[50px] md:hidden"/></h2>
                        {getHelp.map((help) => {
                            return(
                                <p key={help.link} className={`cursor-pointer ${isOpen ? "block" : "hidden"} md:block`}>
                                {help.link}
                            </p>
                            )
                        })}
                    </div>

                    <div className="gethelp flex flex-col gap-5 md:border-none border-b-2 border-white md:pb-0 pb-5">
                        <h2 className="text-[20px] flex justify-between items-center" >Company
                        <RiArrowDropDownLine onClick={handleClick2}  className="text-white text-[50px] md:hidden"/></h2>
                        {company.map((com) => {
                            return(
                                <p key={com.link} className={`cursor-pointer ${isOpen2 ? "block" : "hidden"} md:block`}>
                                {com.link}
                            </p>
                            )
                        })}
                    </div>

                    <div className="gethelp flex flex-col gap-5 md:border-none border-b-2 border-white md:pb-0 pb-5">
                        <h2 className="text-[20px] flex justify-between items-center">Quick Links
                        <RiArrowDropDownLine onClick={handleClick3}  className="text-white text-[50px] md:hidden"/></h2>
                        {quick.map((quick) => {
                            return(
                                <p key={quick.link} className={`cursor-pointer ${isOpen3 ? "block" : "hidden"} md:block`}>
                                {quick.link}
                            </p>
                            )
                        })}
                    </div>
                    </div>

                    {/* Down part of footer */}

                    <div className="down-part border-none md:border-t-2 md:border-solid md:border-white mt-5 pt-5">
                        <div className="inner-text text-white flex flex-col gap-5 md:flex-row justify-between">
                            <span>
                                Copyright@2024 All rights reserved
                            </span>

                            <span>
                                Please accept cookies for better services
                            </span>
                        </div>
                    </div>

            </footer>
        </div>
    )
}


export default Footer;