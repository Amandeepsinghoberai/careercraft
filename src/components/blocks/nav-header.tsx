import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const location = useLocation();

  return (
    <div className="flex items-center gap-4">
      <ul
        className="relative flex w-fit rounded-full border-2 border-gray-300 bg-white/10 backdrop-blur-sm p-1"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        <Tab setPosition={setPosition} to="/" isActive={location.pathname === '/'}>Home</Tab>
        <Tab setPosition={setPosition} to="/features" isActive={location.pathname === '/features'}>Features</Tab>
        <Tab setPosition={setPosition} to="/pricing" isActive={location.pathname === '/pricing'}>Pricing</Tab>
        <Tab setPosition={setPosition} to="/contact" isActive={location.pathname === '/contact'}>Contact</Tab>

        <Cursor position={position} />
      </ul>
      
      <div className="flex items-center gap-2">
        <Link 
          to="/login" 
          className="px-4 py-2 text-sm border border-gray-300 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors duration-200"
        >
          Login
        </Link>
        <Link 
          to="/signup" 
          className="px-4 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}

const Tab = ({
  children,
  setPosition,
  to,
  isActive,
}: {
  children: React.ReactNode;
  setPosition: any;
  to: string;
  isActive: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <Link to={to} className="block">
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-white/20 backdrop-blur-sm md:h-12"
    />
  );
};

export default NavHeader;
