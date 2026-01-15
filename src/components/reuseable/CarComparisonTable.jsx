import React from "react";

const CarComparisonTable = ({ cars }) => {
  if (!cars || cars.length === 0) return null;

  // Collect all unique dimensions across all cars
  const dimensionsSet = new Set();
  cars.forEach(car => {
    Object.keys(car.specs).forEach(dim => dimensionsSet.add(dim));
  });
  const dimensions = Array.from(dimensionsSet);

  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr>
            <th className="bg-primary text-white p-2">Dimensions</th>
            {cars.map((car, idx) => (
              <th key={idx} className="bg-primary text-white p-2">
                {car.model}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {dimensions.map((dim, index) => (
            <tr key={index}>
              <td className="border p-2 font-semibold">{dim}</td>
              {cars.map((car, idx) => (
                <td key={idx} className="border p-2">
                  {/* Show value if exists, otherwise "-" */}
                  {car.specs[dim] ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarComparisonTable;
