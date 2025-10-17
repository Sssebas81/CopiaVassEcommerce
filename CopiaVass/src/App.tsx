import Navbar from "./components/navbar/Navbar";
import Heropage from "./components/hero/Hero";
import Categories from "./components/categories/Categories";
import OurProducts from "./components/ourproducts/OurProducts";
import Collage from "./components/CollageSection/Collage";
import SetupIdeas from "./components/Setup/setup";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div>
      <Navbar />
      <Heropage/>
      <Categories/>
      <OurProducts/>
      <SetupIdeas />
      <Collage />
      <Footer />
    </div>
  );
}

export default App;
