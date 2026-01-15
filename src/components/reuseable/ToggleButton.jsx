const ToggleButton = ({ isActive, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isActive}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full
        transition duration-200 ease-in-out cursor-pointer
        ${isActive ? "bg-primary" : "bg-gray-300"}
      `}
    >
      <span
        className={`
          inline-block h-4 w-4 rounded-full bg-white shadow
          transform transition duration-200 ease-in-out
          ${isActive ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
};

export default ToggleButton;
