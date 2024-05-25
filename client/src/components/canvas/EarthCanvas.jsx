import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { EarthCanvasContainer } from "../StyledComponents";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return <primitive object={earth.scene} scale={3} position={[0, 0, 0]} />;
};

const EarthCanvas = () => {
  const [isInView, setIsInView] = useState(false); // Default to false to prevent auto-rotate initially
  const canvasContainerRef = useRef(null);

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

  return (
    <EarthCanvasContainer ref={canvasContainerRef}>
      <Canvas
        camera={{ fov: 75, position: [0, 0, 5] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <OrbitControls autoRotate={isInView} enableZoom={false} />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </EarthCanvasContainer>
  );
};

export default EarthCanvas;
