"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { MENU_ITEMS } from "@/lib/constants/menu";
import { SOCIAL_MEDIA } from "@/lib/constants/socialMedia";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 rounded-lg border border-neutral-300 p-2 transition-all duration-300 hover:bg-neutral-100 md:hidden dark:border-neutral-700 dark:hover:bg-neutral-800"
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

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-neutral-200 bg-white p-6 transition-transform duration-300 dark:border-neutral-800 dark:bg-neutral-950 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-900 dark:text-primary-200">
            FN
          </div>
          <div>
            <h2 className="text-sm font-bold text-neutral-900 dark:text-white">
              {t("name")}
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {t("title")}
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1" aria-label="Navigation">
          {MENU_ITEMS.filter((item) => item.isShow).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-[1.02] ${
                pathname === item.href
                  ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
              }`}
            >
              <span className="transition-all duration-300 group-hover:-rotate-12">
                {item.icon}
              </span>
              {menuLabels[item.href] || item.title}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <div className="border-t border-neutral-200 pt-4 dark:border-neutral-800" />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
          <div className="flex gap-3">
            {SOCIAL_MEDIA.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 transition-all duration-300 hover:scale-110 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
