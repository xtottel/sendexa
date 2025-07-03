import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Sendexa",
  description: "Create your Sendexa account and start sending SMS and Email communications easily.",
};

export default function SignUp() {
  return <SignUpForm />;
}
