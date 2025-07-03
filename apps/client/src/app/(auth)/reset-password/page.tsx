import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Sendexa",
  description: "Enter a new password to regain access to your Sendexa account.",
};

export default function ResetPassword() {
  return <ResetPasswordForm />;
}
