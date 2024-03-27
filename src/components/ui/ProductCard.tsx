import Image from "next/image";
import { Button } from "./button";
import { CirclePlus, EyeIcon, ShoppingCart } from "lucide-react";
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
                        <Link href={`/mens-shirts/${_id}`}>
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

        // <div
        //     className="w-[50px] sm:min-w-80 lg:min-w-full bg-white dark:bg-zinc-950 rounded-md shadow-md dark:shadow-zinc-900 overflow-hidden"
        // >
        //     <Image
        //         height={300}
        //         width={300}
        //         // className="object-contain w-full h-full"
        //         src={image as string}
        //         alt="product image"
        //         sizes="200vw"
        //     />
        //     <div className="p-5 flex justify-between flex-col h-52">
        //         <div>
        //             <h3 className="text-lg text-primary dark:text-white font-bold">
        //                 {name}
        //             </h3>
        //             <div className="mt-2.5 mb-5 flex items-center">
        //                 <del className="mr-2 rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold">
        //                     {price}
        //                 </del>
        //             </div>
        //             <p className="italic font-semibold text-orange-500">
        //                 <span className="text-primary">$</span>
        //                 {sellPrice}
        //             </p>
        //         </div>
        //         <div className="mt-5 text-center w-full">
        //             <Link href={`/donations/${_id}`}>
        //                 {" "}
        //                 <Button className="w-full bg-primary dark:bg-secondary duration-500">
        //                     View Detail
        //                 </Button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>

    );
};

export default ProductCard;