// import Home from '@/components/screens/home/Home';
import Header from '@/components/_share/Header';
import Sidebar from '@/components/_share/Sidebar';
import SidebarSmall from '@/components/_share/SidebarSmall';
import React, { useState } from 'react';

function Youtube({ children }) {
  const [open, setOpen] = useState(true);
  const handleMinizeSidebar = (data) => {
    if (data) {
      setOpen(!open);
    }
  };

  return (
    <>
      <Header handleMinizeSidebar={handleMinizeSidebar} />
      <div className="youtube" style={{ display: 'flex' }}>
        {open === true ? <Sidebar /> : <SidebarSmall />}
        <div className="container__children" style={{ width: '100%' }}>
          {children}
        </div>
      </div>
    </>
  );
}

export default Youtube;
