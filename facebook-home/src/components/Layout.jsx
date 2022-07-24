import React from 'react';

const PageContent = ({ children }) => {
  return (
    <div className="w-full max-w-[1920px] mx-auto flex pt-14 lg:gap-4 justify-between">
      {children}
    </div>
  );
};

const LeftPanel = ({ children }) => {
  return (
    <div
      className="hidden xlg:block overflow-y-auto w-[345px] sticky top-[56px]"
      style={{ height: 'calc(100vh - 56px)' }}
    >
      {children}
    </div>
  );
};

const MiddlePanel = ({ children }) => {
  return (
    <div className="flex-1 pt-4 pb-12">
      <div className="max-w-[560px] w-full mx-auto">{children}</div>
    </div>
  );
};

const RightPanel = ({ children }) => {
  return (
    <div
      className="hidden xmd:block overflow-y-auto sticky top-[56px] w-[345px]"
      style={{ height: 'calc(100vh - 56px)' }}
    >
      {children}
    </div>
  );
};

export { LeftPanel, MiddlePanel, RightPanel, PageContent };
