"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MenuId = "countries" | "degrees" | "funding";

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
};

const CLOSE_DELAY_MS = 500;

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.7a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LogoMarkIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="h-6 w-6 rounded-md"
    >
      <defs>
        <linearGradient id="logo-mark-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#logo-mark-bg)" />
      <path d="M32 15 10 25.8 32 36.5 54 25.8 32 15Z" fill="#fff" />
      <path
        d="M19 31.5v7.1c0 1.6 5.7 4.9 13 4.9s13-3.3 13-4.9v-7.1l-13 6.2-13-6.2Z"
        fill="#fff"
        opacity=".95"
      />
      <circle cx="53" cy="33.8" r="2.2" fill="#fff" />
      <path
        d="M53 35.6v8.2"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const pillClassName =
  "inline-flex items-center rounded-full border border-blue-200/80 bg-white/85 px-2.5 py-1 text-[0.95rem] font-semibold text-slate-800 shadow-sm shadow-blue-950/[0.04] transition-colors duration-200 motion-reduce:transition-none hover:border-blue-300 hover:bg-blue-50/80 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:px-3 sm:py-1.5";

function NavDropdown({
  id,
  label,
  items,
  openMenu,
  setOpenMenu,
  canHoverOpen,
  cancelClose,
  scheduleClose,
  onNavigate,
}: {
  id: MenuId;
  label: string;
  items: DropdownItem[];
  openMenu: MenuId | null;
  setOpenMenu: (value: MenuId | null) => void;
  canHoverOpen: boolean;
  cancelClose: () => void;
  scheduleClose: () => void;
  onNavigate?: () => void;
}) {
  const isOpen = openMenu === id;

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (!canHoverOpen) return;
        cancelClose();
        setOpenMenu(id);
      }}
      onMouseLeave={() => {
        if (!canHoverOpen) return;
        scheduleClose();
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={[
          pillClassName,
          "cursor-pointer select-none gap-1.5",
        ].join(" ")}
        onClick={() => {
          cancelClose();
          setOpenMenu(isOpen ? null : id);
        }}
      >
        <span>{label}</span>
        <ChevronDownIcon
          className={[
            "size-4 text-slate-500 transition-transform duration-200 motion-reduce:transition-none",
            isOpen ? "rotate-180" : "rotate-0",
          ].join(" ")}
        />
      </button>

      <div
        className={[
          "absolute left-0 top-full z-50 mt-2 w-64 max-w-[calc(100vw-2rem)]",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <div
          role="menu"
          aria-label={`${label} menu`}
          aria-hidden={!isOpen}
          className={[
            "origin-top rounded-3xl border border-blue-200/80 bg-gradient-to-br from-white via-white to-blue-50/70 p-2 shadow-2xl shadow-blue-950/10 backdrop-blur-xl transition duration-200 motion-reduce:transition-none",
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 translate-y-1 pointer-events-none",
          ].join(" ")}
        >
          {items.map((item) => (
            <Link
              key={`${id}:${item.href}`}
              href={item.href}
              role="menuitem"
              onClick={() => {
                setOpenMenu(null);
                onNavigate?.();
              }}
              className="block rounded-2xl px-3 py-2 text-sm text-slate-900 transition-colors hover:bg-blue-50/70 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <span className="font-semibold">{item.label}</span>
              {item.description ? (
                <span className="mt-0.5 block text-xs font-medium text-slate-600">
                  {item.description}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMenuRef = useRef<MenuId | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);

  const [canHoverOpen, setCanHoverOpen] = useState(false);

  useEffect(() => {
    openMenuRef.current = openMenu;
  }, [openMenu]);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, CLOSE_DELAY_MS);
  };

  // Enable hover-to-open only on devices with a fine pointer + hover capability.
  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHoverOpen(mql.matches);
    update();

    // Safari < 14 fallback.
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    }
    // Deprecated, but required for Safari < 14.
    mql.addListener(update);
    return () => mql.removeListener(update);
  }, []);

  // Close when clicking outside.
  useEffect(() => {
    if (!openMenu) return;

    const onPointerDown = (event: PointerEvent) => {
      const root = navRef.current;
      if (!root) return;
      const target = event.target as Node | null;
      if (target && root.contains(target)) return;
      setOpenMenu(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  // Close on Escape.
  useEffect(() => {
    if (!openMenu && !isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen, openMenu]);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/75 shadow-sm shadow-blue-950/[0.04] backdrop-blur-2xl"
    >
      <nav
        className="mx-auto max-w-6xl px-3 py-2 sm:px-4 sm:py-3"
        aria-label="Primary"
      >
        <div className="rounded-3xl border border-blue-200/80 bg-gradient-to-br from-white via-blue-50/60 to-emerald-50/50 p-2 shadow-xl shadow-blue-950/[0.08] ring-1 ring-white/70 sm:p-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl px-1 text-base font-extrabold tracking-tight text-slate-950 transition-colors hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-950 shadow-lg shadow-blue-700/25 ring-1 ring-white/60">
                <LogoMarkIcon />
              </span>
              <span className="leading-tight">
                Scholarships Central
                <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700 sm:block">
                  Official-source scholarship guides
                </span>
              </span>
            </Link>

            <button
              ref={mobileMenuButtonRef}
              type="button"
              className="inline-flex items-center rounded-full border border-blue-200 bg-white/90 px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="primary-navigation-links"
              onClick={() => {
                setOpenMenu(null);
                setIsMobileMenuOpen((open) => !open);
              }}
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          <form
            action="/scholarships"
            method="get"
            className="w-full sm:w-auto"
            role="search"
          >
            <label htmlFor="nav-search" className="sr-only">
              Search scholarships and articles
            </label>
            <div className="flex w-full items-center gap-1.5 rounded-2xl border border-blue-200 bg-white/95 p-0.5 shadow-inner shadow-blue-950/[0.04] focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 sm:w-auto sm:gap-2 sm:p-1">
              <input
                id="nav-search"
                name="q"
                placeholder="Search scholarships and articles..."
                className="w-full bg-transparent px-2.5 py-1.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none sm:w-72 sm:px-3 sm:py-2"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center rounded-xl bg-slate-950 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 sm:py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div
          id="primary-navigation-links"
          className={[
            "mt-2 flex-wrap items-center gap-1.5 text-sm text-slate-700 sm:mt-3 sm:flex sm:gap-2",
            isMobileMenuOpen ? "flex" : "hidden",
          ].join(" ")}
        >
          <Link
            href="/scholarships"
            className={pillClassName}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Scholarships
          </Link>
          <Link
            href="/find-scholarships"
            className={pillClassName}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Finder
          </Link>
          <Link
            href="/blog"
            className={pillClassName}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/scholarship-results-2026"
            className={pillClassName}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Results
          </Link>
          <NavDropdown
            id="countries"
            label="Countries"
            items={[
              {
                label: "All countries",
                href: "/countries",
                description: "Browse scholarships by awarding country.",
              },
              { label: "Germany", href: "/countries/germany" },
              { label: "USA", href: "/countries/usa" },
              { label: "United Kingdom", href: "/countries/united-kingdom" },
            ]}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            canHoverOpen={canHoverOpen}
            cancelClose={cancelClose}
            scheduleClose={scheduleClose}
            onNavigate={() => setIsMobileMenuOpen(false)}
          />
          <NavDropdown
            id="degrees"
            label="Degrees"
            items={[
              {
                label: "All degrees",
                href: "/degrees",
                description: "Browse by Bachelors, Masters, or PhD.",
              },
              { label: "Bachelors", href: "/degrees/bachelors" },
              { label: "Masters", href: "/degrees/masters" },
              { label: "PhD", href: "/degrees/phd" },
            ]}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            canHoverOpen={canHoverOpen}
            cancelClose={cancelClose}
            scheduleClose={scheduleClose}
            onNavigate={() => setIsMobileMenuOpen(false)}
          />
          <NavDropdown
            id="funding"
            label="Funding"
            items={[
              {
                label: "All funding",
                href: "/funding",
                description: "Explore fully or partially funded options.",
              },
              { label: "Fully funded", href: "/funding/fully-funded" },
              { label: "Partially funded", href: "/funding/partially-funded" },
            ]}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            canHoverOpen={canHoverOpen}
            cancelClose={cancelClose}
            scheduleClose={scheduleClose}
            onNavigate={() => setIsMobileMenuOpen(false)}
          />
          <Link
            href="/contact"
            className={pillClassName}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
        </div>
      </nav>
    </header>
  );
}
