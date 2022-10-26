import type { NextPage } from 'next';
import Head from "next/head";
import WhyOrganisation from './src/components/organisations/WhyOrganisation';
import { Box } from '@chakra-ui/react';
import WayOfWork from './src/components/WayOfWork';
import ContactUs from './src/components/ContactUs';
import HeroSection from './src/components/HeroSection';
import Footer from './src/components/Footer';
import Services from './src/components/services';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Repozitory technology</title>
      </Head>
      <HeroSection />
      <WayOfWork />
      <WhyOrganisation />
      <Services/>
      <ContactUs />
      <Footer />
    </Box>
  );
}

export default Home
