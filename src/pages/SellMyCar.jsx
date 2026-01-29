import { Link } from "react-router-dom";
const SellMyCar = () => {
  return (
    <>
      <div>
        <nav className="text-[24px] text-[#3B3B3B] mb-3 text-center">
          <Link to="/">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className=" font-medium">Sell My Car</span>
        </nav>

        <div className="text-[54px] font-semibold text-center">
          Add new listing in easy steps
        </div>

        <div>
            
        </div>
      </div>
    </>
  );
};

export default SellMyCar;
