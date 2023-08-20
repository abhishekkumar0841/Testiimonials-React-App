import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Buttons = ({ leftHandler, rightHandler, surpriseHandler}) => {

  return (
    <div>
      <div className="flex items-center justify-center mb-4 gap-10">
        <button onClick={leftHandler} className="text-indigo-600 text-2xl">
          <FaChevronLeft />
        </button>
        <button onClick={rightHandler} className="text-indigo-600 text-2xl">
          <FaChevronRight />
        </button>
      </div>
      <div>
        <button onClick={surpriseHandler} className="bg-indigo-600 text-white p-3">Surprise Me</button>
      </div>
    </div>
  );
};

export default Buttons;
