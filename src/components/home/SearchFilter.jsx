import SelectInput from "../reuseable/SelectInput";
import search from "./assets/search.svg";

const SearchFilter = () => {
  // Options for each dropdown
  const typeOptions = [
    { value: "", label: "Select" },
    { value: "car", label: "Car" },
    { value: "truck", label: "Truck" },
    { value: "suv", label: "SUV" },
  ];

  const makeOptions = [
    { value: "", label: "Select" },
    { value: "infiniti", label: "Infiniti" },
    { value: "toyota", label: "Toyota" },
    { value: "honda", label: "Honda" },
  ];

  const yearOptions = [
    { value: "", label: "Select" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
  ];

  const modelOptions = [
    { value: "", label: "Select" },
    { value: "qx50", label: "QX50" },
    { value: "qx60", label: "QX60" },
    { value: "qx80", label: "QX80" },
  ];

  const priceOptions = [
    { value: "", label: "Select" },
    { value: "0-5000", label: "$0 – $5,000" },
    { value: "5000-10000", label: "$5,000 – $10,000" },
    { value: "10000-20000", label: "$10,000 – $20,000" },
    { value: "20000-30000", label: "$20,000 – $30,000" },
    { value: "30000-50000", label: "$30,000 – $50,000" },
    { value: "50000+", label: "$50,000+" },
  ];

  const locationOptions = [
    { value: "", label: "Select" },
    { value: "new-york", label: "New York" },
    { value: "los-angeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
  ];

  return (
    <div className="relative -mt-12 z-20">
      <div className="mx-auto w-[95%] rounded-xl border bg-white px-4 py-6 md:px-6 md:py-8 shadow-lg">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 items-end">
          <SelectInput htmlFor="Type" label="Type" options={typeOptions} />
          <SelectInput htmlFor="Make" label="Make" options={makeOptions} />
          <SelectInput htmlFor="Year" label="Year" options={yearOptions} />
          <SelectInput htmlFor="Model" label="Model" options={modelOptions} />
          <SelectInput htmlFor="PriceRange" label="Price Range" options={priceOptions} />
          <SelectInput htmlFor="Location" label="Location" options={locationOptions} />

          <button className="col-span-2 flex h-[48px] items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-black shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95 md:col-span-1">
            <img src={search} alt="Search" className="h-5 w-5" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
