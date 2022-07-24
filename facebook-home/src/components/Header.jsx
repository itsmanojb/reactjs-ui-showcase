import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsSearch, BsMessenger, BsBellFill } from 'react-icons/bs';
import {
  MdOutlineAdd,
  MdOutlineGroup,
  MdOutlineHome,
  MdOutlineOndemandVideo,
  MdOutlineStore,
  MdOutlineGroupWork,
  MdOutlineApps,
} from 'react-icons/md';
import Messages from './Messages';
import Notifications from './Notifications';
import ProfileMenu from './ProfileMenu';
import useAuthContext from '../hooks/useAuthContext';

const NavTab = ({ icon, onTabSelect, active = false, klass = '' }) => {
  return (
    <div
      className={`flex-1 relative cursor-pointer ${klass}`}
      onClick={() => onTabSelect()}
    >
      <div
        className={`px-2 py-3 flex items-center justify-center _text__muted ${
          active
            ? ''
            : '_hover hover:text-neutral-600 dark:hover:text-neutral-400'
        } rounded-lg transition-all`}
      >
        {icon}
      </div>
      {active && (
        <div className="absolute bg-blue-500 h-[3px] -bottom-1 inset-x-0"></div>
      )}
    </div>
  );
};

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="max-w-[556px] mx-auto gap-2 mt-1 hidden sm:flex">
      <NavTab
        icon={<MdOutlineHome size={24} />}
        active={activeTab === 1}
        onTabSelect={() => setActiveTab(1)}
      />
      <NavTab
        icon={<MdOutlineGroup size={24} />}
        active={activeTab === 2}
        onTabSelect={() => setActiveTab(2)}
      />
      <NavTab
        icon={<MdOutlineOndemandVideo size={24} />}
        active={activeTab === 3}
        onTabSelect={() => setActiveTab(3)}
      />
      <NavTab
        icon={<MdOutlineStore size={24} />}
        active={activeTab === 4}
        onTabSelect={() => setActiveTab(4)}
      />
      <NavTab
        icon={<MdOutlineGroupWork size={24} />}
        active={activeTab === 5}
        onTabSelect={() => setActiveTab(5)}
        klass={'hidden xlg:block'}
      />
      <NavTab
        icon={<AiOutlineMenu size={24} />}
        active={activeTab === 5}
        onTabSelect={() => setActiveTab(5)}
        klass={'xlg:hidden'}
      />
    </div>
  );
};

const UserMenu = ({ icon, img, klass }) => {
  return (
    <div
      className={`cursor-pointer h-10 w-10 bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 flex items-center justify-center rounded-full transition ${klass}`}
    >
      {icon || img}
    </div>
  );
};

const Header = () => {
  const { user } = useAuthContext();
  return (
    <div className="bg-white dark:bg-neutral-800 fixed top-0 inset-x-0 h-14 shadow-sm z-50">
      <div className="h-full w-full px-4 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2 w-[500px]">
          <a href="/" className="block w-10 h-10">
            <img src="/logo.webp" alt="Logo" className="w-10 h-10" />
          </a>
          <div className="xl:hidden">
            <UserMenu icon={<BsSearch size={16} />} />
          </div>
          <div className="sm:hidden">
            <div className="cursor-pointer h-10 w-10 flex items-center justify-center">
              <AiOutlineMenu size={24} />
            </div>
          </div>
          <div className="hidden xl:block">
            <div className="bg-gray-100 dark:bg-neutral-700 pl-10 pr-2 py-2 rounded-full relative">
              <span className="absolute left-4 top-3.5 opacity-60">
                <BsSearch size={14} />
              </span>
              <input
                type="text"
                className="bg-transparent outline-none text-sm w-48"
                placeholder="Search Facebook"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <NavTabs />
        </div>
        <div className="w-[500px]">
          <div className="flex justify-end items-center gap-2">
            <UserMenu klass={'xlg:hidden'} icon={<MdOutlineAdd size={25} />} />
            <UserMenu
              klass={'hidden xlg:flex'}
              icon={<MdOutlineApps size={25} />}
            />
            <div>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button>
                      <UserMenu
                        klass={
                          open
                            ? 'text-blue-500 bg-blue-100 dark:bg-[#2d88ff33] dark:hover:bg-[#92c1ff33]'
                            : ''
                        }
                        icon={<BsMessenger size={19} />}
                      />
                    </Menu.Button>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items as="div" static>
                        <Messages />
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
            <div>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button>
                      <UserMenu
                        klass={
                          open
                            ? 'text-blue-500 bg-blue-100 dark:bg-[#2d88ff33] dark:hover:bg-[#92c1ff33]'
                            : ''
                        }
                        icon={<BsBellFill size={19} />}
                      />
                    </Menu.Button>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items as="div" static>
                        <Notifications />
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
            <div>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button>
                      <UserMenu
                        img={
                          <img
                            src={user.profile_picture}
                            alt={user.name}
                            className="rounded-full h-10 w-10"
                          />
                        }
                        klass="mt-2"
                      />
                    </Menu.Button>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items as="div" static>
                        <ProfileMenu />
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
