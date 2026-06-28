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
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: `${t("title")} ${METADATA.exTitle}`,
    description: t("description"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          {t("title")}
        </h1>
        <p className="mt-2 text-neutral-500">{t("description")}</p>
      </div>

      <section className="space-y-4">
        <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          {t("bio")}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          {t("education.title")}
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="font-medium text-neutral-900 dark:text-white">
              Licence Informatique
            </h3>
            <p className="text-sm text-neutral-500">
              Data & Intelligence Artificielle
            </p>
            <p className="mt-1 text-sm text-neutral-400">2022 - Present</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          {t("experience.title")}
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="font-medium text-neutral-900 dark:text-white">
              Data Analyst / ML Engineer
            </h3>
            <p className="text-sm text-neutral-500">Stage</p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Developpement de modeles de machine learning et analyse de donnees.
            </p>
            <p className="mt-1 text-sm text-neutral-400">2024</p>
          </div>
        </div>
      </section>
    </div>
  );
}
