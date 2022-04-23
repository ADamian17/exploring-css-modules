import React, { useState } from 'react';
import './MenuIcon.modules.scss';

const MenuIcon: React.FC = (props) => {
  const [hidde, setHidde] = useState(false);

  return (
    <svg
      onClick={() => setHidde(!hidde)}
      className="menuIcon"
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`menuIconCross ${!hidde ? 'hidde' : 'show'}`}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99989 6.37857L3.98948 0.368164L1.86816 2.48948L7.87857 8.49989L1.86816 14.5103L3.98948 16.6316L9.99989 10.6212L16.0103 16.6316L18.1316 14.5103L12.1212 8.49989L18.1316 2.48948L16.0103 0.368164L9.99989 6.37857Z"
        fill="black"
      />

      <path
        className={`menuIconBar ${hidde ? 'hidde' : 'show'}`}
        d="M20 0H0V3H20V0Z"
        fill="black"
      />
      <path
        className={`menuIconBar ${hidde ? 'hidde' : 'show'}`}
        d="M20 7H0V10H20V7Z"
        fill="black"
      />
      <path
        className={`menuIconBar ${hidde ? 'hidde' : 'show'}`}
        d="M20 14H0V17H20V14Z"
        fill="black"
      />
    </svg>
  );
};

export default MenuIcon;
