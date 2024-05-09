function Appbox(prop){
    return(
        <div>
            <div className="h-fit w-fit py-2 px-5 rounded-lg bg-haxonBlack text-white flex items-center gap-4">
                <span>
                    {prop.icon}
                </span>
                <div className="text flex flex-col font-[600]">
                    <p className="text-[13px]">
                        {prop.upText}
                    </p>
                    <p className="text-[20px]">
                        {prop.lowerText}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Appbox;