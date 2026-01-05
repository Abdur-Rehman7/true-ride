import Hero from "../components/home/hero";
import SearchFilter from "../components/home/SearchFilter";
import FeaturedListing from "../components/home/FeaturedListing";
import PopularModelSection from "../components/home/PopularModelSection";
import ServicesDetail from "../components/home/ServicesDetail";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-[95%] mx-auto">
        <SearchFilter />
        <FeaturedListing />
      </div>
      <PopularModelSection />
      <ServicesDetail />
    </div>
  );
}
