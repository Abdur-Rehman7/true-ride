import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function FotterEmailInput() {
  return (
    <div className="w-full flex justify-center items-center bg-black py-4">
      <div className="relative w-[420px]">
        {/* Input */}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full h-[56px] pl-12 pr-16 rounded-xl 
                     bg-[#0b0b0b] text-gray-300 placeholder-gray-500
                     border border-white/10
                     focus:outline-none focus:ring-1 focus:ring-yellow-400"
        />

        {/* Left Icon */}
        <FaEnvelope
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        {/* Send Button */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2
                     w-[44px] h-[44px] rounded-lg
                     bg-yellow-400 flex items-center justify-center
                     hover:bg-yellow-500 transition"
        >
          <FaPaperPlane className="text-black" />
        </button>
      </div>
    </div>
  );
}
