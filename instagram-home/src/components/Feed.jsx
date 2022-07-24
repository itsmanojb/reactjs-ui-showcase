import { IoEllipsisHorizontal, IoChatbubbleOutline } from 'react-icons/io5';
import { RiHeartLine, RiHeartFill, RiBookmarkLine } from 'react-icons/ri';
import { BsEmojiLaughing } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

const PostCard = () => {
  return (
    <div className="bg-white border _border rounded-lg">
      <div className="flex items-center gap-2 justify-between p-2.5">
        <div className="relative bg-gray-50 rounded-full">
          <img
            src={'https://xsgames.co/randomusers/assets/avatars/female/50.jpg'}
            alt={'Patrick Gi'}
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="#"
            className="font-semibold text-sm leading-tight text-neutral-800"
          >
            Patrick Gi
          </a>
        </div>
        <div className="ml-auto">
          <button
            type="button"
            className="text-neutral-700 w-8 h-8 flex justify-center items-center"
          >
            <IoEllipsisHorizontal size={18} />
          </button>
        </div>
      </div>
      <div className="flex">
        <img
          src={
            'https://images.pexels.com/photos/6638213/pexels-photo-6638213.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          }
          alt=""
          className="max-h-[360px] sm:max-h-[480px] md:max-h-[600px] h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between px-1 py-0.5">
        <div>
          <button className="text-neutral-800 hover:text-gray-500 cursor-pointer p-2">
            <RiHeartLine size={26} />
          </button>
          <button className="text-neutral-800 hover:text-gray-500 cursor-pointer p-2">
            <IoChatbubbleOutline size={26} />
          </button>
          <button className="text-neutral-800 hover:text-gray-500 cursor-pointer p-2">
            <FiSend size={24} />
          </button>
        </div>
        <div>dots</div>
        <div className="ml-auto">
          <button className="text-neutral-800 hover:text-gray-500 cursor-pointer p-2">
            <RiBookmarkLine size={24} />
          </button>
        </div>
      </div>
      <div className="px-3 text-neutral-800 text-sm font-bold my-1">
        300 likes
      </div>
      <div className="px-3 my-1 text-neutral-700 text-sm">
        <p className="line-clamp-2">
          <a
            href="#"
            className="hover:underline font-bold text-neutral-900 mr-1"
          >
            Username
          </a>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
          nemo. Illo rerum maxime ipsam laudantium rem. Quibusdam iure eum
          labore.
        </p>
      </div>
      <div className="px-3">
        <span className="cursor-pointer text-[#8e8e8e] font-medium text-sm">
          View all 32 comments
        </span>
        <div className="pt-1 pb-1 space-y-1.5">
          <div className="text-neutral-800 text-sm flex gap-0.5 items-end">
            <span className="line-clamp-2 leading-tight">
              <a
                href="#"
                className="hover:underline font-bold text-neutral-900 mr"
              >
                Username
              </a>{' '}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              laborum at recusandae, natus nulla perferendis repudiandae,
            </span>
            <span className="mb-1 cursor-pointer hover:text-gray-500">
              <RiHeartLine size={16} />
            </span>
          </div>
          <div className="text-neutral-800 text-sm flex gap-0.5 items-end">
            <span className="line-clamp-2 leading-tight">
              <a
                href="#"
                className="hover:underline font-semibold text-neutral-900 mr"
              >
                Username
              </a>{' '}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              laborum at recusandae
            </span>
            <span className="mb-1 cursor-pointer">
              <RiHeartLine size={16} />
            </span>
          </div>
        </div>
      </div>
      <div className="px-3 py-3 text-[10px] text-neutral-500 uppercase">
        1 day ago
      </div>
      <div className="border-t _border flex items-center gap-1 px-2 py-2">
        <div className="cursor-pointer text-neutral-700 px-1">
          <BsEmojiLaughing size={20} />
        </div>
        <div className="flex-1">
          <textarea
            className="w-full outline-none resize-none bg-transparent text-neutral-800 text-sm placeholder:text-neutral-500 pt-1 pl-1"
            placeholder="Add a comment..."
            rows={1}
          ></textarea>
        </div>
        <button
          disabled
          className="p-1 _prime text-[15px] font-semibold disabled:opacity-50"
        >
          Post
        </button>
      </div>
    </div>
  );
};

const Feed = () => {
  return (
    <div className="space-y-3">
      {[...Array(10)].map((_, i) => (
        <PostCard key={i} />
      ))}
    </div>
  );
};

export default Feed;
