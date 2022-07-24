import React from 'react';

const SuggestedItem = () => {
  return (
    <div className="flex items-center justify-between py-1.5 px-3">
      <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
        <img
          src="https://xsgames.co/randomusers/assets/avatars/female/23.jpg"
          alt=""
        />
      </div>
      <div className="mr-auto leading-none">
        <a
          href="#"
          className="font-semibold text-neutral-900 hover:underline text-sm"
        >
          username
        </a>
        <p className="text-[#8e8e8e] font-medium text-[12px]">Follows you</p>
      </div>
      <button
        type="button"
        className="cursor-pointer _prime font-bold text-xs px-2"
      >
        Follow
      </button>
    </div>
  );
};
const Suggestions = () => {
  return (
    <div className="pt-4 space-y-1">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-neutral-500 text-sm font-semibold">
          Suggestions for you
        </h3>
        <a href="#" className=" text-neutral-900 text-xs font-semibold">
          See All
        </a>
      </div>
      <div>
        {[...Array(5)].map((_, i) => (
          <SuggestedItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
