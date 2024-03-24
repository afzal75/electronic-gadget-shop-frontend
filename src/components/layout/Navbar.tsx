"use client";
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
    const pathname = usePathname();
    const links = [
        {
            title: "Home",
            link: "/",
            id: 1,
        },
        {
            title: "Flash Sale",
            link: "/flash-sale",
            id: 2,
        },
        {
            title: "Products",
            link: "/mens-shirts",
            id: 3,
        },
        {
            title: "Dashboard",
            link: "/dashboard/all-products",
            id: 4,
        },
    ];

    return (
        <header className={` container md:text-xl `}>
            <div >
                <h1 className="">
                    <span className="text-[#6e5fbe] text-[2rem]"> Electronic</span>Shop
                </h1>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label
                    className="absolute right-4 top-5 cursor-pointer sm:hidden"
                    htmlFor="navbar-open"
                >
                    <span className="sr-only">Toggle menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="white"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </label>
                <nav
                    aria-labelledby="header-navigation"
                    className="peer-checked:mt-8 peer-checked:max-h-52 
                    flex max-h-0 w-full flex-col items-center 
                    justify-between overflow-hidden transition-all 
                    sm:ml-24 sm:max-h-full sm:flex-row sm:items-start"
                >
                    <h2 className="sr-only" id="header-navigation">
                        Header navigation
                    </h2>
                    <ul
                        className="flex flex-col gap-5  items-start sm:flex-row">
                        {links.map((link) => (
                            <li key={link.id} className="">
                                <Link className="font-light" href={link.link}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* <ul className="mt-4 flex sm:mt-0">
                        <li
                            onClick={() => {
                                toast("Thanks for clicking here", {
                                    description: "This feature is coming soon",
                                    duration: 1000,
                                });
                            }}
                            className="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="white"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </li>
                        <li
                            onClick={() => {
                                toast("Thanks for clicking here", {
                                    description: "This feature is coming soon",
                                    duration: 1000,
                                });
                            }}
                            className="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow"
                        >
                            <ShoppingCart />
                        </li>
                        <li className="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                            <Link href={"/dashboard/all-products"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </Link>
                        </li>
                    </ul> */}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
