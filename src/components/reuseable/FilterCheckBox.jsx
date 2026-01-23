export default function FilterCheckBox({ options = [], value = [], onChange }) {
  const toggle = (item) => {
    if (value.includes(item)) {
      onChange(value.filter((v) => v !== item));
    } else {
      onChange([...value, item]);
    }
  };

  return (
    <div className="w-full max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400">
      <div className="space-y-4">
        {options.map((item) => (
          <label
            key={item}
            className="flex cursor-pointer items-center gap-2 text-sm text-[#828282]"
          >
            <input
              type="checkbox"
              checked={value.includes(item)}
              onChange={() => toggle(item)}
              className=" h-4 w-4 rounded border border-gray-400 accent-primary flex items-center justify-center peer-checked:border-gray-400 peer-checked:ring-2 peer-checked:ring-white-400 "
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}
