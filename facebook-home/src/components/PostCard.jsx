import { useState } from 'react';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { BiComment, BiShare } from 'react-icons/bi';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import PostComments from './PostComments';
import LikeIcon from '../assets/like.svg';

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

const PostCard = ({ data }) => {
  const [commentsShown, setCommentsShown] = useState(false);

  return (
    <div className="_card rounded-md">
      <div className="flex items-center gap-2 mb-2 justify-between px-2 xs:px-3 pt-3">
        <div className="relative bg-gray-50 rounded-full">
          <img
            src={data.user.profile_picture}
            alt={data.user.name}
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

export default PostCard;
