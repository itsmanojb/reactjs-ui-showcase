import { IoEllipsisHorizontal, IoChatbubbleOutline } from 'react-icons/io5';
import { RiHeartLine, RiHeartFill, RiBookmarkLine } from 'react-icons/ri';
import { BsEmojiLaughing } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';

const PostCard = ({ data }) => {
  return (
    <div className="bg-white border _border rounded-lg">
      <div className="flex items-center gap-2 justify-between p-2.5">
        <div className="relative bg-gray-50 rounded-full">
          <img
            src={data.user.profile_picture}
            alt={data.user.username}
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="#"
            className="font-semibold text-sm leading-tight text-neutral-800"
          >
            {data.user.username}
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
          src={data.images.standard_resolution.url}
          alt=""
          className="max-h-[360px] sm:max-h-[480px] md:max-h-[640px] h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between px-1 py-0.5">
        <div>
          <button className="text-neutral-800 hover:text-gray-500 cursor-pointer p-2">
            {data.user_has_liked ? (
              <RiHeartFill size={26} color={'red'} />
            ) : (
              <RiHeartLine size={26} />
            )}
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
      <div className="px-3 text-neutral-800 text-sm font-bold mt-1">
        {data?.likes}
      </div>
      <div className="px-3 my-1 text-neutral-700 text-sm">
        <p className="line-clamp-3">
          <a
            href="#"
            className="hover:underline font-bold text-neutral-900 mr-1"
          >
            {data.caption.from.username}
          </a>
          {data.caption.text}
        </p>
      </div>
      {data.comments && (
        <div className="px-3 mb-1">
          <span className="cursor-pointer text-[#8e8e8e] font-medium text-sm">
            View all {data.comments} comments
          </span>
          <div className="pt-1 pb-1 space-y-1">
            {data?.top_comments.map((comment) => (
              <div
                className="text-neutral-800 text-sm flex gap-0.5 items-end"
                key={comment.id}
              >
                <span className="line-clamp-2 leading-tight text-[13px]">
                  <a
                    href="#"
                    className="hover:underline font-bold text-[14px] text-neutral-900 mr"
                  >
                    {comment.user.username}
                  </a>{' '}
                  {comment.text}
                </span>
                <span className="mb-1 cursor-pointer hover:text-gray-500 ml-auto">
                  {comment.user_has_liked ? (
                    <RiHeartFill color="red" size={16} />
                  ) : (
                    <RiHeartLine size={16} />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="px-3 pb-3 text-[10px] text-neutral-500 uppercase">
        {data.created_time}
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

const Skeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(2)].map((_, i) => (
        <div
          className="bg-white border _border rounded-lg overflow-hidden"
          key={i}
        >
          <div className="p-4 flex gap-2 items-center animate-pulse">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div className="flex flex-col gap-2">
              <div className="h-3 bg-gray-200 rounded-sm w-36"></div>
              <div className="h-3 bg-gray-200 rounded-sm w-24"></div>
            </div>
          </div>
          <div className="h-[480px] bg-neutral-200"></div>
        </div>
      ))}
    </div>
  );
};

const Feed = () => {
  const { response, loading, error } = useFetch('posts');

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    // if json-server unavailable / fails, use fallback
    // if (API_FALLBACK) {
    //   const allPosts = DummyPosts;
    //   return (
    //     <div className="space-y-4">
    //       {allPosts.map((post, i) => (
    //         <PostCard key={i} data={post} />
    //       ))}
    //     </div>
    //   );
    // }
    return (
      <div className="h-[250px] flex flex-col items-center justify-center">
        <p className="text-base text-neutral-800">Failed to load posts</p>
        <small className="text-sm text-neutral-500">Try again later</small>
      </div>
    );
  }

  if (response) {
    const allPosts = response;
    return (
      <div className="space-y-3">
        {allPosts.map((post, i) => (
          <PostCard key={i} data={post} />
        ))}
      </div>
    );
  }

  return null;
};

export default Feed;
