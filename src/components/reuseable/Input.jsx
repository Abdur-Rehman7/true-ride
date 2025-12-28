const Input = (props) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor={props.htmlFor} className="text-[16px] font-semibold text-gray-700">
          {props.label}
        </label>

        <input
          id={props.id}
          type="text"
          placeholder={props.placeholder}
          className="
      h-10
      w-[158px]
      rounded-md
      border
      border-gray-300
      px-3
      text-sm
      outline-none
      focus:border-yellow-500
      focus:ring-1
      focus:ring-yellow-500
    "
        />
      </div>
    </>
  );
};

export default Input;
