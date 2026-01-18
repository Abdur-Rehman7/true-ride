import React from "react";
import tablecheck from "./assets/table-check-image.svg";
import erroricon from "./assets/table-error-icon.svg";

const ComparisonTableTwo = ({ data }) => {
  if (!data) return null;

  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full table-fixed border border-gray-200 border-collapse">
        <thead>
          <tr>
            <th
              colSpan={3}
              className="bg-primary text-left text-black text-lg sm:text-xl font-semibold p-3 sm:p-4"
            >
              {data.heading}
            </th>
          </tr>
        </thead>

        <tbody>
          {data.specs.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="w-1/3 p-2 sm:p-3 text-left font-medium border-r break-words text-sm sm:text-base">
                {item.label}
              </td>

              <td className="w-1/3 p-2 sm:p-3 text-center border-r break-words">
                <div className="flex justify-center items-center">
                  {typeof item.car1 === "string" && item.car1.trim() !== "" ? (
                    <span className="text-sm sm:text-base">{item.car1}</span>
                  ) : item.car1 === true ? (
                    <img className="w-5 h-5 sm:w-6 sm:h-6" src={tablecheck} alt="check" />
                  ) : (
                    <img className="w-5 h-5 sm:w-6 sm:h-6" src={erroricon} alt="error" />
                  )}
                </div>
              </td>

              <td className="w-1/3 p-2 sm:p-3 text-center break-words">
                <div className="flex justify-center items-center">
                  {typeof item.car2 === "string" && item.car2.trim() !== "" ? (
                    <span className="text-sm sm:text-base">{item.car2}</span>
                  ) : item.car2 === true ? (
                    <img className="w-5 h-5 sm:w-6 sm:h-6" src={tablecheck} alt="check" />
                  ) : (
                    <img className="w-5 h-5 sm:w-6 sm:h-6" src={erroricon} alt="error" />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTableTwo;
