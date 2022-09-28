import type { NextPage } from 'next';
import Head from "next/head";
import WhyOrganisation from './src/components/organisations/WhyOrganisation';
import { Box } from '@chakra-ui/react';
import WayOfWork from './src/components/WayOfWork';
import ContactUs from './src/components/ContactUs';
import HeroSection from './src/components/HeroSection';
import Footer from './src/components/Footer';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Repozitory technology</title>
        <link href="../styles/textAnimation.module.css" rel="stylesheet" key="test" />
      </Head>
      <HeroSection />
      <WayOfWork />
      <WhyOrganisation />
      <ContactUs />
      <Footer />
    </Box>
  );
}

export default Home
