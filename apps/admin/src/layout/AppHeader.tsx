"use client";

import React from "react";
import { AlignJustify, X, Bell, Mail, AlertCircle, CheckCircle2 } from "lucide-react";
import { useSidebar } from "./SidebarContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const AppHeader: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: "message",
      title: "New message",
      description: "You have a new message from Sarah",
      time: "2 min ago",
      read: false,
      icon: <Mail className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 2,
      type: "alert",
      title: "System Alert",
      description: "Your storage is almost full",
      time: "1 hour ago",
      read: false,
      icon: <AlertCircle className="h-4 w-4 text-yellow-500" />,
    },
    {
      id: 3,
      type: "success",
      title: "Payment Received",
      description: "Your invoice has been paid",
      time: "3 hours ago",
      read: true,
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (   
    <header className="sticky top-0 flex w-full bg-white border-b border-gray-200 dark:border-gray-800 dark:bg-gray-900 z-50">
      <div className="flex items-center justify-between w-full px-4 py-3 lg:px-6">
        {/* Mobile Sidebar Toggle */}
        <button
          className="lg:hidden p-2 rounded-md border dark:border-gray-700 text-gray-600 dark:text-gray-300"
          onClick={toggleMobileSidebar}
          aria-label="Toggle Sidebar"
        >
          {isMobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <AlignJustify className="w-5 h-5" />
          )}
        </button>

        {/* Spacer to push controls to right */}
        <div className="flex-1" />

        {/* User Controls */}
        <div className="flex items-center gap-4">
          {/* Notification Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-0" align="end" forceMount>
              <DropdownMenuLabel className="px-4 py-3 border-b">
                <div className="flex justify-between items-center">
                  <span>Notifications</span>
                  <Badge variant="secondary">{unreadCount} unread</Badge>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuGroup className="max-h-[400px] overflow-y-auto">
                {notifications.map((notification) => (
                  <DropdownMenuItem 
                    key={notification.id} 
                    className={`px-4 py-3 ${!notification.read ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                  >
                    <div className="flex gap-3">
                      <div className="mt-1">
                        {notification.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-sm font-medium">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Avatar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/default.png" alt="User" />
                  <AvatarFallback className="bg-blue-500 text-white">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500">
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;