import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default async function Footer({
  locale,
}: {
  locale: string;
}) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <footer className="border-t border-neutral-200 py-6 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
      <p>
        &copy; {new Date().getFullYear()} {t("name")} — {t("footerCredit")}
      </p>
    </footer>
  );
}
