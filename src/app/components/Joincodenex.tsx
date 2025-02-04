"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";

export default function Joincodenex() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleJoinWaitlist = (e: FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-5 pt-20">
      <main className="w-full max-w-5xl bg-[#ffcf52] mb-10 lg:mt-24 rounded-[50px] shadow-lg p-10 flex flex-col md:flex-row items-center gap-10">
        <div className="max-w-lg w-full text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join CodeNex Ecosystem
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Stay connected with CodeNex! For inquiries, collaborations, or
            joining our community, reach out to us at{" "}
            <a
              href="mailto:contact@codenex.com"
              className="text-blue-600 underline"
            >
              contact@codenex.com
            </a>
            . We&apos;re here to innovate together!
          </p>
          <form
            onSubmit={handleJoinWaitlist}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="Enter your E-mail"
              value={email}
              onChange={handleEmailChange}
              required
              aria-label="Email input"
              className="flex-1 p-3 border border-gray-300 rounded-full text-black text-lg"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-full text-lg transition hover:bg-gray-800"
            >
              Join Waitlist
            </button>
          </form>
        </div>
        <div className="w-60 h-60 md:w-96 md:h-96 flex justify-center items-center">
          <Image
            src="/assets/codenex-logo.png"
            alt="CodeNex Logo"
            width={382}
            height={383}
            priority
          />
        </div>
      </main>
    </div>
  );
}
