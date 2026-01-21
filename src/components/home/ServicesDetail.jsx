import Accordion from "./Accordion";
import quality from "./assets/quality.svg";
import exclusive from "./assets/exclusive.svg";
import transaction from "./assets/transaction.svg";
const ServicesDetail = () => {
  const stats = [
    { value: "124k+", label: "Active Users" },
    { value: "12k+", label: "Good Reviews" },
    { value: "32k+", label: "Car Available" },
  ];

  const features = [
    {
      img: quality,
      alt: "quality",
      title: "Quality Choice",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.",
    },
    {
      img: exclusive,
      alt: "exclusive",
      title: "Exclusive Service",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.",
    },
    {
      img: transaction,
      alt: "transaction",
      title: "Fast Transaction",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.",
    },
  ];
  return (
    <>
      <section>
        <div className="bg-primary w-full h-[416px] rounded-lg">
          <div className="grid grid-cols-2">
            <div className="m-6 ">
              <div className="text-[60px] font-bold">
                All the services we will provide you
              </div>
              <div className="text-[20px]">
                Search thousands of real listings from verified sellers. Compare
                prices, check car history, and connect instantly. Whether you're
                buying or selling, our platform makes every step effortless and
                secure.
              </div>
              <button className="bg-black text-white text-[18px] py-[12px] px-[24px] rounded-[10px] mt-4">
                See All
              </button>
            </div>
            <div className="relative">
              <div className="absolute top-14 right-20 ">
                <Accordion />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-[24px] mt-4 ml-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center bg-[#FAFAFA] rounded-[8px] py-[17px] px-[48px]"
            >
              <p className="text-[40px] font-semibold">{item.value}</p>
              <p className="text-[14px] text-[#9C9C9C]">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-[24px] bg-[#FAFAFA] mt-14 p-10">
          {features.map((item, index) => (
            <div key={index} className="flex gap-[12px]">
              <img
                src={item.img}
                alt={item.alt}
                className="w-[50px] h-[50px]"
              />
              <div className="flex flex-col gap-[6px]">
                <p className="text-[18px] font-semibold">{item.title}</p>
                <p className="text-[13px] text-[#9C9C9C]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesDetail;
