import AppLayout, { SidePanel } from './components/AppLayout';

function App() {
  return (
    <div className="bg-white h-screen overflow-x-hidden flex">
      <SidePanel />
      <AppLayout>here content will go</AppLayout>
    </div>
  );
}

export default App;
