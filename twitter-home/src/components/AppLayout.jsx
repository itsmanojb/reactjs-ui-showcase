import FollowSuggestions from './FollowSuggestions';
import HappeningList from './HappeningList';
import SearchBox from './SearchBox';
import SideNav from './SideNav';

const SidePanel = () => {
  return (
    <header
      role="banner"
      className="h-full flex flex-col items-end flex-grow shrink-0 basis-auto"
    >
      <div className="w-[68px] sm:w-[88px] xl:w-[275px] h-full">
        <div className="overflow-y-auto h-full px-2 sm:px-3 flex flex-col">
          <SideNav />
        </div>
      </div>
    </header>
  );
};

const AppLayout = ({ children }) => {
  return (
    <main className="h-full flex flex-col items-stretch lg:items-start flex-auto overflow-y-auto">
      <div className="w-full sm:w-[600px] lg:w-[920px] xl:w-[990px] flex flex-auto">
        <div className="flex grow">
          <div className="flex grow items-stretch justify-between">
            <div className="border-x flex-auto _border w-full max-w-[600px]">
              {children}
            </div>
            <div className="lg:w-[290px] xl:w-[350px] mr-2.5 pt-14 hidden lg:block">
              <div className="sticky top-0">
                <div className="flex flex-col gap-3">
                  <div>
                    <SearchBox />
                  </div>
                  <div>
                    <HappeningList />
                  </div>
                  <div>
                    <FollowSuggestions />
                  </div>
                  <div className="flex flex-col gap-2 text-[13px] text-slate-600 px-3 pb-20">
                    <p className="flex flex-wrap gap-x-4">
                      <a
                        href="#"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms of Service
                      </a>
                      <a
                        href="#"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>
                      <a
                        href="#"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Cookie Policy
                      </a>
                      <a
                        href="#"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Accessibility
                      </a>
                      <a
                        href="#"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ads info
                      </a>
                      <a
                        href="#"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        More ...
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        &copy; 2022 Twitter, Inc.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppLayout;
export { SidePanel };
