import { Menu, Transition } from '@headlessui/react';
import { BsSearch } from 'react-icons/bs';

const SearchDropdown = () => {
  return (
    <div className="bg-white fixed _dd__wrapper w-[374px] z-10 -top-1.5 -left-3">
      <p className="p-2 text-sm text-center text-neutral-500 font-medium">
        Try searching for people, topics, or keywords
      </p>
    </div>
  );
};

const SearchBox = () => {
  return (
    <>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button>
              <div className="h-[53px] bg-white flex items-center fixed top-0 z-[2] lg:w-[290px] xl:w-[350px]">
                <div className="bg-gray-100 pl-14 pr-4 py-2.5 rounded-full relative w-full">
                  <span className="absolute left-6 top-4 opacity-60 text-neutral-800">
                    <BsSearch size={15} />
                  </span>
                  <input
                    type="text"
                    className="bg-transparent outline-none text-sm w-full placeholder:text-neutral-600"
                    placeholder="Search Twitter"
                  />
                </div>
              </div>
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
              <Menu.Items static>
                <SearchDropdown />
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
};

export default SearchBox;
