"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "Product ▾", href: "#" },
  { label: "Our Story", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact Us", href: "#" },
];

const MOBILE_LINKS = ["Home", "Product", "Our Story", "Pricing", "Contact Us"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-[rgba(239,234,247,0.80)] backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-[clamp(16px,3vw,44px)] py-4">
        {/* Logo */}
        <a
          href="#"
          className="flex flex-shrink-0 items-center gap-2.5 no-underline"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#C9B8FF] to-[#9B7BFF] font-[family-name:var(--font-poppins)] text-base font-extrabold text-white shadow-[0_4px_12px_rgba(155,123,255,0.35)]">
            S
          </span>
          <span className="font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-[2px] text-savra-logo">
            SAVRA
          </span>
        </a>

        {/* Desktop nav pill */}
        <div className="hidden min-w-0 flex-shrink items-center gap-1 rounded-2xl bg-savra-navbar px-2.5 py-2 shadow-[0_12px_30px_rgba(20,16,36,0.22)] nav:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative whitespace-nowrap rounded-full px-4 py-[9px] text-[15px] no-underline ${
                link.active
                  ? "font-semibold text-white"
                  : "font-medium text-white/80"
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute bottom-[5px] left-4 right-4 h-0.5 rounded-sm bg-white" />
              )}
            </a>
          ))}
          <a
            href="#"
            className="whitespace-nowrap rounded-xl bg-white px-[22px] py-[11px] text-[15px] font-bold text-savra-dark no-underline shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
          >
            Start for free
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden flex-shrink-0 items-center gap-3.5 nav:flex">
          <a
            href="#"
            className="whitespace-nowrap text-[15px] font-semibold text-savra-muted no-underline"
          >
            Log In
          </a>
          <a
            href="#"
            className="whitespace-nowrap rounded-xl bg-savra-purple-soft px-[22px] py-3 text-[15px] font-semibold text-white no-underline shadow-[0_8px_20px_rgba(155,123,255,0.35)]"
          >
            Create Account
          </a>
        </div>

        {/* Burger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          className="flex flex-shrink-0 cursor-pointer flex-col rounded-xl border border-[rgba(124,92,214,0.12)] bg-[#F4F1FB] p-2.5 nav:hidden"
        >
          <span className="my-1 block h-[2.5px] w-[22px] rounded-sm bg-savra-ink" />
          <span className="my-1 block h-[2.5px] w-[22px] rounded-sm bg-savra-ink" />
          <span className="my-1 block h-[2.5px] w-[22px] rounded-sm bg-savra-ink" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 right-0 top-full max-h-[calc(100vh-70px)] overflow-y-auto border-t border-[rgba(124,92,214,0.08)] bg-[rgba(252,251,254,0.98)] backdrop-blur-md shadow-[0_16px_32px_rgba(20,16,36,0.12)] nav:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-0.5 px-[clamp(16px,4vw,40px)] pb-[22px] pt-2">
          {MOBILE_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[rgba(124,92,214,0.08)] py-[13px] text-[17px] font-semibold text-savra-ink no-underline"
            >
              {label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-2.5">
            <a
              href="#"
              className="rounded-xl border-[1.5px] border-[rgba(124,92,214,0.25)] py-[13px] text-center text-[15px] font-semibold text-savra-muted no-underline"
            >
              Log In
            </a>
            <a
              href="#"
              className="rounded-xl bg-savra-purple-soft py-[13px] text-center text-[15px] font-semibold text-white no-underline"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
