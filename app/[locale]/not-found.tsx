import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-neutral-900 dark:text-white">404</h1>
      <p className="mt-4 text-lg text-neutral-500">{t("title")}</p>
      <p className="mt-2 text-neutral-400">{t("description")}</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900"
      >
        {t("back")}
      </Link>
    </div>
  );
}
