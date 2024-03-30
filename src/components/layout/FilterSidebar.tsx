import { TProduct } from "@/types";

import Link from "next/link";
import getAllProducts from "@/hooks/getAllProduct";

const FilterSidebar = async ({ }) => {

    const ratingLinks = [
        {
            rating: "4-5",
            label: "⭐⭐⭐⭐⭐",
            href: "/products?rating=5",
        },
        {
            rating: "3-4",
            label: "⭐⭐⭐⭐",
            href: "/products?rating=4",
        },
        { rating: "2-3", label: "⭐⭐⭐", href: "/products?rating=3" },
        { rating: "2-3", label: "⭐⭐", href: "/products?rating=2" },
        { rating: "2-3", label: "⭐", href: "/products?rating=1" },
    ];
    const priceLinks = [
        { label: "Under ৳300", href: "/products?price=100-300" },
        { label: "৳15000 to ৳25000", href: "/products?price=15000-25000" },
        { label: "৳100000 to ৳120000", href: "/products?price=100000-125000" },
        { label: "৳120001 to ৳130000", href: "/products?price=120001-130009" },
        { label: "৳130001 to ৳160000", href: "/products?price=130001-160000" },
    ];
    const { result: allDynamicCategory } = await getAllProducts({});
    const brands = allDynamicCategory.map((item: TProduct) => item.brand);
    const uniqueCategories: string[] = Array.from(new Set(brands));
    return (
        <div className="col-span-12 md:col-span-3  p-5 min-h-screen">
            <details open className="  w-full overflow-hidden  p-2">
                <summary className="flex flex-col cursor-pointer select-none items-center justify-between px-5 py-3 lg:hidden"></summary>
                <form className="flex flex-col border-t border-gray-200 lg:border-t-0">
                    <div className="my-4">
                        <fieldset className="w-full">
                            <legend className="block w-full font-semibold  px-5 text-lg">
                                Filter By Ratings
                            </legend>

                            <div className="space-y-1 py-2">
                                <hr className="border" />
                                {ratingLinks.map((item) => (
                                    <div key={item.href} className="flex items-center">
                                        <Link
                                            href={item.href}
                                            className="ml-3 my-2 w-full bg-white p-2 border rounded-md  hover:bg-slate-50 text-sm flex items-center gap-3 font-medium"
                                        >
                                            {item.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                    <fieldset className="w-full">
                        <legend className="block w-full font-semibold  px-5 text-lg">
                            Price
                        </legend>

                        <div className="space-y-1 py-2">
                            <hr className="border" />
                            {priceLinks.map((item) => (
                                <div key={item.href} className="flex items-center">
                                    <Link
                                        href={item.href}
                                        className="ml-3 my-2 w-full bg-white p-2 border rounded-md  hover:bg-slate-50 text-sm flex items-center gap-3 font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="w-full">
                        <legend className="block w-full font-semibold  px-5 text-lg">
                            Brand
                        </legend>
                        <div className="space-y-1 py-2">
                            <hr className="border" />
                            {uniqueCategories.map((brand) => {
                                return (
                                    <div key={brand} className="flex items-center">
                                        <Link
                                            href={`/products?brand=${brand}`}
                                            className="ml-3 my-2 w-full bg-white p-2 border capitalize rounded-md  hover:bg-slate-50 text-sm flex items-center gap-3 font-medium"
                                        >
                                            {brand}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </fieldset>
                </form>
            </details>
        </div>
    );
};

export default FilterSidebar;
