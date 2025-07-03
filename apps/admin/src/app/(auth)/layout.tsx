import GridShape from "@/components/common/GridShape";
//import Image from "next/image";
//import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col dark:bg-gray-900 sm:p-0">
        {children}

        <div className="lg:w-1/2 w-full h-full bg-brand-950 dark:bg-white/5 lg:grid items-center hidden">
          <div className="relative flex items-center justify-center z-1">
            {/* ===== Common Grid Shape Start ===== */}
            <GridShape />

            <div className="flex flex-col items-center max-w-xs">
              {/* <Link href="/" className="block mb-4">
                <Image
                  src="/images/logo/sendexa-logo-white.png"
                  alt="Sendexa Logo"
                  width={231}
                  height={48}
                />
              </Link> */}
              <h3 className="text-center text-white font-bold text-6xl">
                Welcome to Sendexa
              </h3>
              <p className="text-center text-gray-400 dark:text-white/60">
                Manage your messaging and communication services easily with
                Sendexa&apos;s refreshed new look!
              </p>
            </div>
          </div>
        </div>

        <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
          {/* Reserved for future use (like theme switcher or help button) */}
        </div>
      </div>
    </div>
  );
}
