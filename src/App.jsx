import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/services/Services";
import Location from "./pages/Location/Place";
import Banner from "./pages/Banner/Banner";
import Footer from "./pages/Footer/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-400 h-screen">
        <Hero />
        <Services />
        <Location />
       <Banner />
       <Footer/>
      </div>
    </>
  );
}

export default App;
