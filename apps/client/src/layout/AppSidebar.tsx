"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarContext";
import { NavItem } from "../types";
import navData from "./navigation.json";
import { iconMap } from "../utils/iconMap";
import { ChevronDown } from "lucide-react";

const AppSidebar: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();
  const pathname = usePathname();

  const navItems: NavItem[] = navData.navItems.map((item) => ({
    ...item,
    icon: iconMap[item.icon],
  }));
  const othersItems: NavItem[] = navData.othersItems.map((item) => ({
    ...item,
    icon: iconMap[item.icon],
  }));

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);

  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        nav.subItems?.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu({ type: menuType as "main" | "others", index });
          }
        });
      });
    });
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileOpen]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prev) =>
      prev && prev.type === menuType && prev.index === index
        ? null
        : { type: menuType, index }
    );
  };

  const handleLinkClick = () => {
    if (isMobileOpen) {
      toggleMobileSidebar();
    }
  };

  const renderMenuItems = (items: NavItem[], type: "main" | "others") => (
    <ul className="flex flex-col gap-2">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, type)}
              className={`group flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md transition-all w-full ${
                openSubmenu?.type === type && openSubmenu.index === index
                  ? "bg-[#003366] text-white"
                  : "text-gray-300 hover:bg-[#003366] hover:text-white"
              }`}
            >
              <span>{nav.icon}</span>
              <span>{nav.name}</span>
              <ChevronDown
                className={`ml-auto w-4 h-4 transition-transform duration-200 ${
                  openSubmenu?.type === type && openSubmenu.index === index
                    ? "rotate-180 text-white"
                    : "text-gray-400"
                }`}
              />
            </button>
          ) : (
            <Link
              href={nav.path ?? "#"}
              onClick={handleLinkClick}
              className={`group flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md transition-all w-full ${
                isActive(nav.path ?? "")
                  ? "bg-[#003366] text-white"
                  : "text-gray-300 hover:bg-[#003366] hover:text-white"
              }`}
            >
              <span>{nav.icon}</span>
              <span>{nav.name}</span>
            </Link>
          )}
          {nav.subItems && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${type}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === type && openSubmenu.index === index
                    ? `${subMenuHeight[`${type}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="ml-7 mt-1 flex flex-col gap-1 text-sm text-gray-400">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      onClick={handleLinkClick}
                      className={`block px-2 py-1.5 rounded-md transition-colors ${
                        isActive(subItem.path)
                          ? "bg-[#003366] text-white"
                          : "hover:bg-[#003366] hover:text-white"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{subItem.name}</span>
                        {subItem.badge && (
                          <span className="text-xs ml-2 bg-indigo-600 text-white px-1.5 py-0.5 rounded-full">
                            {subItem.badge}
                          </span>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed top-0 left-0 z-[60] h-screen w-[260px] bg-[#00264d] text-gray-200 border-r border-[#001f3a] transition-transform duration-300 ease-in-out ${
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="py-6 px-4">
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src="/images/logo/exaweb.png"
            alt="Logo"
            width={130}
            height={40}
          />
        </Link>
      </div>

      <nav className="flex flex-col overflow-y-auto px-4 pb-6 no-scrollbar h-full">
        <div className="mb-4">
          <h2 className="text-xs uppercase text-gray-400 mb-2">Menu</h2>
          {renderMenuItems(navItems, "main")}
        </div>
        <div>
          <h2 className="text-xs uppercase text-gray-400 mb-2">
            Account & Settings
          </h2>
          {renderMenuItems(othersItems, "others")}
        </div>
      </nav>
    </aside>
  );
};

export default AppSidebar;