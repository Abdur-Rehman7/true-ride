import React from "react";

const SpecsComparisonTable = ({ data }) => {
  if (!data) return null;

  const totalColumns = data.cars.length + 1; // label + cars
  const columnWidth = `${100 / totalColumns}%`;

  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full table-fixed border-collapse border border-gray-200">
        <thead>
          <tr>
            <th
              className="bg-primary text-left p-3 font-semibold break-words"
              style={{ width: columnWidth }}
            >
              {data.heading}
            </th>

            {data.cars.map((car, index) => (
              <th
                key={index}
                className="bg-primary text-center p-3 font-semibold break-words"
                style={{ width: columnWidth }}
              >
                {car}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.specs.map((spec, index) => (
            <tr key={index} className="border-t">
              <td
                className="p-3 font-medium border-r break-words"
                style={{ width: columnWidth }}
              >
                {spec.label}
              </td>

              {spec.values.map((value, idx) => (
                <td
                  key={idx}
                  className="p-3 text-center border-r last:border-r-0 break-words"
                  style={{ width: columnWidth }}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecsComparisonTable;
