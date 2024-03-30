import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="bg-zinc-900 text-white py-5 border-t-2 mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-items-center items-start">
                <div className="mb-5 lg:mb-0">
                    <h1 className="text-xl font-bold mb-3">Trending Products</h1>
                    <ul>
                        <li className="mb-2">I Phone 15 Pro Max</li>
                        <li className="mb-2">Samsung S24 Ultra</li>
                        <li className="mb-2">Samsung S23 Ultra</li>
                        <li className="mb-2">One Plus 12</li>
                        <li className="mb-2">Oppo A17</li>
                        <li className="mb-2">Asus ROG 8</li>
                        <li className="mb-2">Realme GT5 Pro</li>
                    </ul>
                </div>
                <div className="mb-5 lg:mb-0">
                    <h1 className="text-xl font-bold mb-3">Brands</h1>
                    <ul>
                        <li className="mb-2">Apple</li>
                        <li className="mb-2">Oppo</li>
                        <li className="mb-2">Samsung</li>
                        <li className="mb-2">ASUS</li>
                        <li className="mb-2">Samsung</li>
                        <li className="mb-2">Realmi</li>
                    </ul>
                </div>
                <div className="mb-5 lg:mb-0">
                    <h1 className="text-xl font-bold mb-3">About US</h1>
                    <p>
                        At Mobile Shop, we are passionate about providing you with
                        top-of-the-line laptops that elevate your computing experience.
                    </p>
                </div>
                <div className="mb-5 lg:mb-0">
                    <h1 className="text-xl font-bold mb-3">Contact Us</h1>
                    <ul>
                        <li className="mb-2">Lalmai, Cumilla, Bangladesh</li>
                        <li className="mb-2">
                            Phone: <span className="font-bold">(123) 123-456</span>
                        </li>
                        <li className="mb-2">
                            {" "}
                            Email: <span className="font-bold">mobile@gmail.com</span>
                        </li>
                        <li className="mb-2">
                            <div className="flex justify-start items-center gap-5 my-5">
                                <Facebook className="text-white cursor-pointer" />
                                <Linkedin className="text-white cursor-pointer" />
                                <Instagram className="text-white cursor-pointer" />
                                <Twitter className="text-white cursor-pointer" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mb-5 lg:mb-0">
                    <h1 className="text-xl font-bold mb-3">Customer Care</h1>
                    <ul>
                        <li className="mb-2">Help Center</li>
                        <li className="mb-2">Returns & Refunds</li>
                        <li className="mb-2">Contact Us</li>
                        <li className="mb-2">Cookie policy</li>
                        <li className="mb-2">Payment Method</li>
                    </ul>
                </div>
            </div>
            <hr className="w-10/12 mx-auto mt-20" />
            <div className="flex justify-center py-8 text-lg">
                © Copyright {currentYear} by Mobile
            </div>
        </div>
    );
};

export default Footer;