"use client";
import { useSidebar } from "@/layout/SidebarContext";
import React from "react";

const Backdrop: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  if (!isMobileOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[55] bg-gray-900/50 transition-opacity duration-300 lg:hidden"
      onClick={toggleMobileSidebar}
      role="presentation"
      aria-hidden="true"
    />
  );
};

export default Backdrop;
