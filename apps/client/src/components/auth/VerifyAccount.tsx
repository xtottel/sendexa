"use client";

import Button from "@/components/ui/button/Button";
import { useState, useEffect } from "react";
import React from "react";

export default function VerifyAccount() {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [timer, setTimer] = useState(30);
  const [isResending, setIsResending] = useState(false);
  const [showEyesOpen, setShowEyesOpen] = useState(false);

  function handleChange(value: string, index: number) {
    if (/^[0-9a-zA-Z]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.toUpperCase();
      setOtp(newOtp);

      setShowEyesOpen(newOtp.some((char) => char !== ""));

      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) {
          (nextInput as HTMLInputElement).focus();
        }
      }
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) {
        (prevInput as HTMLInputElement).focus();
      }
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fullOtp = otp.join("");
    console.log("Verifying OTP:", `HGDF-${fullOtp}`);
    // TODO: Verify the OTP here
  }

  function handleResend() {
    if (timer === 0) {
      console.log("Resending new code...");
      setIsResending(true);

      setTimeout(() => {
        setIsResending(false);
        setTimer(30);
        setOtp(Array(4).fill(""));
        setShowEyesOpen(false);
      }, 1000);
    }
  }

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-5" />
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        
        {/* Logo */}
        <div className="flex justify-center mb-8 md:hidden">
          <img src="/images/logo/sendexa-logo.png" alt="Sendexa Logo" width={231} height={48} />
        </div>

        <div className="text-center">
          <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
            Verify your Account
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            We&apos;ve sent a 4-digit code to your phone ending with <span className="font-semibold">***45</span><br/>
            or email <span className="font-semibold">2..@g...co</span>
          </p>

          {/* Monkey Image */}
          <div className="flex justify-center mb-6">
            <img
              src={showEyesOpen ? "/images/monkey-open.png" : "/images/monkey-closed.png"}
              alt="Monkey Face"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* OTP and Prefix */}
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-3 mb-8">
              
              {/* Prefix */}
              <div className="text-brand-500 font-bold text-lg whitespace-nowrap">
                HGDF-
              </div>

              {/* OTP Boxes */}
              <div className="flex gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                ))}
              </div>

            </div>

            <Button className="w-full" size="sm" type="submit">
              Verify
            </Button>
          </form>

          {/* Resend */}
          <div className="mt-5 text-center">
            {timer > 0 ? (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Resend in <span className="font-semibold">{timer}s</span>
              </p>
            ) : (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Didn&apos;t receive code?{" "}
                <span
                  className={`text-brand-500 cursor-pointer hover:underline ${isResending ? "opacity-50 pointer-events-none" : ""}`}
                  onClick={handleResend}
                >
                  {isResending ? "Sending..." : "Resend"}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
