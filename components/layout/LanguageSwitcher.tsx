"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const otherLocale = locale === "fr" ? "en" : "fr";

  const switchLocale = () => {
    router.replace(pathname, { locale: otherLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
      aria-label={t("language")}
    >
      {otherLocale.toUpperCase()}
    </button>
  );
}
