import { BannerSection } from '@/components/home/BannerSection';
import FlashSale from '@/components/home/FlashSale';
import TopBrands from '@/components/home/TopBrands';
import React from 'react';

const Home = () => {
    return (
        <div>
            <BannerSection />
            <FlashSale />
            <TopBrands />
        </div>
    );
};

export default Home;