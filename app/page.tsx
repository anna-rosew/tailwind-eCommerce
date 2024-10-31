import { NavBar } from "../app/Components/Navbar";
import { Hero } from "../app/Components/Hero";
import { Features } from "../app/Components/Features";
import { FAQs } from "../app/Components/FAQs";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
      </div>
      <FAQs />
    </div>
  );
}
