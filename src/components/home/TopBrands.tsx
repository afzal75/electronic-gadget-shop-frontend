import assets from "@/assets";
import BrandCard from "@/components/ui/BrandCard";

const TopBrands = () => {
    return (
        <div className="mt-20">

            <div className="mb-16">
                <h1 className="text-2xl text-center font-bold">Top Brands</h1>
                <p className="text-slate-600 md:w-1/2 mx-auto mt-5  text-center">
                    A mobile phone is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area, as opposed to a fixed-location phone.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-items-center items-center gap-5">
                <BrandCard image={assets.images.apple} brand="Apple" />
                <BrandCard image={assets.images.onePlus} brand="onePlus" />
                <BrandCard image={assets.images.realme} brand="Realme" />
                <BrandCard image={assets.images.asus} brand="Asus" />
                <BrandCard image={assets.images.samsung} brand="Samsung" />
                <BrandCard image={assets.images.oppo} brand="Oppo" />
            </div>
        </div>
    );
};

export default TopBrands;
