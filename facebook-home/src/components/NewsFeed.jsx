import { useState } from 'react';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { BiComment, BiShare } from 'react-icons/bi';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { TiArrowSortedDown } from 'react-icons/ti';
import LikeIcon from '../assets/like.svg';
import LoadingSpinner from './LoadingSpinner';
import useFetch from '../hooks/useFetch';

const ActionButton = ({ children }) => {
  return (
    <button
      type="button"
      className="flex-1 flex items-center justify-center gap-2 cursor-pointer _hover transition rounded-[4px] p-1.5 text-sm _text__default"
    >
      {children}
    </button>
  );
};

const PostComments = ({ comments }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <div className="py-4 flex justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="border-t _divider mx-3">
          <div className="flex justify-end mt-2 mb-1 cursor-pointer">
            <span className="text-sm _text__muted font-medium flex items-center gap-2">
              Most relevant <TiArrowSortedDown size={20} />
            </span>
          </div>
          <div className="py-1 flex gap-2 items-start">
            <div className="relative h-10 w-10 rounded-full bg-gray-50">
              <img
                src={
                  'https://lh5.googleusercontent.com/-KLzePzmbqTs/AAAAAAAAAAI/AAAAAAAAAD8/henWhVuLqE4/photo.jpg?sz=256'
                }
                alt={'John Doe'}
                className="h-10 w-10 rounded-full"
              />
              <div className="absolute bg-green-500 h-3 w-3 rounded-full bottom-0 -right-1 border-2 border-white dark:border-neutral-800 z-10"></div>
            </div>
            <div className="flex-1">
              <textarea
                className="outline-none rounded-full w-full resize-none px-4 py-[10px] leading-tight _input text-[15px]"
                placeholder="Write a comment"
                rows="1"
              ></textarea>
            </div>
          </div>
          <div className="py-1 space-y-2">
            {comments.map((comment, i) => (
              <div key={i} className="flex items-start gap-2">
                <div>
                  <div className="relative h-9 w-9 rounded-full bg-gray-50">
                    <img
                      src={comment.user.profile_picture}
                      alt={comment.user.name}
                      className="h-9 w-9 rounded-full"
                    />
                    <div className="absolute bg-green-500 h-3 w-3 rounded-full bottom-0 -right-1 border-2 border-white dark:border-neutral-800 z-10"></div>
                  </div>
                </div>
                <div>
                  <div className="bg-neutral-100 dark:bg-neutral-700 rounded-3xl py-2 px-4 mb-1">
                    <span className="cursor-pointer hover:underline font-semibold text-sm">
                      {comment.user.name}
                    </span>
                    <p className="leading-tight text-sm _text__default mb-1 whitespace-pre-wrap">
                      {comment.text}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center text-xs font-semibold _text__muted pl-4">
                    <span>Like</span>
                    <span>Reply</span>
                    <span className="font-normal text-gray-500">
                      {comment.created_at}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between py-2 text-sm text-gray-600 dark:text-neutral-500 font-medium">
            <span className="cursor-pointer hover:underline ">
              View more comments
            </span>
            <span>2 of 10</span>
          </div>
        </div>
      )}
    </>
  );
};

const PostCard = ({ data }) => {
  const [commentsShown, setCommentsShown] = useState(false);

  return (
    <div className="_card rounded-md">
      <div className="flex items-center gap-2 mb-2 justify-between px-2 xs:px-3 pt-3">
        <div className="relative bg-gray-50 rounded-full">
          <img
            src={data.user.profile_picture}
            alt=""
            className="h-11 w-11 rounded-full"
          />
          <div className="absolute bg-green-500 h-3 w-3 rounded-full bottom-0 -right-1 border-2 border-white dark:border-neutral-800 z-10"></div>
        </div>
        <div className="flex flex-col justify-center pl-1 pt-2">
          <a href="#" className="font-medium text-sm leading-tight">
            {data.user.name}
          </a>
          <small className="_text__muted text-[12px]">{data.posted_on}</small>
        </div>
        <div className="ml-auto">
          <button
            type="button"
            className="text-gray-500 dark:text-gray-400 w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 flex justify-center items-center transition"
          >
            <IoEllipsisHorizontal size={18} />
          </button>
        </div>
      </div>
      {data.post_body && (
        <div className="px-2 xs:px-3 pb-2">
          <p className="text-[14px] leading-tight _text__default whitespace-pre-wrap">
            {data.post_body}
          </p>
        </div>
      )}
      {data.post_media.length > 0 && (
        <div className="my-2 flex">
          <img
            src={data.post_media[0]}
            alt=""
            className="max-h-[360px] sm:max-h-[480px] md:max-h-[600px] h-full w-full object-cover"
          />
        </div>
      )}
      <div className="py-1 px-2 xs:px-3 flex justify-between items-center">
        <div className="flex items-center gap-1 text-sm _text__default">
          <img src={LikeIcon} alt="Like" className="h-[16px] w-[16px]" />{' '}
          {data.likes}
        </div>
        <div className="flex items-center justify-between text-[13px] gap-3 _text__muted">
          <span
            className="cursor-pointer hover:underline"
            onClick={() => setCommentsShown(true)}
          >
            {data.comments.length || 'No '} comments
          </span>
          <span>{data.shares} shares</span>
        </div>
      </div>
      <div className="flex gap-1 items-center py-1.5 border-t _divider mx-2 xs:mx-3">
        {data.liked ? (
          <ActionButton>
            <AiFillLike size={18} className="text-blue-600" />
            <span className="font-semibold text-blue-600">Like</span>
          </ActionButton>
        ) : (
          <ActionButton>
            <AiOutlineLike size={18} /> Like
          </ActionButton>
        )}
        <ActionButton>
          <BiComment size={18} /> Comment
        </ActionButton>
        <ActionButton>
          <BiShare size={20} style={{ transform: 'scale(-1,1)' }} /> Share
        </ActionButton>
      </div>
      {commentsShown && <PostComments comments={data.comments} />}
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(2)].map((_, i) => (
        <div className="_card h-[250px] rounded-lg" key={i}>
          <div className="p-4 flex gap-2 items-center animate-pulse">
            <div className="h-10 w-10 bg-neutral-700 rounded-full"></div>
            <div className="flex flex-col gap-2">
              <div className="h-3 bg-neutral-700 rounded-full w-36"></div>
              <div className="h-3 bg-neutral-700 rounded-full w-24"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const NewsFeed = () => {
  const { response, loading, error } = useFetch('posts');

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return (
      <div className="h-[250px] flex flex-col items-center justify-center">
        <p className="text-base _text__default">Failed to load posts</p>
        <small className="text-sm _text__muted">Try again later</small>
      </div>
    );
  }

  return response ? (
    <div className="space-y-4">
      {response[0].map((post, i) => (
        <PostCard key={i} data={post} />
      ))}
    </div>
  ) : null;
};

export default NewsFeed;
