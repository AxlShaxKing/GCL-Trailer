// src/components/ui/GCLLogo.tsx
import React from "react";

interface GCLLogoProps {
  variant?: "color" | "white";
  className?: string;
}

export default function GCLLogo({
  variant = "color",
  className = "",
}: GCLLogoProps) {
  const isColor = variant === "color";
  
  return (
    <div className={`flex items-center select-none ${className}`}>
      {isColor ? (
        <img
          src="/gcl-logo-color.png"
          alt="Génération Contenu Local (GCL) Logo"
          className="h-[42px] sm:h-[85px] w-auto object-contain"
        />
      ) : (
        <img
          src="/gcl-logo-white.png"
          alt="Génération Contenu Local (GCL) Logo"
          className="h-[42px] sm:h-[85px] w-auto object-contain rounded-lg"
        />
      )}
    </div>
  );
}
