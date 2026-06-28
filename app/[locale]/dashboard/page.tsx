import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { METADATA } from "@/lib/constants/metadata";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DashboardPage" });

  return {
    title: `${t("title")} ${METADATA.exTitle}`,
    description: t("description"),
  };
}

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "DashboardPage" });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          {t("title")}
        </h1>
        <p className="mt-2 text-neutral-500">{t("description")}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 p-6 transition-all duration-300 hover:border-primary-300 dark:border-neutral-800 dark:hover:border-primary-700">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {t("github")}
          </h2>
          <p className="mt-2 text-sm text-neutral-500">{t("githubDesc")}</p>
        </div>
        <div className="rounded-xl border border-neutral-200 p-6 transition-all duration-300 hover:border-primary-300 dark:border-neutral-800 dark:hover:border-primary-700">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {t("wakatime")}
          </h2>
          <p className="mt-2 text-sm text-neutral-500">{t("wakatimeDesc")}</p>
        </div>
        <div className="rounded-xl border border-neutral-200 p-6 transition-all duration-300 hover:border-primary-300 dark:border-neutral-800 dark:hover:border-primary-700">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {t("codewars")}
          </h2>
          <p className="mt-2 text-sm text-neutral-500">{t("codewarsDesc")}</p>
        </div>
        <div className="rounded-xl border border-neutral-200 p-6 transition-all duration-300 hover:border-primary-300 dark:border-neutral-800 dark:hover:border-primary-700">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {t("monkeytype")}
          </h2>
          <p className="mt-2 text-sm text-neutral-500">{t("monkeytypeDesc")}</p>
        </div>
      </div>
    </div>
  );
}
