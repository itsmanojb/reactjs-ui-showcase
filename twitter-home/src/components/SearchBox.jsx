import { BsSearch } from 'react-icons/bs';

const SearchBox = () => {
  return (
    <div className="h-[53px] flex items-center fixed top-0 z-[2] lg:w-[290px] xl:w-[350px] bg-white">
      <div className="bg-gray-100 pl-14 pr-4 py-2.5 rounded-full relative w-full">
        <span className="absolute left-6 top-4 opacity-60">
          <BsSearch size={15} />
        </span>
        <input
          type="text"
          className="bg-transparent outline-none text-sm w-full placeholder:text-neutral-600"
          placeholder="Search Twitter"
        />
      </div>
    </div>
  );
};

export default SearchBox;
