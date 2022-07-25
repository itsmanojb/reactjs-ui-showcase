import { useRef, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const userStories = [
  {
    id: 1,
    user: {
      username: 'breathcaviar',
      profile_picture:
        'https://xsgames.co/randomusers/assets/avatars/female/30.jpg',
      name: 'Jenni Covian',
    },
  },
  {
    id: 2,
    user: {
      username: 'lacrossehardly',
      profile_picture:
        'https://xsgames.co/randomusers/assets/avatars/female/35.jpg',
      name: 'Tory Frommer',
    },
  },
  {
    id: 3,
    user: {
      username: 'allegedriding',
      profile_picture:
        'https://xsgames.co/randomusers/assets/avatars/female/75.jpg',
      name: 'Lara Rosequist',
    },
  },
  {
    id: 4,
    user: {
      username: 'pupportray',
      profile_picture:
        'https://xsgames.co/randomusers/assets/avatars/male/51.jpg',
      name: 'Andre Muzzi',
    },
  },
  {
    id: 5,
    user: {
      username: 'aromaticplanks',
      profile_picture:
        'https://xsgames.co/randomusers/assets/avatars/female/64.jpg',
      name: 'Shizue Overhoff',
    },
  },
  {
    id: 6,
    user: {
      username: 'snowymount',
      profile_picture:
        'https://xsgames.co/randomusers/assets/avatars/female/10.jpg',
      name: 'Sadye Kurkoski',
    },
  },
  {
    id: 7,
    user: {
      username: 'technologyintent',
      profile_picture:
        'https://xsgames.co/randomusers/assets/avatars/female/70.jpg',
      name: 'Isis Bocek',
    },
  },
  {
    id: 8,
    user: {
      username: 'boilingfit',
      profile_picture:
        'https://xsgames.co/randomusers/assets/avatars/male/36.jpg',
      name: 'Vernon Ridel',
    },
  },
  {
    id: 9,
    user: {
      username: 'infinitemuseum',
      profile_picture:
        'https://xsgames.co/randomusers/assets/avatars/male/13.jpg',
      name: 'Johnnie Bovie',
    },
  },
  {
    id: 10,
    user: {
      username: 'pearbrain',
      profile_picture:
        'https://xsgames.co/randomusers/assets/avatars/female/49.jpg',
      name: 'Rosalyn Hellier',
    },
  },
  {
    id: 11,
    user: {
      username: 'sensualchav',
      profile_picture:
        'https://xsgames.co/randomusers/assets/avatars/female/71.jpg',
      name: 'Brigitte Heeder',
    },
  },
  {
    id: 12,
    user: {
      username: 'tiaraguard',
      profile_picture:
        'https://xsgames.co/randomusers/assets/avatars/female/56.jpg',
      name: 'Bethann Esshaki',
    },
  },
];

const Story = ({ data, isFirst, isLast }) => {
  return (
    <div
      className={`w-[66px] h-[84px] flex flex-col overflow-hidden gap-1 cursor-pointer ${
        isFirst && 'ml-4'
      } ${isLast && 'mr-4'}`}
    >
      <div className="h-16 w-16 _ig rounded-full relative">
        <div className=" h-[60px] w-[60px] top-[2px] mx-auto border-2 rounded-full border-white absolute inset-0">
          <img
            src={data.user.profile_picture}
            alt={data.user.username}
            className="h-14 w-14 rounded-full"
          />
        </div>
      </div>
      <div className="truncate text-xs text-neutral-800">
        {data.user.username}
      </div>
    </div>
  );
};

const Stories = () => {
  const scrollOffset = 360;
  const ref = useRef(null);
  const [isLeft, setIsLeft] = useState(true);
  const [isRight, setIsRight] = useState(false);

  const scroll = (direction) => {
    if (direction === 'left') {
      ref.current.scrollLeft -= scrollOffset;
    } else {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  const onScroll = () => {
    if (ref.current) {
      setIsLeft(false);
      setIsRight(false);
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      if (scrollLeft + clientWidth === scrollWidth) {
        setIsRight(true);
      } else {
        if (scrollLeft === 0) {
          setIsLeft(true);
        }
      }
    }
  };

  return (
    <div className="bg-white border _border rounded-lg h-28 flex items-center relative">
      <div className="absolute top-0 left-4 bottom-0 flex items-center z-10">
        {!isLeft && (
          <div
            className="h-6 w-6 rounded-full shadow-md shadow-neutral-400 cursor-pointer bg-white flex items-center justify-center"
            onClick={() => scroll('left')}
          >
            <FiChevronLeft size={20} />
          </div>
        )}
      </div>
      <div
        className="grid grid-flow-col overflow-auto gap-4 _noscrollbar"
        ref={ref}
        onScroll={onScroll}
      >
        {userStories.map((story, i) => (
          <Story
            key={i}
            data={story}
            isFirst={i === 0}
            isLast={i === userStories.length - 1}
          />
        ))}
      </div>
      <div className="absolute top-0 right-4 bottom-0 flex items-center z-10">
        {!isRight && (
          <div
            className="h-6 w-6 rounded-full shadow-md shadow-neutral-400 cursor-pointer bg-white flex items-center justify-center"
            onClick={() => scroll('right')}
          >
            <FiChevronRight size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Stories;
