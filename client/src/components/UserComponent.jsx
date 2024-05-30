import React, { useState, useEffect, useCallback, useRef } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { FaChevronDown } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdLogOut } from "react-icons/io";

const UserComponent = ({ isMobile, handleSignIn, handleSignOut }) => {
  const { authState } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const currentUser = authState?.user;

  const toggleDropdown = useCallback(() => {
    setDropdownOpen(prevDropdownOpen => !prevDropdownOpen);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const onSignOut = useCallback(() => {
    handleSignOut();
  }, [handleSignOut]);

  const handleDropdownClick = (event) => {
    event.stopPropagation();
    toggleDropdown();
  };

  return (
    <div className="lg:block relative bg-black">
      {currentUser ? (
        <div className="flex items-center border-2 border-[#ac94f4] space-x-4 opacity-90 cursor-pointer hover:opacity-60 hover:text-black rounded-full p-1 pr-2 mt-4" onClick={toggleDropdown}>
          <img className="rounded-full w-8 h-8" src={currentUser.avatar} alt={currentUser.name} onClick={handleDropdownClick} />
          <span className="text-[#ac94f4]" onClick={handleDropdownClick}>{currentUser.name}</span>
          <FaChevronDown onClick={handleDropdownClick} />
          {dropdownOpen && (
            <div ref={dropdownRef} className="absolute top-10 right-0 mt-2 py-2 w-48 bg-[#ac94f4] rounded-full shadow-xl z-20">
              <button onClick={onSignOut} className="flex items-center px-2 py-[1px] text-md font-md text-[#010606] hover:text-[#010606] hover:opacity-60">
                <IoMdLogOut size={28} className="mr-2" color="#010606" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <button className="flex items-center justify-center gap-2 px-2 py-2.5 rounded-full bg-[#010606] p-1 mt-3 text-[#ac94f4] text-md border-2 border-[#ac94f4] shadow-md cursor-pointer transition-colors hover:opacity-60 hover:border-[#ac94f4] hover:shadow-md" onClick={handleSignIn}>
          <FcGoogle size={28} className="block rounded-full p-[4px] bg-white" />
          <span className="block text-[#ac94f4] pr-2">Sign in with Google</span>
        </button>
      )}
    </div>
  );
};

export default UserComponent;
