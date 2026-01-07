import arrowicon from "./assets/subscription-arrow.svg";
import gmail from "./assets/gmail.svg";
export default function EmailInput() {
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center rounded-[14px] bg-white shadow-md px-4 py-2">
        {/* Left icon */}
        <span className="text-gray-400 mr-3">
          <img src={gmail} alt="gmail" />
        </span>

        {/* Input */}
        <input
          type="email"
          placeholder="write e-mail here"
          className="flex-1 text-gray-700 placeholder-[#919191] rounded-[14px] focus:outline-none"
        />

        {/* Right button */}
        <button className="ml-3 flex items-center justify-center w-9 h-9 rounded-[5px] bg-primary hover:bg-yellow-500 transition">
          <img src={arrowicon} alt="email subscription input icon" />
        </button>
      </div>
    </div>
  );
}
