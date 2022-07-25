import { Menu, Transition } from '@headlessui/react';
import { BsSearch } from 'react-icons/bs';
import { MdHomeFilled } from 'react-icons/md';
import {
  RiMessengerLine,
  RiAddBoxLine,
  RiCompass3Line,
  RiHeartLine,
} from 'react-icons/ri';
import useAuthContext from '../hooks/useAuthContext';
import Notifications from './Notifications';
import ProfileMenu from './ProfileMenu';

const NavMenu = ({ icon, img, klass = '' }) => {
  return (
    <div
      className={`cursor-pointer h-10 w-10 flex items-center justify-center text-neutral-600 ${klass}`}
    >
      {icon || img}
    </div>
  );
};

const Header = () => {
  const { user } = useAuthContext();
  return (
    <div className="border-b _border bg-white px-2 h-[60px] sticky top-0 w-screen z-50">
      <div className="w-full h-full max-w-[945px] flex items-center mx-auto justify-between">
        <div className="flex justify-between items-center flex-1 max-w-[600px]">
          <a href="/" className="block">
            <img src="/ig-logo.png" alt="logo" className="h-10" />
          </a>
          <div className="hidden md:block">
            <div className="bg-neutral-100 pl-10 pr-2 py-1.5 rounded-lg relative">
              <span className="absolute left-4 top-3 opacity-60 text-gray-700">
                <BsSearch size={14} />
              </span>
              <input
                type="text"
                className="bg-transparent outline-none text-[15px] w-52 placeholder:text-neutral-500"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex items-center gap-1.5">
            <div>
              <NavMenu icon={<MdHomeFilled size={26} />} />
            </div>
            <div>
              <NavMenu icon={<RiMessengerLine size={26} />} />
            </div>
            <div>
              <NavMenu icon={<RiAddBoxLine size={26} />} />
            </div>
            <div>
              <NavMenu icon={<RiCompass3Line size={26} />} />
            </div>
            <div>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button>
                      <NavMenu icon={<RiHeartLine size={26} />} />
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
                      <NavMenu
                        img={
                          <img
                            src={user.profile_picture}
                            className="w-6 h-6 rounded-full"
                            alt={user.name}
                          />
                        }
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
