function Button (prop){
    return (
    <div>
        <button 
        className="
        py-2
        px-10
        h-fit 
        w-fit
        bg-haxonBlack
        text-white
        text-[18px]
        rounded-full
        hover:bg-white
        hover:text-haxonBlack
        transition
        ease-in-out
        duration-500
        hover:font-[500]"
        >
            {prop.name}
        </button>
    </div>
    )
}


function SecondButton (prop){
    return (
    <div>
        <button 
        className="
        py-2
        px-5
        h-fit 
        w-fit
        bg-white
        text-haxonBlack
        text-[18px]
        rounded-full
        hover:bg-haxonBlack
        hover:text-white
        transition
        ease-in-out
        duration-500
        border-2
        border-haxonBlack
        border-solid
        font-[500]"
        >
            {prop.name}
        </button>
    </div>
    )
}



export default Button;

export {SecondButton}