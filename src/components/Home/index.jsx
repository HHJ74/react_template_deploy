import React from 'react';
import HeroSection from './HeroSection' ;
import FeaturesSection from './FeaturesSection';
import Workflow from './Workflow'
import Pricing from './Pricing';
import Review from './Reviews';



const index = () => {
  return (
    <div>
      <div className="container">
        <HeroSection/>
        <FeaturesSection/>
        <Workflow/>
        <Pricing/>
        <Review/>
      </div>
    </div>
  )
}

export default index;