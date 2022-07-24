import { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import LoadingSpinner from './LoadingSpinner';
import useAuthContext from '../hooks/useAuthContext';

const PostComments = ({ comments }) => {
  const { user } = useAuthContext();
  const [loading] = useState(false);

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
                src={user.profile_picture}
                alt={user.name}
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

export default PostComments;
