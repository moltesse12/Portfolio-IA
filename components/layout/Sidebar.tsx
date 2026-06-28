"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { MENU_ITEMS } from "@/lib/constants/menu";
import { SOCIAL_MEDIA } from "@/lib/constants/socialMedia";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Sidebar() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuLabels: Record<string, string> = {
    "/": t("home"),
    "/about": t("about"),
    "/projects": t("projects"),
    "/achievements": t("achievements"),
    "/dashboard": t("dashboard"),
    "/contact": t("contact"),
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 rounded-md border border-neutral-300 p-2 md:hidden dark:border-neutral-700"
        aria-label="Toggle menu"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-full w-64 border-r border-neutral-200 bg-white p-6 transition-transform dark:border-neutral-800 dark:bg-neutral-950 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          {/* Profile */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
              Folly Nelson
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Data & IA
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {MENU_ITEMS.filter((item) => item.isShow).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                }`}
              >
                {item.icon}
                {menuLabels[item.href] || item.title}
              </Link>
            ))}
          </nav>

          {/* Language + Social */}
          <div className="mt-auto space-y-4">
            <LanguageSwitcher />
            <div className="flex gap-3">
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
