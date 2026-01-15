import { IoStar } from "react-icons/io5";

export default function Rating({ rating = 5, max = 5 }) {
  return (
    <div className="flex items-center text-yellow-400 text-sm">
      {[...Array(max)].map((_, i) => (
        <IoStar
          key={i}
          className={i < Math.round(rating) ? "opacity-100" : "opacity-30"}
        />
      ))}

      <span className="text-black ml-2 font-semibold">{rating.toFixed(1)}</span>
    </div>
  );
}
