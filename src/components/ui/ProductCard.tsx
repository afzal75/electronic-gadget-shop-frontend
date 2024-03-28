import Image from "next/image";
import { Button } from "./button";
import { EyeIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { TProduct } from "@/types";

const ProductCard = ({ name, price, image, sellPrice, _id }: Partial<TProduct>) => {
    return (
        <div className=" bg-white w-full md:max-w-xs shadow-md rounded-xl duration-500">
            <div className="group  flex w-full flex-col overflow-hidden bg-white">
                <div className="relative  overflow-hidden">
                    <div className="relative mx-3 mt-3 w-[280px] h-[300px] flex overflow-hidden rounded-xl">
                        <Image
                            height={300}
                            width={300}
                            // className="object-contain w-full h-full"
                            src={image as string}
                            alt="product image"
                            sizes="200vw"
                        />
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                            39% OFF
                        </span>
                    </div>

                    <div className="absolute flex flex-col -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                        <Link href={`/products/${_id}`}>
                            <Button>
                                <EyeIcon className="size-4" />
                            </Button>
                        </Link>
                        <Button>
                            <ShoppingCart className="size-4" />
                        </Button>
                    </div>
                </div>
                <div className="mt-4 pb-5">
                    <a href="#">
                        <h5 className="text-center tracking-tight text-gray-500">{name}</h5>
                    </a>
                    <div className="flex justify-center items-center text-sm">
                        <div>
                            <span className="text-sm font-bold">৳</span>
                            <del className="text-slate-600">{price}</del>{" "}
                            <span>
                                <span className="text-sm font-bold">৳</span>
                                {sellPrice}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;