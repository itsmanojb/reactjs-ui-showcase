import {
  Header,
  BookmarksList,
  Stories,
  NewPost,
  NewsFeed,
  OnlineUsersList,
  FAB,
} from './components';
import {
  LeftPanel,
  MiddlePanel,
  PageContent,
  RightPanel,
} from './components/Layout';
import useAuthContext, {
  AuthContext,
  initialState,
} from './hooks/useAuthContext';

const Home = () => {
  const { user } = useAuthContext();
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 h-screen overflow-x-hidden">
      <Header />
      <PageContent>
        <LeftPanel>
          <div className="pt-2 pl-2">
            <div className="cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-lg flex items-center gap-4 p-2 transition">
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
        </LeftPanel>
        <MiddlePanel>
          <Stories />
          <NewPost />
          <NewsFeed />
        </MiddlePanel>
        <RightPanel>
          <OnlineUsersList />
        </RightPanel>
      </PageContent>
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
