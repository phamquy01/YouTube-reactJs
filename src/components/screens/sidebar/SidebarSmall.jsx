import CategorySmall from '@/components/_share/category/CategorySmall';
import React from 'react';
import { AiFillHome, AiOutlineCompass } from 'react-icons/ai';
import {
  MdOutlineFeaturedPlayList,
  MdShowChart,
  MdOutlineVideoLibrary,
} from 'react-icons/md';

function SidebarSmall() {
  return (
    <div className="sidebar-small">
      <CategorySmall icon={<AiFillHome />} title="Trang chủ" />
      <CategorySmall icon={<AiOutlineCompass />} title="Khám phá" />
      <CategorySmall icon={<MdShowChart />} title="Short" />
      <CategorySmall
        icon={<MdOutlineFeaturedPlayList />}
        title="Kênh đăng kí"
      />
      <CategorySmall icon={<MdOutlineVideoLibrary />} title="Thư viện" />
    </div>
  );
}

export default SidebarSmall;
