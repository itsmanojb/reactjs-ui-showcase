import {
  IoLogOutOutline,
  IoSettingsSharp,
  IoHelpCircle,
  IoMoonSharp,
} from 'react-icons/io5';
import { MdFeedback } from 'react-icons/md';
import useAuthContext from '../hooks/useAuthContext';

const ProfileMenu = () => {
  const { user } = useAuthContext();
  return (
    <div className="_dd__wrapper right-0 w-[356px] top-0">
      <div
        className="rounded-md m-1 p-1 pb-[1px]"
        style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.2)' }}
      >
        <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg flex items-center gap-4 p-2 transition">
          <div className="relative h-12 w-12 rounded-full bg-gray-200 dark:bg-neutral-600 flex items-center justify-center text-gray-600 dark:text-gray-300">
            <img
              src={user.profile_picture}
              alt={user.name}
              className="rounded-full"
            />
          </div>
          <div className="font-medium _text__default">{user.name}</div>
        </div>
        <div className="  border-t _divider pt-1 m-1">
          <div className="hover:bg-gray-100 dark:hover:bg-neutral-700 py-1.5 px-2 -mx-1 rounded-md cursor-pointer text-blue-500 font-medium text-[15px]">
            See all profiles
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg flex items-center gap-4 p-2 transition">
            <div className="relative h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-600 flex items-center justify-center text-gray-600 dark:text-gray-300">
              <IoSettingsSharp size={20} />
            </div>
            <div className="font-medium _text__default">
              Settings &amp; privacy
            </div>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg flex items-center gap-4 p-2 transition">
            <div className="relative h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-600 flex items-center justify-center text-gray-600 dark:text-gray-300">
              <IoHelpCircle size={20} />
            </div>
            <div className="font-medium _text__default">Help &amp; support</div>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg flex items-center gap-4 p-2 transition">
            <div className="relative h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-600 flex items-center justify-center text-gray-600 dark:text-gray-300">
              <IoMoonSharp size={20} />
            </div>
            <div className="font-medium _text__default">
              Display &amp; accessibility
            </div>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg flex items-center gap-4 p-2 transition">
            <div className="relative h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-600 flex items-center justify-center text-gray-600 dark:text-gray-300">
              <MdFeedback size={20} />
            </div>
            <div className="font-medium _text__default">Give feedback</div>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg flex items-center gap-4 p-2 transition">
            <div className="relative h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-600 flex items-center justify-center text-gray-600 dark:text-gray-300">
              <IoLogOutOutline size={24} />
            </div>
            <div className="font-medium _text__default">Log Out</div>
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
    </div>
  );
};

export default ProfileMenu;
