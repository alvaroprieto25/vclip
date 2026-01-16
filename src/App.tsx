import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Video from './components/sections/Video';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Video />
      <Reviews />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
