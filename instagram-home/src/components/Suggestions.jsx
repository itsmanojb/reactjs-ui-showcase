import React from 'react';

const SuggestedItem = ({ data }) => {
  return (
    <div className="flex items-center justify-between py-1.5 px-3">
      <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
        <img src={data.user.profile_picture} alt={data.user.username} />
      </div>
      <div className="mr-auto leading-none">
        <a
          href="#"
          className="font-semibold text-neutral-900 hover:underline text-sm"
        >
          {data.user.username}
        </a>
        <p className="text-[#8e8e8e] font-medium text-[12px]">{data.ref}</p>
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
  const suggestedItems = [
    {
      id: 1,
      ref: 'Followed by friend',
      user: {
        username: 'donte_hailey',
        profile_picture:
          'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
        name: 'Donte Hailey',
      },
    },
    {
      id: 2,
      ref: 'Follows you',
      user: {
        username: 'oleta.h',
        profile_picture:
          'https://xsgames.co/randomusers/assets/avatars/female/46.jpg',
        name: 'Oleta Holubar',
      },
    },
    {
      id: 3,
      ref: 'Followed by friend',
      user: {
        username: 'me_lucia',
        profile_picture:
          'https://xsgames.co/randomusers/assets/avatars/female/34.jpg',
        name: 'Lucia Warrington',
      },
    },
    {
      id: 4,
      ref: 'New to Instagram',
      user: {
        username: 'i.sydney',
        profile_picture:
          'https://xsgames.co/randomusers/assets/avatars/male/63.jpg',
        name: 'Sydney Sikorski',
      },
    },
    {
      id: 5,
      ref: 'New to Instagram',
      user: {
        username: 'Miss.Kia',
        profile_picture:
          'https://xsgames.co/randomusers/assets/avatars/female/0.jpg',
        name: 'Kia Lebard',
      },
    },
  ];
  return (
    <div className="pt-4 space-y-2">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-neutral-500 text-sm font-semibold">
          Suggestions for you
        </h3>
        <a href="#" className=" text-neutral-900 text-xs font-semibold">
          See All
        </a>
      </div>
      <div>
        {suggestedItems.map((item) => (
          <SuggestedItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
