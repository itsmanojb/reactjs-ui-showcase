import {
  IoEllipsisHorizontal,
  IoHeartOutline,
  IoCloseSharp,
} from 'react-icons/io5';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { BsSuitHeartFill } from 'react-icons/bs';

const ActButton = ({ icon, text = '', color = '', bg = '' }) => {
  return (
    <div className="relative group flex items-center justify-center text-xs pl-10 text-neutral-500">
      <button
        type="button"
        className="absolute text-gray-500 left-0 w-9 h-9 rounded-full group-hover:text-[#1d9bf0] group-hover:bg-[#1d9bf01a] flex justify-center items-center transition"
      >
        {icon}
      </button>
      {text && (
        <span className="group-hover:text-[#1d9bf0] pr-4 block">{text}</span>
      )}
    </div>
  );
};

const TweetCard = ({ data }) => {
  return (
    <article className="w-full border-b _border px-4 cursor-pointer hover:bg-neutral-100">
      <div className="flex flex-col">
        <div className="py-2 pl-9 min-h-[12px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BsSuitHeartFill size={14} className="text-slate-500" />
            <span className="font-bold text-xs text-slate-500 hover:underline cursor-pointer">
              someone liked
            </span>
          </div>
          {/* <div className="ml-auto -mr-2">
            <button
              type="button"
              className="text-gray-500 w-8 h-8 rounded-full hover:bg-[#1d9bf01a] flex justify-center items-center transition"
            >
              <IoCloseSharp size={18} />
            </button>
          </div> */}
        </div>
        <div className="flex gap-3 items-start">
          <div>
            <div className="h-12 w-12 rounded-full bg-gray-200"></div>
          </div>
          <div className="pb-3 flex flex-col">
            <div className="flex items-center justify-between relative">
              <div className="flex gap-2 items-baseline">
                <span className="block hover:underline font-bold text-neutral-900 text-sm">
                  name
                </span>
                <span className="block font-normal text-neutral-700 text-sm">
                  username
                </span>
                <span className="block hover:underline font-medium text-neutral-400 text-xs">
                  time
                </span>
              </div>
              <div className="ml-auto -mr-2 absolute -top-1 right-0">
                <button
                  type="button"
                  className="text-gray-500 w-8 h-8 rounded-full hover:text-[#1d9bf0] hover:bg-[#1d9bf01a] flex justify-center items-center transition"
                >
                  <IoEllipsisHorizontal size={18} />
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-neutral-900 text-[15px] leading-[20px] whitespace-pre-line">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis libero possimus commodi consequatur neque sit quia
                  dicta ex dolore temporibus repudiandae iste aliquam soluta
                  officiis tenetur ut. <br /> <br /> Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Blanditiis libero possimus
                  commodi consequatur neque sit quia dicta ex dolore temporibus
                  repudiandae iste aliquam soluta officiis tenetur ut.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl mt-3 flex gap-0.5 min-h-[360px] h-[55vh] max-h-[720px]">
                <div className="h-full flex-1">
                  <img
                    src="https://images.pexels.com/photos/3276046/pexels-photo-3276046.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-full flex-1">
                  <img
                    src="https://images.pexels.com/photos/4113831/pexels-photo-4113831.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex mt-3 justify-between gap-3 max-w-[425px] relative h-8 -ml-1">
                <ActButton icon={<FaRegComment size={18} />} text="91" />
                <ActButton icon={<AiOutlineRetweet size={18} />} text="264" />
                <ActButton icon={<IoHeartOutline size={20} />} text="2,209" />
                <ActButton icon={<FiShare size={18} />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TweetCard;
