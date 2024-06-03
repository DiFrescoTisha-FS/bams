import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { EarthCanvasContainer, DirectiveTextWrapper, RotateIcon } from "../StyledComponents";

const Earth = ({ scale }) => {
  const earth = useGLTF("./planet/scene.gltf");
  return <primitive object={earth.scene} scale={scale} position={[0, 0, 0]} />;
};

const EarthCanvas = () => {
  const [isInView, setIsInView] = useState(false);
  const canvasContainerRef = useRef(null);
  const [scale, setScale] = useState(3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (canvasContainerRef.current) {
      observer.observe(canvasContainerRef.current);
    }

    return () => {
      if (canvasContainerRef.current) {
        observer.unobserve(canvasContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 430) {
        setScale(3);
      } else if (width <= 768) {
        setScale(3); // Smaller scale for tablets
      } else if (width <= 1500) {
        setScale(2);
      } else {
        setScale(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <EarthCanvasContainer ref={canvasContainerRef}>
      <Canvas camera={{ fov: 75, position: [0, 0, 5] }}>
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <OrbitControls autoRotate={isInView} enableZoom={false} />
          <Earth scale={scale} />
          <Preload all />
        </Suspense>
      </Canvas>
      <DirectiveTextWrapper>
        <RotateIcon className="text-[#354F80]" />
        <p className="text-[#354F80]">Rotate</p>
      </DirectiveTextWrapper>
    </EarthCanvasContainer>
  );
};

export default EarthCanvas;
