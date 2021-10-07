import About from "../components/About";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeProducts from "../components/HomeProducts";

function Home() {
  return (
    <>
      <Hero />
      <main>
        <Categories />
        <HomeProducts />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default Home;
