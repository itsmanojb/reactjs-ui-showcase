import React from 'react';
import { BsEmojiLaughing, BsImages } from 'react-icons/bs';
import { RiLiveFill } from 'react-icons/ri';

const ActionButton = ({ children }) => {
  return (
    <button
      type="button"
      className="flex-1 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition rounded-[5px] p-2 text-[15px] text-gray-800 font-medium"
    >
      {children}
    </button>
  );
};

const NewPost = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm shadow-gray-400">
      <div className="p-3 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src={'https://xsgames.co/randomusers/assets/avatars/male/5.jpg'}
            alt={'John Doe'}
            className="h-full w-full"
          />
        </div>
        <input
          type="text"
          placeholder="What's on your mind?"
          className="bg-gray-100 hover:bg-gray-200 cursor-pointer px-6 py-3 text-[15px] rounded-full outline-none flex-1 leading-none placeholder:text-gray-600"
        />
      </div>
      <div className="flex gap-1 items-center py-2 border-t mx-1 xs:mx-3 flex-wrap">
        <ActionButton>
          <RiLiveFill size={20} color="#F3425F" /> Live video
        </ActionButton>
        <ActionButton>
          <BsImages size={20} color="#45BD62" /> Photo/video
        </ActionButton>
        <ActionButton>
          <BsEmojiLaughing size={20} color="#F7B928" /> Feeling/activity
        </ActionButton>
      </div>
    </div>
  );
};

export default NewPost;
