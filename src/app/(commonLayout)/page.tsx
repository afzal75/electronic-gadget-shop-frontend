import { BannerSection } from '@/components/home/BannerSection';
import FlashSale from '@/components/home/FlashSale';
import TopBrands from '@/components/home/TopBrands';
import TrendingProduct from '@/components/home/TrendingProduct';
import Footer from '@/components/layout/Footer';
import React from 'react';

const Home = () => {
    return (
        <div>
            <BannerSection />
            <FlashSale />
            <TopBrands />
            <TrendingProduct />
            <Footer />
        </div>
    );
};

export default Home;