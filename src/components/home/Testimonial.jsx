import testimonial1 from "./assets/testimonial-1.png";
import testimonial2 from "./assets/testimonial-2.png";
import testimonial3 from "./assets/testimonial-3.png";
import comma from "./assets/comma.svg";
import TestimonialCard from "./TestimonialCard";
import PaginationLines from "./PaginationLines";
const Testimonial = () => {
  return (
    <>
      <div className="bg-[#1E1D18] py-8">
        <div className="text-[44px] text-white text-center font-semibold">Our Happy Customers</div>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-8 my-4 gap-6">
          <TestimonialCard
            image={testimonial1}
            name="Anna Müller"
            company="Auto Hunt"
            rating={5.0}
            commaIcon={comma}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />

          <TestimonialCard
            image={testimonial2}
            name="John Carter"
            company="Car Zone"
            rating={4.8}
            commaIcon={comma}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />

          <TestimonialCard
            image={testimonial3}
            name="Emily Watson"
            company="Drive Hub"
            rating={5.0}
            commaIcon={comma}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
        <PaginationLines total={4} activeIndex={3} />
      </div>
    </>
  );
};

export default Testimonial;
