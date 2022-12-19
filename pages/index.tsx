import type { NextPage } from 'next';
import Head from "next/head";
import { Box } from '@chakra-ui/react';
import WayOfWork from './src/components/WayOfWork';
import HeroSection from './src/components/HeroSection';
import Footer from './src/components/Footer';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Repozitory technology</title>
      </Head>
      <HeroSection />
      <Footer />
    </Box>
  );
}

export default Home
