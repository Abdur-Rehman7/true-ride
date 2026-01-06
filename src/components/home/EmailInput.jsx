export default function EmailInput() {
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center rounded-full bg-white shadow-md px-4 py-2">
        {/* Left icon */}
        <span className="text-gray-400 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </span>

        {/* Input */}
        <input
          type="email"
          placeholder="write e-mail here"
          className="flex-1 text-gray-700 placeholder-gray-400 focus:outline-none"
        />

        {/* Right button */}
        <button className="ml-3 flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400 hover:bg-yellow-500 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
