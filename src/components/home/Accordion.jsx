import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";

const items = [
  {
    title: "Car Insurance",
    preview:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: "Car Warranty",
    preview:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: "Car Finance Calculator",
    preview:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: "Car Affordability",
    preview:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b last:border-none">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-start py-4 text-left"
            >
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>

                {/* Preview text (shown when closed) */}
                {!isOpen && (
                  <p className="text-sm text-gray-500 mt-1">{item.preview}</p>
                )}
              </div>

              <IoChevronForward
                className={`mt-1 transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {/* Expanded content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-4 text-sm text-gray-500">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
