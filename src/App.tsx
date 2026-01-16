import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Video from './components/sections/Video';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <Layout>
        <Hero />
        <Features />
        <Video />
        <Reviews />
        <Contact />
        <Footer />
      </Layout>
    </HelmetProvider>
  );
}

export default App;
