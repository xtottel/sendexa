import VerifyAccount from "@/components/auth/VerifyAccount";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Account | Sendexa",
  description: "Verify your Sendexa account to start using our communication services.",
};

export default function Verify() {
  return <VerifyAccount />;
}
