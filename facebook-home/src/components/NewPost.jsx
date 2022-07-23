import React from 'react';
import { BsEmojiLaughing, BsImages } from 'react-icons/bs';
import { RiLiveFill } from 'react-icons/ri';

const ActionButton = ({ children }) => {
  return (
    <button
      type="button"
      className="flex-1 flex items-center justify-center gap-2 cursor-pointer _hover transition rounded-[5px] p-2 text-[15px] _text__default font-medium whitespace-nowrap "
    >
      {children}
    </button>
  );
};

const NewPost = () => {
  return (
    <div className="_card rounded-lg mb-4">
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
          className="_input cursor-pointer px-6 py-3 text-[15px] rounded-full outline-none flex-1 leading-none "
        />
      </div>
      <div className="flex gap-1 items-center py-2 border-t _divider mx-1 xs:mx-3 flex-wrap">
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
