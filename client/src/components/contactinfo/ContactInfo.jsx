import { useState, useRef, useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { BiSolidContact } from "react-icons/bi";
import {
  CustomButton,
  ContactInfoContainer
} from "../contactinfo/ContactInfoElements";

const ContactInfo = () => {
  const { isAuthenticated } = useAuthContext();
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const contactInfoRef = useRef(null);

  const handleContactInfoToggle = () => {
    setShowLoginMessage(!isAuthenticated);
    setShowContactInfo(isAuthenticated && !showContactInfo);
  };

  const handleOutsideClick = (event) => {
    if (contactInfoRef.current && !contactInfoRef.current.contains(event.target)) {
      setShowLoginMessage(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div ref={contactInfoRef}>
      <CustomButton className="bg-[#ac94f4] text-[#010606]" onClick={handleContactInfoToggle}>
        <BiSolidContact className="bg-[#010606]" size="24" />
        {showContactInfo ? 'Hide Contact Info' : 'Contact Info'}
      </CustomButton>
      {showContactInfo && isAuthenticated && (
        <ContactInfoContainer>
          <p>Email: difrescoc@gmail.com</p>
          <p>Phone: 828-708-9535</p>
        </ContactInfoContainer>
      )}
      {showLoginMessage && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          You must be logged in to view contact information.
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
