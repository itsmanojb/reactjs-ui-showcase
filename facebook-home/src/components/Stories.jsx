import { useState } from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import { IoArrowForwardSharp } from 'react-icons/io5';

const NewStory = () => {
  return (
    <div className="h-40 sm:h-48 w-32 min-w-[60px] bg-white dark:bg-neutral-800 rounded-lg group shadow-sm overflow-hidden shadow-gray-300 dark:shadow-none relative flex items-end cursor-pointer">
      <div className="overflow-hidden h-28 sm:h-36 absolute top-0 inset-x-0">
        <img
          src="https://xsgames.co/randomusers/assets/avatars/male/5.jpg"
          alt=""
          className="h-28 sm:h-36 object-cover group-hover:scale-[1.05] transition-all z-0"
        />
      </div>
      <div className="bg-blue-600 text-white h-8 w-8 rounded-full z-20 absolute top-24 sm:top-32 flex items-center justify-center border-[3px] border-white left-[50%] -translate-x-[50%]">
        <MdOutlineAdd size={18} />
      </div>
      <div className="absolute bottom-0 inset-x-0  p-2 text-xs font-medium text-center z-10">
        Create Story
      </div>
      <div className="absolute hidden inset-0 bg-opacity-5 bg-black z-30 group-hover:block"></div>
    </div>
  );
};

const UserStory = () => {
  return (
    <div className="h-40 sm:h-48 w-32 min-w-[60px] bg-gray-200 dark:bg-neutral-800 rounded-lg shadow-sm shadow-gray-300 dark:shadow-none  overflow-hidden relative">
      <div className="w-9 h-9 rounded-full bg-white absolute top-2.5 left-2.5 z-10 border-[3px] border-blue-500 overflow-hidden">
        <img src="/react.svg" alt="" />
      </div>
      <img src="/react.svg" alt="" className="h-full object-cover" />
      <div
        className="absolute inset-0 z-30 p-2 text-white flex items-end text-xs font-semibold"
        style={{
          backgroundImage: 'linear-gradient(0deg, #0008, #0002, transparent)',
        }}
      >
        React JS
      </div>
    </div>
  );
};

const StoryPlaceholder = () => {
  return (
    <div className="h-40 sm:h-48 w-32 min-w-[60px] bg-neutral-100 dark:bg-neutral-800 rounded-xl relative">
      <div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-700 absolute top-2.5 left-2.5"></div>
    </div>
  );
};

const MoreStoryButton = () => {
  return (
    <div className="h-40 sm:h-48 absolute flex items-center right-0 sm:-right-5">
      <div className="w-11 h-11 bg-white dark:bg-neutral-800 rounded-full shadow-md cursor-pointer flex items-center justify-center text-gray-500 border dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700">
        <IoArrowForwardSharp size={22} />
      </div>
    </div>
  );
};

const Stories = () => {
  const [stories, setStories] = useState([1]);
  return (
    <div className="hidden xxs:block w-screen sm:w-full mb-4">
      <div className="flex gap-2 relative flex-nowrap">
        <NewStory />
        {stories.map((story, i) => (
          <UserStory key={i} />
        ))}
        {[...Array(4 - stories.length)].map((ph, i) => (
          <StoryPlaceholder key={i} />
        ))}
        <MoreStoryButton />
      </div>
    </div>
  );
};

export default Stories;
