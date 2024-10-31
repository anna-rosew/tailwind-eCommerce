import { NavBar } from "../app/Components/Navbar";
import { Hero } from "../app/Components/Hero";
import { Features } from "../app/Components/Features";
import { FAQs } from "../app/Components/FAQs";
import { Prices } from "../app/Components/Prices";
import { Cta } from "../app/Components/Cta";
import { Footer } from "../app/Components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
      </div>
      <FAQs />
      <Cta />
      <Prices />
      <Footer />
    </div>
  );
}
