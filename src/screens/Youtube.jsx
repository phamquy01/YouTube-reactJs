// import Home from '@/components/screens/home/Home';
import Sidebar from '@/components/screens/sidebar/Sidebar';
import SidebarSmall from '@/components/screens/sidebar/SidebarSmall';
import Header from '@/components/screens/header/Header';
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
