import { useEffect } from 'react';
import { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const BookMarks = [
  {
    id: 1,
    label: 'Friends',
    iconFileName: 'friends',
  },
  {
    id: 2,
    label: 'Most recent',
    iconFileName: 'recent-list',
  },
  {
    id: 3,
    label: 'Groups',
    iconFileName: 'groups',
  },
  {
    id: 4,
    label: 'Marketplace',
    iconFileName: 'marketplace',
  },
  {
    id: 5,
    label: 'Watch',
    iconFileName: 'watch',
  },
  {
    id: 6,
    label: 'Memories',
    iconFileName: 'memories',
  },
  {
    id: 7,
    label: 'Saved',
    iconFileName: 'saved',
  },
  {
    id: 8,
    label: 'Pages',
    iconFileName: 'pages',
  },
  {
    id: 9,
    label: 'Favourites',
    iconFileName: 'favorites',
  },
  {
    id: 10,
    label: 'Ads Manager',
    iconFileName: 'ads-manager',
  },
  {
    id: 11,
    label: 'Ad Center',
    iconFileName: 'ad-center',
  },
  {
    id: 12,
    label: 'Blood Donations',
    iconFileName: 'blood-donation',
  },
  {
    id: 13,
    label: 'Climate Science Center',
    iconFileName: 'climate',
  },
  {
    id: 14,
    label: 'Community Help',
    iconFileName: 'community',
  },
  {
    id: 15,
    label: 'COVID-19 Information Center',
    iconFileName: 'covid',
  },
  {
    id: 16,
    label: 'Emotional Health',
    iconFileName: 'emotional',
  },
  {
    id: 17,
    label: 'Fundraisers',
    iconFileName: 'fundraiser',
  },
  {
    id: 18,
    label: 'Gaming video',
    iconFileName: 'gaming-video',
  },
  {
    id: 19,
    label: 'Live video',
    iconFileName: 'live-video',
  },
  {
    id: 20,
    label: 'Messenger',
    iconFileName: 'messenger',
  },
  {
    id: 21,
    label: 'Messenger Kids',
    iconFileName: 'messenger-kids',
  },
  {
    id: 22,
    label: 'Play games',
    iconFileName: 'play-games',
  },
  {
    id: 23,
    label: 'Recent ad activity',
    iconFileName: 'recent-ad',
  },
];

const ListItem = ({ data }) => {
  return (
    <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg flex items-center gap-4 p-2 transition">
      <div className="relative h-9 w-9">
        <img
          src={`/icons/${data.iconFileName}.png`}
          alt={data.label}
          className="h-full w-full"
        />
      </div>
      <div className="text-[15px] font-medium _text__default">{data.label}</div>
    </div>
  );
};

const BookmarksList = () => {
  const [listCollapsed, setListCollapsed] = useState(true);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    setListItems(() => (listCollapsed ? BookMarks.slice(0, 10) : BookMarks));
    return () => {};
  }, [listCollapsed]);

  return (
    <div className="pl-2 space-y-4 pb-8">
      <div>
        <div>
          {listItems.map((item) => (
            <ListItem key={item.id} data={item} />
          ))}
        </div>
        <div
          className="cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800 group rounded-lg flex items-center gap-4 p-2 transition"
          onClick={() => setListCollapsed(!listCollapsed)}
        >
          <div className="relative h-9 w-9 rounded-full bg-gray-100 dark:bg-neutral-800 group-hover:bg-gray-200 dark:group-hover:bg-neutral-900 flex items-center justify-center text-gray-600 transition">
            {listCollapsed ? (
              <FaChevronDown size={18} />
            ) : (
              <FaChevronUp size={18} />
            )}
          </div>
          <div className="font-medium _text__defualt text-[15px]">
            See {listCollapsed ? 'more' : 'less'}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap text-[13px] _text__muted pl-2 pr-6">
        <a
          href="#"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy
        </a>
        <span className="mx-1">&middot;</span>
        <a
          href="#"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </a>
        <span className="mx-1">&middot;</span>
        <a
          href="#"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Advertising
        </a>
        <span className="mx-1">&middot;</span>
        <a
          href="#"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ad choices
        </a>
        <span className="mx-1">&middot;</span>
        <a
          href="#"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookies
        </a>
        <span className="mx-1">&middot;</span>
        <a
          href="#"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          More
        </a>
        <span className="mx-1">&middot;</span>
        <a
          href="#"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook &copy; 2022
        </a>
      </div>
    </div>
  );
};

export default BookmarksList;
