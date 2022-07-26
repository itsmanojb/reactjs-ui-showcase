import {
  IoHomeOutline,
  IoNotificationsOutline,
  IoEllipsisHorizontalCircle,
  IoEllipsisHorizontal,
} from 'react-icons/io5';
import { FiHash } from 'react-icons/fi';
import {
  FaRegEnvelope,
  FaRegUser,
  FaRegBookmark,
  FaRegListAlt,
} from 'react-icons/fa';

const NavItem = ({ text, icon, isActive = false }) => {
  return (
    <div className="cursor-pointer group flex w-[50px] xl:w-full mx-auto xl:ml-0">
      <div className="group-hover:bg-gray-200 rounded-full h-[50px] xl:gap-2 flex items-center xl:pl-4 xl:pr-6 transition">
        <div className="h-[50px] w-[50px] py-3 flex items-center mx-auto xl:-ml-3 justify-center">
          {icon}
        </div>
        <div className="hidden xl:block h-[50px] text-lg font-medium text-neutral-800 py-3 -ml-1">
          {text}
        </div>
      </div>
    </div>
  );
};
const SideNav = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="mt-1">
        <a
          href="#"
          className="h-[52px] w-[52px] rounded-full block mx-auto xl:ml-1"
        >
          <img src="/logo.png" alt="logo" className="h-full w-full p-3" />
        </a>
      </div>
      <div className="flex flex-col gap-3 mt-2">
        <NavItem text={'Home'} icon={<IoHomeOutline size={24} />} />
        <NavItem text={'Explore'} icon={<FiHash size={24} />} />
        <NavItem
          text={'Notifications'}
          icon={<IoNotificationsOutline size={24} />}
        />
        <NavItem
          text={'Messages'}
          icon={<FaRegEnvelope size={22} className="mt-0.5" />}
        />
        <NavItem text={'Bookmarks'} icon={<FaRegBookmark size={22} />} />
        <NavItem text={'Lists'} icon={<FaRegListAlt size={22} />} />
        <NavItem text={'Profile'} icon={<FaRegUser size={22} />} />
        <NavItem
          text={'More'}
          icon={<IoEllipsisHorizontalCircle size={26} />}
        />
      </div>
      <div className="my-2">
        <button
          type="button"
          className="_bg-theme _hover transition text-white flex items-center justify-center mx-auto xl:ml-0 xl:p-4 rounded-full h-[50px] w-[50px] xl:w-[90%] leading-none font-bold my-1"
          style={{ boxShadow: 'rgb(0 0 0 / 8%) 0px 8px 28px' }}
        >
          <span className="xl:hidden">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="#fff"
              className="h-6"
            >
              <g>
                <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
              </g>
            </svg>
          </span>
          <span className="hidden xl:block">Tweet</span>
        </button>
      </div>
      <div className="mt-auto">
        <div className="my-3">
          <div className="hover:bg-neutral-100 rounded-full p-3 w-16 md:w-full -ml-1 md:ml-0 cursor-pointer xl:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300"></div>
            <div className="flex-1 flex-col xl:justify-center leading-none overflow-hidden hidden xl:flex">
              <strong className="font-bold text-sm text-slate-900 truncate">
                Username lastname
              </strong>
              <p className="text-slate-700 font-medium text-sm">@asdasdsa</p>
            </div>
            <div className="ml-auto hidden xl:block">
              <button
                type="button"
                className="text-gray-500 w-8 h-8 rounded-full flex justify-center items-center transition"
              >
                <IoEllipsisHorizontal size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
