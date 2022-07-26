import React from 'react';

const FollowSuggestions = () => {
  return (
    <div className="_bg_l-g rounded-2xl overflow-hidden">
      <div className="p-4 font-black text-neutral-800 text-xl">
        Who to follow
      </div>
      <div className="flex flex-col">
        <div
          className="cursor-pointer hover:bg-gray-100 py-3 px-4 flex items-center gap-3"
          role={'button'}
        >
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="flex flex-1 flex-col justify-center leading-none overflow-hidden">
            <strong className="font-bold text-sm text-slate-800 truncate">
              Username lastname
            </strong>
            <p className="text-slate-500 font-semibold text-sm">@asdasdsa</p>
          </div>
          <button
            type="button"
            className="ml-auto rounded-full _bg-black hover:bg-neutral-800 text-white font-bold px-4 py-2 leading-none h-8 text-[15px]"
          >
            Follow
          </button>
        </div>
        <div
          className="cursor-pointer hover:bg-gray-100 py-3 px-4 flex items-center gap-3"
          role={'button'}
        >
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="flex flex-1 flex-col justify-center leading-none overflow-hidden">
            <strong className="font-bold text-sm text-slate-800 truncate">
              Username lastname
            </strong>
            <p className="text-slate-500 font-semibold text-sm">@asdasdsa</p>
          </div>
          <button
            type="button"
            className="ml-auto rounded-full _bg-black hover:bg-neutral-800 text-white font-bold px-4 py-2 leading-none h-8 text-[15px]"
          >
            Follow
          </button>
        </div>
      </div>
      <div className="cursor-pointer hover:bg-gray-100 _text-theme p-5 font-medium text-sm">
        Show More
      </div>
    </div>
  );
};

export default FollowSuggestions;
