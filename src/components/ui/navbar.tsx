// src/components/shared/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, User } from "lucide-react";
import GCLLogo from "./GCLLogo";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Programme", href: "/programme" },
    { label: "Campus Tour", href: "/campus-tour" },
    { label: "Guichets", href: "/guichets" },
  ];

  return (
    <header className="sticky top-0 z-[60] w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <GCLLogo variant="color" />
        </Link>

    

        
      </div>

      
    </header>
  );
}
