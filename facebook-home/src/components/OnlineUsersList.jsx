import { useState } from 'react';
import { RiVideoAddFill } from 'react-icons/ri';
import { IoSearchOutline, IoEllipsisHorizontal } from 'react-icons/io5';
import { MdOutlineAdd, MdOutlineCreate } from 'react-icons/md';
import { OnlineUsers } from '../lib/OnlineUsers';

const ListActionButton = ({ icon }) => {
  return (
    <button
      type="button"
      className="text-gray-500 w-8 h-8 rounded-full hover:bg-gray-200 flex justify-center items-center transition"
    >
      {icon}
    </button>
  );
};

export const FAB = () => {
  return (
    <button
      type="button"
      className="text-gray-800 w-12 h-12 fixed bottom-4 right-4 md:bottom-8 md:right-8 z-20 rounded-full hover:bg-gray-200 flex justify-center items-center bg-white"
      style={{
        boxShadow:
          '0 2px 4px rgba(0, 0, 0, 0.1),0 12px 28px rgba(0, 0, 0, 0.2)',
      }}
    >
      <MdOutlineCreate size={24} />
    </button>
  );
};

const Avatar = ({ imgUrl, altText, online = true, hasStory = false }) => {
  return (
    <div className="relative h-10 w-10 rounded-full">
      <img src={imgUrl} alt={altText} className="h-9 w-9 m-1 rounded-full" />
      {online && (
        <div className="absolute bg-green-500 h-3 w-3 rounded-full -bottom-1 -right-1 border-2 border-white z-10"></div>
      )}
      {hasStory && (
        <div className="absolute h-9 w-9 rounded-full bottom-0 right-0 ring-2 ring-blue-500 ring-offset-2"></div>
      )}
    </div>
  );
};

const ListItem = ({ data }) => {
  return (
    <div className="cursor-pointer hover:bg-gray-100 rounded-lg flex items-center gap-4 p-2 transition">
      <Avatar
        imgUrl={data.avatar}
        altText={data.name}
        online={true}
        hasStory={data.hasStory}
      />
      <div className="font-base">{data.name}</div>
    </div>
  );
};

const OnlineUsersList = () => {
  const [onlineUsers] = useState(OnlineUsers);

  return (
    <div className="divide-y pr-4 space-y-4 pb-8">
      <div>
        <div className="flex items-center justify-between pt-4 pb-2">
          <h3 className="font-semibold text-gray-500">Contacts</h3>
          <div className="inline-flex gap-2 items-center justify-between">
            <ListActionButton icon={<RiVideoAddFill size={17} />} />
            <ListActionButton icon={<IoSearchOutline size={18} />} />
            <ListActionButton icon={<IoEllipsisHorizontal size={18} />} />
          </div>
        </div>
        <div>
          {onlineUsers.map((user) => (
            <ListItem key={user.id} data={user} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between pt-3 pb-2">
          <h3 className="font-semibold text-gray-500">Group Conversations</h3>
        </div>
        <div className="cursor-pointer hover:bg-gray-100 rounded-lg flex items-center gap-4 p-2 transition">
          <div className="relative h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
            <MdOutlineAdd size={20} />
          </div>
          <div className="font-medium text-gray-800">Create New Group</div>
        </div>
      </div>
    </div>
  );
};

export default OnlineUsersList;
