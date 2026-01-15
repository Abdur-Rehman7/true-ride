import dropdownicon from "./assets/dropdown-icon.svg";

const SelectInput = ({
  label,
  htmlFor,
  options,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="text-sm font-semibold text-black"
        >
          {label}
        </label>
      )}

      <div className="relative w-full">
        <select
          id={htmlFor}
          value={value}
          onChange={onChange}
          className="
            h-[48px]
            w-full
            appearance-none
            rounded-lg
            border
            border-gray-300
            bg-white
            px-3
            pr-10
            text-sm
            text-[#4F4F4F]
            focus:border-primary
            focus:outline-none
            focus:ring-1
            focus:ring-primary
          "
        >
          <option value="">Select car</option>

          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
          <img src={dropdownicon} alt="dropdown icon" />
        </span>
      </div>
    </div>
  );
};

export default SelectInput;
