"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Upload, File, Shield } from 'lucide-react'; // Ensure correct import

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: 'Upload',
      icon: Upload, // Valid React component
      path: '/upload',
    },
    {
      id: 2,
      name: 'Files',
      icon: File, // Valid React component
      path: '/files',
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield, // Valid React component
      path: '/upgrade',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className='shadow-sm border-r h-full'>
        <Image src="/logo.svg" width={150} height={100} alt="picture" />
      </div>
      <div className="flex flex-col float-left">
        {menuList.map((item) => (
          <button
            key={item.id} // Add unique key
            className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500 $(activeIndex== index ? 'bg-blue-50 text-primary' :null}`} onClick={() => setActiveIndex(index)}
          >
            {item.icon ? <item.icon className="w-5 h-5" /> : null} {/* Defensive check */}
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
