import { Header } from './components';
import Feed from './components/Feed';
import Stories from './components/Stories';
import Suggestions from './components/Suggestions';
import useAuthContext, {
  AuthContext,
  initialState,
} from './hooks/useAuthContext';

const Home = () => {
  const { user } = useAuthContext();
  return (
    <div className="bg-neutral-50 h-screen overflow-x-hidden">
      <Header />
      <main className="max-w-[820px] mx-auto flex gap-8">
        <div className="py-6 space-y-3 w-[470px] mx-auto lg:flex-1">
          <Stories />
          <Feed />
        </div>
        <div className="hidden lg:block w-80">
          <div className="pt-6">
            <div className="p-2 flex gap-4 items-center justify-between">
              <div className="w-14 h-14 overflow-hidden rounded-full">
                <img src={user.profile_picture} alt={user.name} />
              </div>
              <div className="mr-auto flex flex-col">
                <span className="font-bold cursor-pointer text-neutral-800 text-sm">
                  {user.username}
                </span>
                <span className="text-neutral-500 text-sm">{user.name}</span>
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
};

function App() {
  return (
    <AuthContext.Provider value={{ user: initialState.user }}>
      <Home />
    </AuthContext.Provider>
  );
}

export default App;
