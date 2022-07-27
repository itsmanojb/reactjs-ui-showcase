import { IoEllipsisHorizontal } from 'react-icons/io5';
import { Happenings } from '../lib/Happenings';

const ListItem = ({ data }) => {
  return (
    <div className="cursor-pointer hover:bg-gray-100 py-3 px-4 flex items-start gap-3">
      <div className="flex flex-col">
        {data.type === 'news' ? (
          <>
            <div className="flex items-center text-xs text-gray-500 font-medium gap-x-1">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-gray-300 overflow-hidden">
                  <img src={data.user.profile_picture} alt="" />
                </div>
                <div className="font-bold text-gray-800">{data?.user.name}</div>
              </div>
              <div>&middot;</div>
              <div>{data.date}</div>
            </div>
            <strong className="text-neutral-800 text-base mb-1 mt-1 leading-tight text-[14px]">
              {data.text}
            </strong>
          </>
        ) : (
          <>
            {(data.category || data.date) && (
              <div className="flex items-center text-xs text-gray-500 font-medium gap-x-1">
                <div className="capitalize">{data.category}</div>
                {data.date && (
                  <>
                    <div>&middot;</div>
                    <div>{data.date}</div>
                  </>
                )}
              </div>
            )}
            <strong className="text-neutral-800 text-base mb-0.5 mt-1 leading-tight">
              {data.text}
            </strong>
            {data.total_tweets && (
              <small className="text-slate-600 font-medium">
                {data.total_tweets} tweets
              </small>
            )}
          </>
        )}
        {data.hashtags && data.hashtags.length > 0 && (
          <small className="text-slate-500 font-medium">
            trending with{' '}
            {data.hashtags.map((tag, i) => (
              <>
                {i !== 0 && ', '}
                <span className="_text-theme" key={i}>
                  #{tag}
                </span>
              </>
            ))}
          </small>
        )}
      </div>
      {data?.image ? (
        <div className="ml-auto">
          <div className="w-[70px] h-[70px] bg-gray-200 rounded-xl overflow-hidden">
            <img src={data.image.url} alt={data.image.alt} />
          </div>
        </div>
      ) : (
        <div className="ml-auto">
          <button
            type="button"
            className="text-gray-500 w-8 h-8 rounded-full hover:text-[#1d9bf0] hover:bg-[#1d9bf01a] flex justify-center items-center transition"
          >
            <IoEllipsisHorizontal size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

const HappeningList = () => {
  const activities = Happenings.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div className="_bg_l-g rounded-2xl overflow-hidden">
      <div className="p-4 font-black text-neutral-800 text-xl">
        What's happening
      </div>
      <div className="flex flex-col">
        {activities.map((item, i) => (
          <ListItem key={i} data={item} />
        ))}
      </div>
      <div className="cursor-pointer hover:bg-gray-100 _text-theme p-4 font-semibold text-sm">
        Show More
      </div>
    </div>
  );
};

export default HappeningList;
