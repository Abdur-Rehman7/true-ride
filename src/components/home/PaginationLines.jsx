const PaginationLines = ({ total = 4, activeIndex = 3 }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`h-1 rounded-full transition-all duration-300
            ${
              index === activeIndex
                ? "w-8 bg-yellow-400"
                : "w-6 bg-gray-200"
            }`}
        />
      ))}
    </div>
  );
};

export default PaginationLines;
