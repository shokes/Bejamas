import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';

const Home = function () {
  return (
    <section className='container'>
      <Header />
      <Hero />
      <Products />
    </section>
  );
};

export default Home;
