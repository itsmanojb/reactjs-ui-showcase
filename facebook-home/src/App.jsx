import {
  Header,
  BookmarksList,
  Stories,
  NewPost,
  NewsFeed,
  OnlineUsersList,
  FAB,
} from './components';
import useAuthContext, {
  AuthContext,
  initialState,
} from './hooks/useAuthContext';

const Home = () => {
  const { user } = useAuthContext();
  return (
    <div className="bg-gray-50 dark:bg-neutral-900 h-screen overflow-x-hidden">
      <Header />
      <div className="w-full max-w-[1920px] mx-auto flex pt-14 justify-between">
        <div
          className="hidden xlg:block overflow-y-auto w-[345px] sticky top-[56px]"
          style={{ height: 'calc(100vh - 56px)' }}
        >
          <div className="pt-2 pl-2">
            <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg flex items-center gap-4 p-2 transition">
              <div className="h-9 w-9 rounded-full overflow-hidden">
                <img
                  src={user.profile_picture}
                  alt={user.name}
                  className="h-full w-full"
                />
              </div>
              <div className="text-normal font-medium _text__default">
                John Doe
              </div>
            </div>
          </div>
          <BookmarksList />
        </div>
        <div className="flex-1 pt-4 pb-12">
          <div className="max-w-[560px] w-full mx-auto">
            <Stories />
            <NewPost />
            <NewsFeed />
          </div>
        </div>
        <div
          className="hidden xmd:block overflow-y-auto sticky top-[56px] w-[345px]"
          style={{ height: 'calc(100vh - 56px)' }}
        >
          <OnlineUsersList />
        </div>
      </div>
      <FAB />
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
