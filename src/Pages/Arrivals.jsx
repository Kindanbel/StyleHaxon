import Product from "../components/Product";
import products from "../product";
import {SecondButton} from "../components/Button";

function Arrivals(){
    return (
        <div>
            <main className="pb-[70px] overflow-hidden">
                <div className="text-container flex flex-col w-[100%] items-center">
                    <h2 className="text-[30px] font-[500]">
                        New Arrivals
                    </h2>
                    <p className="text-center w-[100%] px-[10%] md:px-0 md:w-[60%] lg:w-[40%] capitalize">
                        introducing our latest arrivals. Unveil the fresh trends and must have styles. 
                        Discover a capturing selection of new fashion arrivals at Style Haxon.
                    </p>
                </div>

                <div className="product-gallery ml-[10%] mt-10 w-[100%] overflow-scroll flex gap-3 pr-[200px]">
                    {products.map((product) =>{
                        return(
                            <Product 
                            key={product.id}
                            image={product.image}
                            productName={product.productName}
                            productPrice={product.productPrice}
                            />
                        )
                    })}
                </div>

                <div className="button flex flex-col items-center mt-10">
                    <SecondButton name="Load More"/>
                </div>

            </main>
        </div>
    )
}


export default Arrivals;