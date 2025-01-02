"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { OutlinedButton } from "@/components/Buttons";
import { useRouter } from "next/navigation";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react";

export default function HomePage() {
  const router = useRouter();
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
      <div className="relative backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg mx-4">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          techMilionerzy
        </h1>
        <p className="text-center text-white text-lg mt-4">
          Twoja wiedza technologiczna jest warta milion? Udowodnij to!
        </p>
        <div className="flex flex-row gap-2 justify-center mt-4">
          <IconBrandHtml5 size={32} color="#FFFFFF" />
          <IconBrandCss3 size={32} color="#FFFFFF" />
          <IconBrandJavascript size={32} color="#FFFFFF" />
          <IconBrandTypescript size={32} color="#FFFFFF" />
          <IconBrandNodejs size={32} color="#FFFFFF" />
          <IconBrandReact size={32} color="#FFFFFF" />
          <IconBrandNextjs size={32} color="#FFFFFF" />
        </div>
        <div className="flex flex-row gap-4 mt-4 z-20 justify-center">
          <OutlinedButton
            text="Rozpocznij grę"
            onClick={() => {
              router.push("/gra");
            }}
          />
          <OutlinedButton
            text="Zasady"
            onClick={() => {
              router.push("/zasady");
            }}
          />
        </div>
      </div>
    </div>
  );
}
