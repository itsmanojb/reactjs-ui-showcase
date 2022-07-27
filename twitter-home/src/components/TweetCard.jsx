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
    <article className="w-full border-b _border px-2 xs:px-4 cursor-pointer hover:bg-neutral-100">
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
            <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
              <img src={data.user.profile_picture} alt={data.user.name} />
            </div>
          </div>
          <div className="pb-3 flex flex-col">
            <div className="flex items-center justify-between relative">
              <div className="flex gap-2 items-baseline overflow-hidden">
                <span className="hover:underline font-bold text-neutral-900 text-sm truncate">
                  {data.user.name}
                </span>
                <span className="font-normal hidden xs:inline-block text-neutral-700 text-sm truncate">
                  @{data.user.username}
                </span>
                <span className="hover:underline font-medium text-neutral-400 text-xs truncate">
                  {data.posted_on}
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
                <p className="text-neutral-900 text-[14px] sm:text-[15px] leading-[20px] whitespace-pre-line">
                  {data.post_body}
                </p>
              </div>
              {data.post_media.length > 0 && (
                <div className="overflow-hidden rounded-2xl mt-3 flex gap-0.5 lg:h-[55vh] max-h-[720px]">
                  {data.post_media.map((img, i) => (
                    <div className="h-full flex-1" key={i}>
                      <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
              <div className="flex w-full mt-3 justify-between gap-1 lg:gap-3 max-w-[425px] relative h-8 -ml-1">
                <ActButton
                  icon={<FaRegComment size={18} />}
                  text={data.comments.length}
                />
                <ActButton
                  icon={<AiOutlineRetweet size={18} />}
                  text={data.retweets}
                />
                <ActButton
                  icon={<IoHeartOutline size={20} />}
                  text={data.likes}
                />
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
