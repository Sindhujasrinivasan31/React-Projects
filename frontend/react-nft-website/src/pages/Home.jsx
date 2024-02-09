import React from 'react';
import  { Container } from 'reactstrap';
import HeroSection from '../components/ui/HeroSection';
import LiveAuction from '../components/ui/Live auction/LiveAuction';
import Sellersection from '../components/ui/Seller-section/Sellersection';
import Trending from '../components/ui/Trending-section/Trending';
import StepSection from '../components/ui/Step-section/StepSection';
const Home = () => {
  return (
    <>
    
    <HeroSection/>
    <LiveAuction/>
    <Sellersection/>
    <Trending />
    <StepSection />
   
    </>
    
  );
};

export default Home;