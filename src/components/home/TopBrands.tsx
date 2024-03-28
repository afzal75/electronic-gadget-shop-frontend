import assets from "@/assets";
import BrandCard from "@/components/ui/BrandCard";
// import Container from "@/components/ui/Container";

const TopBrands = () => {
    return (
        <div className="mt-20">
            {/* <Container> */}
            <div className="mb-16">
                <h1 className="text-2xl text-center font-bold">Top TopBrands</h1>
                <p className="text-slate-600 md:w-1/2 mx-auto mt-5  text-center">
                    Discover the pinnacle of laptop excellence with LapLux top
                    categories, where cutting-edge technology meets unparalleled
                    performance.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-items-center items-center gap-5">
                <BrandCard image={assets.images.apple} title="Apple" />
                <BrandCard image={assets.images.dell} title="Dell" />
                <BrandCard image={assets.images.hp} title="HP" />
                <BrandCard image={assets.images.asus} title="ASUS" />
                <BrandCard image={assets.images.samsung} title="Samsung" />
                <BrandCard image={assets.images.acer} title="Acer" />
            </div>
            {/* </Container> */}
        </div>
    );
};

export default TopBrands;
