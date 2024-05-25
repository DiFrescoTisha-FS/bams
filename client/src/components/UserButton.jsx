import React from "react";
import PropTypes from "prop-types";
import { IoMdLogOut } from "react-icons/io";
import { useUserContext } from "../contexts/UserContext";

const UserButton = ({ isMobile }) => {
  const { state, handleSignOut, toggleMenu } = useUserContext();

  return (
    <div className="flex items-center justify-evenly border-2 border-[#ac94f4] space-x-4 opacity-90 cursor-pointer hover:opacity-60 hover:text-black rounded-full p-1 pr-2 mt-4">
      <img
        className="rounded-full w-8 h-8"
        src={state.currentUser.picture}
        alt={state.currentUser.name}
      />
      <span className="text-[#ac94f4]">{state.currentUser.name}</span>
      <button
        onClick={toggleMenu}
        className="flex items-center px-2 py-1 text-md font-md text-[#010606] hover:text-[#010606] hover:opacity-60"
      >
        Menu
      </button>
      {isMobile && (
        <button
          onClick={handleSignOut}
          className="flex items-center px-2 py-1 text-md font-md text-[#010606] hover:text-[#010606] hover:opacity-60"
        >
          <IoMdLogOut size={28} className="mr-2" color="#010606" />
          <span>Logout</span>
        </button>
      )}
      {state.isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl">
          <button
            onClick={handleSignOut}
            className="block w-full text-left px-4 py-2 text-md text-black hover:bg-gray-200"
          >
            <IoMdLogOut size={20} className="mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

UserButton.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default UserButton;
