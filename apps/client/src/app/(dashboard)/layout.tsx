// "use client";

// import { useSidebar } from "@/layout/SidebarContext";
// import AppHeader from "@/layout/AppHeader";
// import AppSidebar from "@/layout/AppSidebar";
// import Backdrop from "@/layout/Backdrop";
// import React from "react";

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { isExpanded, isHovered, isMobileOpen } = useSidebar();


//   const mainContentMargin =
//     isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]";

//   // And update the main content div:
//   <div
//     className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
//   ></div>;
//   return (
//     <div className="min-h-screen xl:flex">
//       {/* Sidebar */}
//       <AppSidebar />

//       {/* Overlay for mobile */}
//       {isMobileOpen && <Backdrop />}

//       {/* Main content */}
//       <div
//         className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
//       >
//         <AppHeader />
//         <div className="p-4 mx-auto max-w-[1600px] md:p-6">{children}</div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useSidebar } from "@/layout/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isExpanded || isHovered 
    ? "lg:ml-[260px]" 
    : "lg:ml-0";

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <AppSidebar />

      {/* Overlay for mobile */}
      {isMobileOpen && <Backdrop />}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <AppHeader />
        <main 
          className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
        >
          <div className="p-4 mx-auto max-w-[1600px] md:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}