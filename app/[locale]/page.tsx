import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { METADATA } from "@/lib/constants/metadata";
import SkillGrid from "@/components/sections/SkillGrid";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: `${METADATA.creator} | Portfolio`,
    description: t("description"),
    openGraph: {
      title: `${METADATA.creator} | Portfolio`,
      description: t("description"),
      type: "website",
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "HomePage" });
  const isFr = locale === "fr";

  return (
    <div className="space-y-20">
      <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            {t("title")}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {t("subtitle")}
          </p>
          <p className="mx-auto max-w-2xl text-neutral-500 dark:text-neutral-500">
            {t("resume.paragraph_1")}
          </p>
          <p className="mx-auto max-w-2xl text-neutral-500 dark:text-neutral-500">
            {t("resume.paragraph_2")}
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/projects"
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {t("cta")}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition-all duration-300 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              {t("contactCta")}
            </Link>
          </div>
        </div>
      </section>

      <SkillGrid isFr={isFr} />
    </div>
  );
}
