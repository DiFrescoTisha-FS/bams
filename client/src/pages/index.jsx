// Home.jsx
import React, { useEffect, useState, Suspense } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { usePageVisibility } from "../hooks/usePageVisibility";
import ArtistInfo from "../components/artistInfo/Artist";
import TwinklingBackground from "../components/twinklingbackground/TwinklingBackground";
import HeroSection from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";

const Thoughts = React.lazy(() => import("../components/thoughts/Thoughts"));
const Music = React.lazy(() => import("../components/music/Music"));
const NewSection = React.lazy(() => import("../components/new/NewSection"));
const CommentSection = React.lazy(() => import("../components/commentsection/CommentSection"));

const Home = () => {
  const { authState, handleSignIn, handleSignOut } = useAuthContext();
  const isVisible = usePageVisibility();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const currentUser = authState?.user;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("HOME component mounted");

    return () => {
      console.log("HOME component UNmounted");
    };
  }, []);

  return (
    <>
      <TwinklingBackground />
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        currentUser={currentUser}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
      />
      <Navbar
        toggle={toggle}
        isOpen={isOpen}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
        currentUser={currentUser}
        isVisible={isVisible}
      />
      <HeroSection />
      <ArtistInfo />
      <Suspense fallback={<div>Loading Music...</div>}>
        <Music />
      </Suspense>
      <Suspense fallback={<div>Loading New Section...</div>}>
        <NewSection />
      </Suspense>
      <Suspense fallback={<div>Loading Thoughts...</div>}>
        <Thoughts />
      </Suspense>
      <Suspense fallback={<div>Loading Comments...</div>}>
        {currentUser && <CommentSection currentUser={currentUser} />}
      </Suspense>
      {authState.message && <div className="message">{authState.message}</div>}
      {authState.errorMessage && (
        <div className="error-message">{authState.errorMessage}</div>
      )}
      <Footer />
    </>
  );
};

export default Home;
