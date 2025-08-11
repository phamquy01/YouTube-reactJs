// import Home from '@/components/screens/home/Home';
import Sidebar from '@/components/screens/sidebar/Sidebar';
import SidebarSmall from '@/components/screens/sidebar/SidebarSmall';
import Header from '@/components/screens/header/Header';
import React, { useState, useEffect } from 'react';

function Youtube({ children }) {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const handleMinizeSidebar = (data) => {
    if (data) {
      setOpen(!open);
    }
  };

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 792);
      setIsTablet(width <= 1312 && width > 792);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Determine layout class based on screen size and sidebar state
  const getLayoutClass = () => {
    if (isMobile) return 'main-layout main-layout--mobile';
    if (isTablet) return 'main-layout main-layout--tablet';
    return open
      ? 'main-layout main-layout--with-sidebar'
      : 'main-layout main-layout--with-sidebar-small';
  };

  // Get filter bar class
  const getFilterClass = () => {
    if (isMobile)
      return 'home__category-filter home__category-filter--sidebar-hidden';
    if (isTablet)
      return 'home__category-filter home__category-filter--sidebar-small';
    return open
      ? 'home__category-filter'
      : 'home__category-filter home__category-filter--sidebar-small';
  };

  // Get video content class
  const getVideoClass = () => {
    if (isMobile) return 'home__video home__video--sidebar-hidden';
    if (isTablet) return 'home__video home__video--sidebar-small';
    return open ? 'home__video' : 'home__video home__video--sidebar-small';
  };

  return (
    <div className={getLayoutClass()}>
      <Header handleMinizeSidebar={handleMinizeSidebar} />
      {!isMobile && (open ? <Sidebar /> : <SidebarSmall />)}
      <div className="main-content">
        {React.cloneElement(children, {
          filterClass: getFilterClass(),
          videoClass: getVideoClass(),
        })}
      </div>
    </div>
  );
}

export default Youtube;
