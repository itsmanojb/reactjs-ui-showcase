import { Header } from './components';
import Feed from './components/Feed';
import Stories from './components/Stories';
import Suggestions from './components/Suggestions';

function App() {
  return (
    <div className="bg-neutral-50 h-screen overflow-x-hidden">
      <Header />
      <main className="max-w-[820px] mx-auto flex gap-8">
        <div className="flex-1 py-6 space-y-3">
          <Stories />
          <Feed />
        </div>
        <div className="hidden md:block w-80">
          <div className="pt-6">
            <div className="p-2 flex gap-4 items-center justify-between">
              <div className="w-14 h-14 overflow-hidden rounded-full">
                <img
                  src="https://xsgames.co/randomusers/assets/avatars/female/69.jpg"
                  alt=""
                />
              </div>
              <div className="mr-auto flex flex-col">
                <span className="font-bold cursor-pointer text-neutral-800 text-sm">
                  Username
                </span>
                <span className="text-neutral-500 text-sm">Full name</span>
              </div>
              <button className="_prime text-xs font-bold">Switch</button>
            </div>
            <Suggestions />
            <div className="flex flex-wrap text-[12px] _muted py-4">
              <a
                href="#"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
              <span className="mx-1">&middot;</span>
              <a
                href="#"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help
              </a>
              <span className="mx-1">&middot;</span>
              <a
                href="#"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Press
              </a>
              <span className="mx-1">&middot;</span>
              <a
                href="#"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                API
              </a>
              <span className="mx-1">&middot;</span>
              <a
                href="#"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jobs
              </a>
              <span className="mx-1">&middot;</span>
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
                Locations
              </a>
              <span className="mx-1">&middot;</span>
              <a
                href="#"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Language
              </a>

              <p className="mt-4">
                <a
                  href="#"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &copy; 2022 INSTAGRAM FROM FACEBOOK
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
