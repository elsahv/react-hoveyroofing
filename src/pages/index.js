import React from 'react';
import ContactInfo from '../components/ContactInfo';
import Hero from '../components/Hero';
import RoofStyles from '../components/RoofStyles';
import { InfoData} from '../data/InfoData';
import { SliderData } from '../data/SliderData';
import InfoSection from '../components/InfoSection';

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <RoofStyles />
      <ContactInfo />
      
    </>
  );
};

export default Home;
