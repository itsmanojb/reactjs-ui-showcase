import { MdVerified } from 'react-icons/md';
import { FollowSuggestionList } from '../lib/FollowList';

const FollowSuggestions = () => {
  const SuggestedUsers = FollowSuggestionList.sort(
    () => 0.5 - Math.random()
  ).slice(0, 2);

  return (
    <>
      <div className="p-4 font-black text-neutral-800 text-xl">
        Who to follow
      </div>
      <div className="flex flex-col">
        {SuggestedUsers.map((u) => (
          <div
            className="cursor-pointer hover:bg-gray-100 py-3 px-4 flex items-center gap-3"
            role={'button'}
            key={u.id}
          >
            <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
              <img src={u.avatar} alt={u.name} />
            </div>
            <div className="flex flex-1 flex-col justify-center leading-none overflow-hidden">
              <p className="flex items-center gap-1">
                <strong className="font-bold text-sm text-slate-800 truncate">
                  {u.name}
                </strong>
                {u.isVerified && (
                  <MdVerified size={16} className="_text-theme" />
                )}
              </p>
              <p className="text-slate-500 font-semibold text-sm">
                @{u.username}
              </p>
            </div>
            <button
              type="button"
              className="ml-auto rounded-full _bg-black hover:bg-neutral-800 text-white font-bold px-4 py-2 leading-none h-8 text-[15px]"
            >
              Follow
            </button>
          </div>
        ))}
      </div>
      <div className="cursor-pointer hover:bg-gray-100 _text-theme p-5 font-semibold text-sm">
        Show More
      </div>
    </>
  );
};

export default FollowSuggestions;
