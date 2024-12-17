'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';

export function Joincodenex() {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleJoinWaitlist = (e: FormEvent) => {
    e.preventDefault();
    // Add your waitlist logic here
    console.log('Email submitted:', email);
  };

  return (
    <div suppressHydrationWarning>
      <main className="main">
        <section className="hero">
          <div className="content">
            <h1>Join CodeNex Ecosystem</h1>
            <p>
              Stay connected with CodeNex! For inquiries, collaborations, or
              joining our community, reach out to us at <a href="mailto:contact@codenex.com">contact@codenex.com</a>. 
              We&apos;re here to innovate together!
            </p>
            <form onSubmit={handleJoinWaitlist} className="input-group">
              <input 
                type="email" 
                placeholder="Enter your E-mail" 
                value={email}
                onChange={handleEmailChange}
                required
                aria-label="Email input"
              />
              <button type="submit">
                Join Waitlist
              </button>
            </form>
          </div>

          <div className="logo-large">
            <Image 
              src="/codenex-logo.png" 
              alt="CodeNex Logo" 
              width={382}
              height={383}
              priority
            />
          </div>
        </section>
      </main>

      <style jsx>{`
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
          height: calc(100vh - 100px);
          background-color: #fff;
          padding: 20px;
        }

        .hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #ffcf52;
          border-radius: 50px;
          padding: 40px;
          max-width: 1200px;
          width: 100%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .content {
          max-width: 50%;
        }

        h1 {
          font-size: 2.8rem;
          font-weight: bold;
          margin-bottom: 20px;
          color: #333;
        }

        p {
          margin-bottom: 30px;
          font-size: 1.1rem;
          line-height: 1.5;
          color: #666;
        }

        .input-group {
          display: flex;
          gap: 10px;
        }

        input {
          padding: 15px;
          flex: 1;
          border: 1px solid #ccc;
          border-radius: 50px;
          font-size: 1rem;
          font-family: 'Albert Sans', sans-serif;
          color: #000;
        }

        button {
          padding: 15px 25px;
          background-color: #000;
          color: #fff;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #333;
        }

        .logo-large {
          max-width: 50%;
        }
      `}</style>
    </div>
  );
}