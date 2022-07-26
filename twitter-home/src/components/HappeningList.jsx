import { IoEllipsisHorizontal } from 'react-icons/io5';

const HappeningList = () => {
  return (
    <div className="_bg_l-g rounded-2xl overflow-hidden">
      <div className="p-4 font-black text-neutral-800 text-xl">
        What's happening
      </div>
      <div className="flex flex-col">
        <div className="cursor-pointer hover:bg-gray-100 py-3 px-4 flex items-start gap-3">
          <div className="flex flex-col">
            <div className="flex items-center text-xs text-gray-500 font-medium gap-x-1">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                <div className="font-bold text-gray-800">sadsadsad</div>
              </div>
              <div>&middot;</div>
              <div>Live</div>
            </div>
            <strong className="text-neutral-800 text-base mb-1 mt-1 leading-tight text-[14px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              nemo nihil obcaecati.
            </strong>
            <small className="text-slate-500 font-medium">
              trending with <span className="_text-theme">#fdfsdfs</span>,{' '}
              <span className="_text-theme">#fdfsdfs</span>,{' '}
              <span className="_text-theme">#fdfsdfs</span>
            </small>
          </div>
          <div className="ml-auto">
            <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
        <div className="cursor-pointer hover:bg-gray-100 py-2 px-4 flex items-start gap-3">
          <div className="flex flex-col">
            <div className="flex items-center text-xs text-gray-500 font-medium gap-x-1">
              <div>dsadasdas</div>
              <div>&middot;</div>
              <div>asdasdad</div>
            </div>
            <strong className="text-neutral-800 text-base mb-0.5 mt">
              #RanveerSingh
            </strong>
            <small className="text-slate-600 font-medium">200 tweets</small>
          </div>
          <div className="ml-auto">
            <button
              type="button"
              className="text-gray-500 w-8 h-8 rounded-full hover:text-[#1d9bf0] hover:bg-[#1d9bf01a] flex justify-center items-center transition"
            >
              <IoEllipsisHorizontal size={18} />
            </button>
          </div>
        </div>
        <div className="cursor-pointer hover:bg-gray-100 py-2 px-4 flex items-start gap-3">
          <div className="flex flex-col">
            <div className="flex items-center text-xs text-gray-400 font-medium gap-x-1">
              <span>dsadasdas</span>
              <span>&middot;</span>
              <span>asdasdad</span>
            </div>
            <strong className="text-neutral-800 text-base mb-0.5 mt">
              #RanveerSingh
            </strong>
            <small className="text-slate-600 font-medium">200 tweets</small>
          </div>
          <div className="ml-auto">
            <button
              type="button"
              className="text-gray-500 w-8 h-8 rounded-full hover:text-[#1d9bf0] hover:bg-[#1d9bf01a] flex justify-center items-center transition"
            >
              <IoEllipsisHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="cursor-pointer hover:bg-gray-100 _text-theme p-4 font-medium text-sm">
        Show More
      </div>
    </div>
  );
};

export default HappeningList;
