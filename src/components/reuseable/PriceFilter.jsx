import { useState } from "react";

export default function PriceFilter({ min = 0, max = 100000, step = 1000 }) {
  const [minVal, setMinVal] = useState(10000);
  const [maxVal, setMaxVal] = useState(50000);

  const percent = (value) => ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-lg space-y-6">
      {/* Slider */}
      <div className="relative h-10">
        {/* Track */}
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded bg-gray-200" />

        {/* Active range */}
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded bg-orange-400"
          style={{
            left: `${percent(minVal)}%`,
            right: `${100 - percent(maxVal)}%`,
          }}
        />

        {/* Min range */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={(e) => setMinVal(Math.min(+e.target.value, maxVal - step))}
          className="range-thumb pointer-events-none absolute h-0 w-full appearance-none"
        />

        {/* Max range */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={(e) => setMaxVal(Math.max(+e.target.value, minVal + step))}
          className="range-thumb pointer-events-none absolute h-0 w-full appearance-none"
        />

        {/* Min bubble */}
        <Bubble left={`${percent(minVal)}%`} value={minVal} />

        {/* Max bubble */}
        <Bubble left={`${percent(maxVal)}%`} value={maxVal} />
      </div>

      {/* Inputs */}
      <div className="flex items-center gap-4">
        <InputBox value={minVal} onChange={setMinVal} />
        <span className="text-xl">–</span>
        <InputBox value={maxVal} onChange={setMaxVal} />
      </div>
    </div>
  );
}

/* Bubble */
function Bubble({ left, value }) {
  return (
    <div
      className="absolute -top-10 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-sm font-medium shadow"
      style={{ left }}
    >
      ${value.toLocaleString()}
    </div>
  );
}

/* Input box */
function InputBox({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(+e.target.value)}
      className="w-full rounded-xl border border-[#BDBDBD] py-4 px-4 text-[16px] text-center outline-none "
    />
  );
}
