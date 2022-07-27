import { BsStars } from 'react-icons/bs';

const HomeHeader = () => {
  return (
    <div className="sticky top-0 z-10 cursor-pointer">
      <div className="h-[53px] w-full px-2 xs:px-4 max-w-[600px] flex items-center justify-between bg-white bg-opacity-80 backdrop-blur">
        <h2 className="font-bold text-xl text-neutral-800">Home</h2>
        <div className="ml-auto -mr-2">
          <button
            type="button"
            className="text-gray-500 left-0 w-9 h-9 rounded-full hover:text-neutral-700 hover:bg-gray-200 flex justify-center items-center transition"
          >
            <BsStars size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
