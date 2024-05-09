import { IoMdHeartEmpty } from "react-icons/io";


function Product(prop){
    return(
        <div>
            <div className="container w-fit h-fit bg-gray-100 text-haxonBlack py-5 px-5">
                <div className="image w-[300px] h-[300px] mb-10 items-center flex justify-center">
                    <img src={prop.image} alt="products" className="" />
                </div>

                <div className="text-container flex gap-3">
                    <div className="wishicon pt-1 text-[20px]">
                        <IoMdHeartEmpty className="icon-h"/>
                    </div>

                    <div className="text flex flex-col gap-1">
                        <div className="product-name">
                            {prop.productName}
                        </div>

                        <div className="product-price text-orange-500 text-[18px]">
                            {prop.productPrice}
                        </div>

                        <div className="below-text text-[10px]">
                            Seasonal cloths from Haxon
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Product;