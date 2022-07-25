import { BiUserCircle, BiBookmark, BiCog, BiRefresh } from 'react-icons/bi';

const ProfileMenu = () => {
  return (
    <div className="absolute w-60 top-2 -right-2">
      <div
        className="divide-y bg-white rounded-md overflow-hidden"
        style={{
          boxShadow: '0 0 5px 1px rgba(0,0,0, .0975)',
        }}
      >
        <div>
          <a
            href="#"
            className="flex items-center gap-3 pt-3 pb-2 px-4 text-sm text-neutral-700 cursor-pointer hover:bg-neutral-50"
          >
            <BiUserCircle size={20} />
            Profile
          </a>
          <a
            href="#"
            className="flex items-center gap-3 py-2 px-4 text-sm text-neutral-700 cursor-pointer hover:bg-neutral-50"
          >
            <BiBookmark size={20} />
            Saved
          </a>
          <a
            href="#"
            className="flex items-center gap-3 py-2 px-4 text-sm text-neutral-700 cursor-pointer hover:bg-neutral-50"
          >
            <BiCog size={20} />
            Settings
          </a>
          <a
            href="#"
            className="flex items-center gap-2.5 py-2 px-4 text-sm text-neutral-700 cursor-pointer hover:bg-neutral-50"
          >
            <BiRefresh size={22} />
            Switch Accounts
          </a>
        </div>
        <div className="py-3 px-4 gap-3 text-sm text-neutral-800 cursor-pointer hover:bg-neutral-50">
          Logout
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
