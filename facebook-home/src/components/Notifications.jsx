import { useState } from 'react';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { UserNotifications } from '../lib/Notifications';

const NotificationItem = ({ data }) => {
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
        <p>
          <span className="font-semibold">{data.user.name}</span> {data.message}
        </p>
        <span
          className={`${
            data.isNew ? 'font-semibold text-blue-500' : ''
          } text-xs`}
        >
          {data.created_on}
        </span>
      </div>
      {data.isNew && (
        <div className="bg-blue-600 absolute right-1 h-2.5 w-2.5 top-[50%] -translate-y-[50%] rounded-full"></div>
      )}
    </div>
  );
};

const Notifications = () => {
  const [notifType, setNotifType] = useState('all');
  const [notifications] = useState(UserNotifications);
  return (
    <div className="_dd__wrapper -right-12 w-[356px]">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl _text__default my-1">
          Notifications
        </h3>
        <div>
          <button
            type="button"
            className="text-gray-500 w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 flex justify-center items-center transition"
          >
            <IoEllipsisHorizontal size={18} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 my-1">
        <div
          className={`px-4 py-1.5 rounded-full font-semibold text-[16px] cursor-pointer ${
            notifType === 'all'
              ? 'bg-blue-100 dark:bg-[#2d88ff33] text-blue-500'
              : ''
          }`}
          onClick={() => setNotifType('all')}
        >
          All
        </div>
        <div
          className={`px-4 py-1.5 rounded-full font-semibold text-[16px] cursor-pointer ${
            notifType === 'new' ? 'bg-blue-100 text-blue-500' : ''
          }`}
          onClick={() => setNotifType('new')}
        >
          Unread
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="_text__default">Earlier</span>
        <span className="_hover cursor-pointer p-2 text-sm text-blue-500 rounded-[4px]">
          See All
        </span>
      </div>
      <div>
        {notifications.map((notif) => (
          <NotificationItem key={notif.id} data={notif} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
