import Hero from "../components/home/hero";
import SearchFilter from "../components/home/SearchFilter";
import FeaturedListing from "../components/home/FeaturedListing";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-[95%] mx-auto">

      <SearchFilter />
      <FeaturedListing />
      </div>
    </div>
  );
}
