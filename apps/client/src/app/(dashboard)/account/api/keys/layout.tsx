import { metadata as importedMetadata } from "./metadata";
import { Metadata } from "next";

export const metadata: Metadata = importedMetadata;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
