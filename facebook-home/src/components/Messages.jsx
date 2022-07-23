import { useState } from 'react';
import { IoEllipsisHorizontal, IoCreateOutline } from 'react-icons/io5';
import { BsArrowsFullscreen, BsSearch } from 'react-icons/bs';
import { RiVideoAddFill } from 'react-icons/ri';
import { Chats } from '../lib/Chats';

const MessageItem = ({ data }) => {
  return (
    <div className="relative cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg flex items-center gap-2 py-2 pl-1 pr-4 transition">
      <div className="relative h-14 w-14 rounded-full bg-gray-100 overflow-hidden">
        <img
          src={data.user.profile_picture}
          alt={data.user.name}
          className="h-full w-full"
        />
      </div>
      <div
        className={`text-[15px] _text__default font-normal leading-tight flex-1 ${
          !data.isNew && 'opacity-70'
        }`}
      >
        <p className="font-semibold mb-0.5">{data.user.name}</p>
        <p className="overflow-hidden flex gap-2">
          <span
            className={`block max-w-[200px] truncate ${
              data.isNew ? 'font-semibold text-blue-500' : ''
            } text-xs`}
          >
            {data.message}
          </span>
          <span className="_text__muted text-[12px]">{data.sentOn}</span>
        </p>
      </div>
      {data.isNew && (
        <div className="bg-blue-600 absolute right-2 h-2.5 w-2.5 top-10 rounded-full"></div>
      )}
    </div>
  );
};

const Messages = () => {
  const [messages] = useState(Chats);
  return (
    <div className="_dd__wrapper -right-24 w-[356px] flex flex-col p-0">
      <div className="p-3 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-2xl _text__default my-1">Chats</h3>
          <div className="flex items-center gap-2 justify-between">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-400 w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 flex justify-center items-center transition"
            >
              <IoEllipsisHorizontal size={18} />
            </button>
            <button
              type="button"
              className="text-gray-500 dark:text-gray-400 w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 flex justify-center items-center transition"
            >
              <BsArrowsFullscreen size={14} />
            </button>
            <button
              type="button"
              className="text-gray-500 dark:text-gray-400 w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 flex justify-center items-center transition"
            >
              <RiVideoAddFill size={18} />
            </button>
            <button
              type="button"
              className="text-gray-500 dark:text-gray-400 w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 flex justify-center items-center transition"
            >
              <IoCreateOutline size={20} />
            </button>
          </div>
        </div>
        <div className="my-2">
          <div className="bg-gray-100 dark:bg-neutral-700 pl-10 pr-2 py-2 rounded-full relative">
            <span className="absolute left-4 top-3.5 opacity-60">
              <BsSearch size={14} />
            </span>
            <input
              type="text"
              className="bg-transparent outline-none text-sm w-48 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Search Messenger"
            />
          </div>
        </div>
        <div>
          {messages.map((msg) => (
            <MessageItem key={msg.id} data={msg} />
          ))}
        </div>
      </div>
      <div className="py-3 text-center border-t _divider">
        <span className="font-semibold cursor-pointer text-sm text-blue-500 hover:underline">
          See all in Messenger
        </span>
      </div>
    </div>
  );
};

export default Messages;
