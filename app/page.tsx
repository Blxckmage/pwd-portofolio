"use client";
import Link from "next/link";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [typingState, setTypingState] = useState("Initializing");

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black px-10">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[90vh] w-[90vh] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="mb-2 text-[#cdd6f4]">
          <TypeAnimation
            className="text-xl font-normal"
            sequence={[
              1000,
              () => setTypingState("typing"),
              "Hello, my name is ",
              () => setTypingState("typed"),
              3000,
              () => setTypingState("deleting"),
              "const Faza = ( name, passion ) =>",
              () => setTypingState("deleted"),
              1000,
            ]}
            speed={84}
            deletionSpeed={80}
            wrapper="h1"
            repeat={Infinity}
          />
          <h1 className="bg-gradient-to-r from-[#cba6f7] to-[#f5c2e7] bg-clip-text text-9xl font-bold text-[#c0ffee] text-transparent">
            Faza Zikri
          </h1>
          <h2 className="text-4xl font-semibold text-[#cdd6f4]/60">
            I use neovim btw
          </h2>
        </div>
        <div className="mb-6 text-[#cdd6f4]">
          <p className="mt-4 max-w-4xl text-xl">
            I&apos;m a 19 y.o Fullstack Developer who spend most of my time{" "}
            <span className="line-through">tinkering my linux</span> studying
            new things everyday.
          </p>
        </div>

        <div className="mt-6 flex space-x-4">
          <Link
            href="https://github.com/Blxckmage"
            className="rounded bg-gradient-to-r from-[#f38ba8] to-[#eba0ac] px-6 py-3 text-xl text-[#1e1e2e]"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/fazazikri"
            className="rounded border-2 border-[#cdd6f4] px-6 py-3 text-xl text-[#cdd6f4]"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            href="https://instagram.com/faz__zk"
            className="rounded border-2 border-[#cdd6f4] px-6 py-3 text-xl text-[#cdd6f4]"
            target="_blank"
          >
            Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
