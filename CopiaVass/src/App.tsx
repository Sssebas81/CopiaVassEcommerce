import Navbar from "./components/navbar/navbar";
import Heropage from "./components/hero/hero";
import Categories from "./components/categories/categories";
import OurProducts from "./components/ourproducts/OurProducts";
function App() {
  return (
    <div>
      <Navbar />
      <Heropage/>
      <Categories/>
      <OurProducts/>
    </div>
  );
}

export default App;
