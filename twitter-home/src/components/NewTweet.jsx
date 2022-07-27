import { useState } from 'react';
import { IoImageOutline } from 'react-icons/io5';
import { AiOutlineGif, AiOutlineCalendar } from 'react-icons/ai';
import { BiPoll, BiMap } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { FaGlobeAmericas } from 'react-icons/fa';
import useAuthContext from '../hooks/useAuthContext';

const NewTweet = () => {
  const { user } = useAuthContext();

  const [focused, setFocused] = useState(false);
  const [tweetText, setTweetText] = useState('');
  return (
    <div className="py-2 border-b _border">
      <div className="px-2 xs:px-4 flex items-start gap-3">
        <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
          <img
            src={user.profile_picture}
            alt={user.name}
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="w-full pt-4 pb-7 pl-2 relative">
            <textarea
              className="w-full outline-none placeholder:text-slate-500 font-medium text-lg resize-none mb-4"
              placeholder="What's happening?"
              rows="1"
              onFocus={() => setFocused(true)}
              onChange={(e) => setTweetText(e.target.value)}
            ></textarea>
            {focused && (
              <span className="absolute text-[#1d9bf0] hover:bg-[#1d9bf01a] px-3 py-1.5 leading-none text-sm font-bold rounded-full cursor-pointer bottom-2 flex items-center gap-2 -ml-2">
                <FaGlobeAmericas /> Everyone can reply
              </span>
            )}
          </div>
          <div className="flex justify-between items-baseline border-t _border pt-2 pb-1">
            <div className="flex justify-between gap-1">
              <button
                type="button"
                className="w-8 h-8 rounded-full text-[#1d9bf0] hover:bg-[#1d9bf01a] flex justify-center items-center transition"
              >
                <IoImageOutline size={20} />
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full text-[#1d9bf0] hover:bg-[#1d9bf01a] flex justify-center items-center transition"
              >
                <AiOutlineGif size={20} />
              </button>
              <button
                type="button"
                className="hidden w-8 h-8 rounded-full text-[#1d9bf0] hover:bg-[#1d9bf01a] md:flex justify-center items-center transition"
              >
                <BiPoll size={20} />
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full text-[#1d9bf0] hover:bg-[#1d9bf01a] flex justify-center items-center transition"
              >
                <BsEmojiSmile size={20} />
              </button>
              <button
                type="button"
                className="hidden w-8 h-8 rounded-full text-[#1d9bf0] hover:bg-[#1d9bf01a] md:flex justify-center items-center transition"
              >
                <AiOutlineCalendar size={20} />
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full text-[#1d9bf0] hover:bg-[#1d9bf01a] flex justify-center items-center transition"
              >
                <BiMap size={20} />
              </button>
            </div>
            <div>
              <button
                type="button"
                disabled={tweetText.trim() === ''}
                className="_tweet-btn px-4 py-1 text-sm h-[34px] disabled:opacity-50"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTweet;
