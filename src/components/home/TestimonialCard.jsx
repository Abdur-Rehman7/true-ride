import { IoStar } from "react-icons/io5";

export default function TestimonialCard({
  image,
  name,
  company,
  rating = 5,
  text,
  commaIcon,
}) {
  return (
    <div className="bg-white p-5 rounded-[20px] shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <img
            src={image}
            alt={name}
            className="w-[64px] h-[64px] rounded-full object-cover bg-pink-100"
          />
          <div className="mt-1">
            <p className="font-semibold text-[16px]">{name}</p>
            <p className="text-sm text-[#7E8492]">{company}</p>
          </div>
        </div>

        {commaIcon && <img src={commaIcon} alt="quote" className="w-6 h-6" />}
      </div>

      {/* Rating */}
      <div className="flex items-center text-yellow-400 text-sm mt-3">
        {[...Array(5)].map((_, i) => (
          <IoStar key={i} />
        ))}
        <span className="text-black ml-2 font-semibold">
          {rating.toFixed(1)}
        </span>
      </div>

      {/* Text */}
      <p className="text-gray-600 text-sm mt-3 leading-relaxed">{text}</p>
    </div>
  );
}
