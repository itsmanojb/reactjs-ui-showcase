import { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { BsChevronDoubleUp, BsChevronDoubleDown } from 'react-icons/bs';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { MdVerified } from 'react-icons/md';
import { Chats } from '../lib/Messages';

const Messages = () => {
  const [collapsed, setCollapsed] = useState(true);
  const recentMessages = Chats;
  return (
    <div className="hidden lg:block fixed bottom-0 right-5">
      <div
        className="w-[350px] xl:w-[400px] _shadow ml-auto bg-white"
        style={{ borderRadius: '1rem 1rem 0 0' }}
      >
        <div
          className={`${
            collapsed ? 'h-[53px]' : 'h-[80vh] max-h-[530px]'
          } overflow-auto`}
          style={{ borderRadius: '1rem 1rem 0 0' }}
        >
          <div
            className="sticky top-0 flex grow items-center px-4 mb-auto cursor-pointer min-h-[53px] bg-white bg-opacity-80 backdrop-blur z-[2]"
            onClick={() => setCollapsed(!collapsed)}
          >
            <div className="text-neutral-800 text-xl font-extrabold">
              Messages
            </div>
            <div className="ml-auto flex -mr-1 gap-1">
              <button
                type="button"
                className="text-gray-500 w-10 h-10 rounded-full hover:bg-gray-200 flex justify-center items-center transition"
              >
                <FiMail size={18} />
              </button>
              <button
                type="button"
                className="text-gray-500 w-10 h-10 rounded-full hover:bg-gray-200 flex justify-center items-center transition"
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? (
                  <BsChevronDoubleUp size={20} />
                ) : (
                  <BsChevronDoubleDown size={20} />
                )}
              </button>
            </div>
          </div>
          {!collapsed && (
            <div className="overflow-y-auto">
              <div className="flex flex-col">
                {recentMessages.map((msg, i) => (
                  <div
                    className="cursor-pointer group hover:bg-gray-100 py-3 px-4 flex items-center gap-3"
                    key={i}
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                      <img src={msg.user.profile_picture} alt={msg.user.name} />
                    </div>
                    <div className="flex flex-1 flex-col justify-center leading-none overflow-hidden">
                      <p className="flex items-center gap-1 relative">
                        <strong className="font-bold text-sm text-slate-800 truncate">
                          {msg.user.name}
                        </strong>
                        {msg.user.isVerified && (
                          <MdVerified size={16} className="_text-theme" />
                        )}
                        <span className="text-slate-600 font-medium text-sm truncate">
                          @{msg.user.username}
                        </span>
                        <span className="text-gray-400 font-medium text-sm truncate">
                          &middot; {msg.sentOn}
                        </span>
                        <div className="ml-auto hidden group-hover:inline">
                          <button
                            type="button"
                            className="text-gray-500 w-8 h-8 -mb-3 rounded-full hover:text-[#1d9bf0] hover:bg-[#1d9bf01a] flex justify-center items-center transition"
                          >
                            <IoEllipsisHorizontal size={18} />
                          </button>
                        </div>
                      </p>
                      <p className="text-slate-700 font-medium text-sm">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
