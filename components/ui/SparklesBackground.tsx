import React from "react";
import { SparklesCore } from "./sparkles";

interface SparklesBackgroundProps {
  children: React.ReactNode;
}

export const SparklesBackground: React.FC<SparklesBackgroundProps> = ({
  children,
}) => {
  return (
    <div className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {children}
    </div>
  );
};
