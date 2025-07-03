"use client";
import React, { useState } from "react";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Link from "next/link";
import Image from "next/image";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Resetting error and success messages
    setErrorMessage("");
    setSuccessMessage("A password reset link has been sent to your email.");

    // Call forgot password API or logic here (to send the email)
    console.log("Password reset link sent to:", email);
  };

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-5"></div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        {/* Logo section (for mobile) */}
        <div className="flex justify-center mb-8 md:hidden">
          <Image
            src="/images/logo/exaweb.png"
            alt="Exaweb Logo"
            width={150}
            height={48}
          />
       
          {/* <img
            src="/images/logo/sendexa-logo.png"
            alt="Sendexa Logo"
            width={231}
            height={48}
          /> */}
          
        </div>

        <div>
          <div className="mb-5 sm:mb-8 text-center">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Forgot Your Password?
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email address to receive a password reset link.
            </p>
          </div>

          {/* Form Start */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <Label>
                  Email Address <span className="text-error-500">*</span>{" "}
                </Label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  // value={email}
                  onChange={handleEmailChange}
                />
              </div>

              {/* Error Message */}
              {errorMessage && (
                <p className="text-sm text-error-500 mt-2 text-center">
                  {errorMessage}
                </p>
              )}

              {/* Success Message */}
              {successMessage && (
                <p className="text-sm text-success-500 mt-2 text-center">
                  {successMessage}
                </p>
              )}

              {/* <!-- Button --> */}
              <div>
                <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                  Send Reset Link
                </button>
              </div>
              {/* Submit Button */}
            </div>
          </form>

          {/* Link to Login Page */}
          <div className="mt-5 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Remember your password?{" "}
              <Link
                href="/login"
                className="text-brand-500 cursor-pointer hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
