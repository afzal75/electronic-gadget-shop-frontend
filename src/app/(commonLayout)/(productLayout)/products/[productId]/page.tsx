/* eslint-disable @next/next/no-img-element */
import Ratings from "@/components/ui/Ratings";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/types";
import Image from "next/image";
import React from "react";

type TProductDetailsParams = {
  productId: string;
};

export const generateStaticParams = async () => {
  const res = await fetch("https://mobile-gadget-backend.vercel.app/products");
  const { result: products } = await res.json();

  return products?.map((product: TProduct) => ({
    productId: product._id,
  }));
};
const ProductDetails = async ({
  params,
}: {
  params: TProductDetailsParams;
}) => {
  // console.log(params);
  const id = params.productId;
  const res = await fetch(
    `https://mobile-gadget-backend.vercel.app/products/${id}`
  );
  const { result: product } = await res.json();
  // console.log(product);
  return (
    <div className="container bg-white">
      <div>
        <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div className="px-4 relative h-96 py-10 rounded-xl ">
                <Image
                  fill
                  src={product.image}
                  alt="Product"
                  className="w-full mx-auto rounded object-contain"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-primary">
                {product.name}
              </h2>
              <div className="flex flex-wrap gap-4 mt-6">
                <p className="text-primary text-4xl font-bold">
                  ৳ {product.price}
                </p>
              </div>
              <div className="flex space-x-2 mt-4">
                <Ratings rating={product.rating} />
                <h4 className="text-primary text-base">500 Reviews</h4>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <Button className="w-full">Buy Now</Button>
                <Button className="w-full"> Add to cart</Button>
              </div>
            </div>
          </div>
          <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 className="text-lg font-bold text-primary">
              Product information
            </h3>
            <ul className="mt-6 space-y-6 uppercase text-primary">
              <li className="text-sm">
                Product Information
                <span className="ml-4 float-right ">{product.name}</span>
              </li>
              <li className="text-sm">
                Brand <span className="ml-4 float-right">{product.brand}</span>
              </li>
            </ul>
            <div>
              <h3 className="text-lg font-bold my-4 text-primary">
                Product Short Details
              </h3>

              <h3 className="uppercase text sm">{product.description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

