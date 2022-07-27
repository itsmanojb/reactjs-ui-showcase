import AppLayout, { SidePanel } from './components/AppLayout';
import Feed from './components/Feed';
import HomeHeader from './components/HomeHeader';
import NewTweet from './components/NewTweet';
import { AuthContext, initialState } from './hooks/useAuthContext';

const Home = () => {
  return (
    <div className="bg-white h-screen overflow-x-hidden flex">
      <SidePanel />
      <AppLayout>
        <div className="flex flex-col">
          <HomeHeader />
          <NewTweet />
          <Feed />
        </div>
      </AppLayout>
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
