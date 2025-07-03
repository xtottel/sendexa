import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "sonner";
import { SidebarProvider } from "@/layout/SidebarContext";

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} dark:bg-gray-900`}>
        <SidebarProvider>{children}</SidebarProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
