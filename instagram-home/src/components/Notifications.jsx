import React from 'react';

const Notifications = () => {
  const newNotif = [
    {
      id: 1,
      created_on: '3 w',
      text: 'liked your photo',
      user: {
        username: 'aromaticplanks',
        profile_picture:
          'https://xsgames.co/randomusers/assets/avatars/female/64.jpg',
        name: 'Shizue Overhoff',
      },
      media: {
        url: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg',
      },
    },
    {
      id: 2,
      created_on: '4 w',
      text: 'liked your photo',
      user: {
        username: 'breathcaviar',
        profile_picture:
          'https://xsgames.co/randomusers/assets/avatars/female/30.jpg',
        name: 'Jenni Covian',
      },
      media: {
        url: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg',
      },
    },
    {
      id: 3,
      created_on: '4 w',
      text: 'liked your photo',
      user: {
        username: 'breathcaviar',
        profile_picture:
          'https://xsgames.co/randomusers/assets/avatars/female/30.jpg',
        name: 'Jenni Covian',
      },
      media: {
        url: 'https://xsgames.co/randomusers/assets/avatars/female/31.jpg',
      },
    },
  ];

  const oldNotif = [
    {
      id: 1,
      created_on: '2 mo',
      text: 'commented your photo',
      user: {
        username: 'lacrossehardly',
        profile_picture:
          'https://xsgames.co/randomusers/assets/avatars/female/35.jpg',
        name: 'Tory Frommer',
      },
      media: {
        url: 'https://xsgames.co/randomusers/assets/avatars/female/70.jpg',
      },
    },
  ];

  return (
    <div className="absolute w-[360px] md:w-[500px] top-2 -right-10">
      <div
        className="divide-y bg-white rounded-md overflow-hidden space-y-3"
        style={{
          boxShadow: '0 0 5px 1px rgba(0,0,0, .0975)',
        }}
      >
        <div>
          <div className="font-semibold text-neutral-700 text-sm px-3 py-2">
            This Month
          </div>
          <div className="space-y-4 py-2">
            {newNotif.map((notif) => (
              <div
                key={notif.id}
                className="flex items-center justify-between gap-3 cursor-pointer px-4"
              >
                <div className="h-12 w-12 border rounded-full bg-gray-50 overflow-hidden">
                  <img
                    src={notif.user.profile_picture}
                    alt={notif.user.username}
                    srcset=""
                  />
                </div>
                <div className="mr-auto flex-1 text-neutral-700 text-sm leading-tight">
                  <span className="font-bold  text-neutral-800">
                    {notif.user.username}
                  </span>{' '}
                  {notif.text}
                  <span className="text-neutral-400 ml-2">
                    {notif.created_on}
                  </span>
                </div>
                <div className="h-12 w-12 bg-gray-50">
                  <img src={notif.media.url} alt="" className="h-full w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="font-semibold text-neutral-700 text-sm px-3 py-2">
            Earlier
          </div>
          <div className="space-y-4 pt-2 pb-5">
            {oldNotif.map((notif) => (
              <div
                key={notif.id}
                className="flex items-center justify-between gap-3 cursor-pointer px-4"
              >
                <div className="h-12 w-12 border rounded-full bg-gray-50 overflow-hidden">
                  <img
                    src={notif.user.profile_picture}
                    alt={notif.user.username}
                    srcset=""
                  />
                </div>
                <div className="mr-auto flex-1 text-neutral-700 text-sm leading-tight">
                  <span className="font-bold  text-neutral-800">
                    {notif.user.username}
                  </span>{' '}
                  {notif.text}
                  <span className="text-neutral-400 ml-2">
                    {notif.created_on}
                  </span>
                </div>
                <div className="h-12 w-12 bg-gray-50">
                  <img src={notif.media.url} alt="" className="h-full w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
