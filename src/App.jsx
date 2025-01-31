import Header from "./components/Header"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import Categories from "./components/Categories"
import Testimonials from "./components/Testimonials"
import About from "./components/About"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts /> 
        <Categories />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
};
export default App;