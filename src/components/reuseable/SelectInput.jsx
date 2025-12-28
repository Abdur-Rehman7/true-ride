const SelectInput = ({ label, htmlFor, options }) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={htmlFor}
        className="text-sm font-semibold text-black"
      >
        {label}
      </label>

      <select
        id={htmlFor}
        className="
          h-[48px]
          rounded-lg
          border
          border-gray-300
          bg-white
          px-3
          text-sm
          text-[#4F4F4F]
          focus:border-primary
          focus:outline-none
          focus:ring-1
          focus:ring-primary
        "
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
