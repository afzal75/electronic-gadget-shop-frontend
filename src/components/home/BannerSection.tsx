"use client";
import { useEffect, useState } from "react";

export const BannerSection = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
        {
            img: "https://img.freepik.com/premium-photo/dynamic-price-set-capturing-moment_1135748-26844.jpg?w=740",
        },
        {
            img: "https://img.freepik.com/premium-photo/photo-real-estate-building_896360-2767.jpg?w=740",
        },
        {
            img: "https://img.freepik.com/premium-vector/new-home-appliance-products-electronics-store-big-sale-black-friday-shopping-concept-horizontal_48369-46025.jpg?w=826",
        },
    ];

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(
            () =>
                setCurrentSlider(
                    currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
                ),
            5000
        );
        return () => clearInterval(intervalId);
    },
        [currentSlider, sliders.length],

    );

    <h1>{currentSlider ? 'This is never prerendered' : 'Prerendered'}</h1>


    return (
        <div className=" w-full">
            <div className="flex   relative flex-col justify-between">
                <div
                    className="w-full h-72 sm:h-96  md:h-[100vh]  flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/10 before:inset-0 transform duration-1000 ease-linear  overflow-hidden"
                    style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
                >
                    <div className="drop-shadow-lg text-white text-center px-5">
                        <h1 className="text-xl lg:text-6xl font-semibold mb-3">
                        </h1>
                    </div>
                </div>
                {/* slider container */}
                <div className="flex absolute bottom-3 right-3 justify-center items-center gap-3 p-2">
                    {/* sliders */}
                    {sliders.map((slide, inx) => (
                        <div
                            onClick={() => setCurrentSlider(inx)}
                            key={inx}
                            className={`h-1 w-6   border border-white ${currentSlider === inx
                                ? "px-5 bg-white duration-1000"
                                : "bg-transparent"
                                }  box-content cursor-pointer`}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};


