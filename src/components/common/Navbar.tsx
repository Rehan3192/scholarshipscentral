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

const pillClassName =
  "inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2";

function NavDropdown({
  id,
  label,
  items,
  openMenu,
  setOpenMenu,
  canHoverOpen,
  cancelClose,
  scheduleClose,
}: {
  id: MenuId;
  label: string;
  items: DropdownItem[];
  openMenu: MenuId | null;
  setOpenMenu: (value: MenuId | null) => void;
  canHoverOpen: boolean;
  cancelClose: () => void;
  scheduleClose: () => void;
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
            "size-4 text-gray-500 transition-transform duration-200 motion-reduce:transition-none",
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
            "origin-top rounded-xl border border-gray-200 bg-white p-2 shadow-lg transition duration-200 motion-reduce:transition-none",
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
              onClick={() => setOpenMenu(null)}
              className="block rounded-lg px-3 py-2 text-sm text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <span className="font-semibold">{item.label}</span>
              {item.description ? (
                <span className="mt-0.5 block text-xs font-medium text-gray-600">
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
  const openMenuRef = useRef<MenuId | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const [canHoverOpen, setCanHoverOpen] = useState(false);

  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const rafPendingRef = useRef(false);

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
    if (!openMenu) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openMenu]);

  // Hide on scroll down, show on scroll up.
  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const onScroll = () => {
      if (rafPendingRef.current) return;
      rafPendingRef.current = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const last = lastScrollYRef.current;
        const delta = y - last;

        const threshold = 12;
        const atTop = y <= 8;

        if (atTop) {
          setIsHidden(false);
        } else if (delta > threshold) {
          setIsHidden(true);
          if (openMenuRef.current) setOpenMenu(null);
        } else if (delta < -threshold) {
          setIsHidden(false);
        }

        lastScrollYRef.current = y;
        rafPendingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={[
        "sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70",
        "transition-transform duration-200 motion-reduce:transition-none",
        isHidden ? "-translate-y-full pointer-events-none" : "translate-y-0",
      ].join(" ")}
    >
      <nav
        className="mx-auto max-w-6xl px-4 py-3"
        aria-label="Primary"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-lg font-extrabold tracking-tight text-gray-900">
            Scholarships Central
          </Link>

          <form
            action="/scholarships"
            method="get"
            className="w-full sm:w-auto"
            role="search"
          >
            <label htmlFor="nav-search" className="sr-only">
              Search scholarships
            </label>
            <div className="flex w-full items-center gap-2 rounded-xl border border-gray-300 bg-white p-1 shadow-sm focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 sm:w-auto">
              <input
                id="nav-search"
                name="q"
                placeholder="Search scholarships..."
                className="w-full bg-transparent px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none sm:w-72"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-700">
          <Link
            href="/scholarships"
            className={pillClassName}
          >
            Scholarships
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
          />
          <Link
            href="/contact"
            className={pillClassName}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
