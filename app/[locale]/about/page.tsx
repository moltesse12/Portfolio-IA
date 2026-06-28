import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { METADATA } from "@/lib/constants/metadata";
import { EDUCATION, EXPERIENCES } from "@/lib/constants/about";
import SectionHeading from "@/components/sections/SectionHeading";
import { PiBookOpen, PiBriefcase } from "react-icons/pi";

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
  const isFr = locale === "fr";

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
        <SectionHeading title={t("education.title")} icon={<PiBookOpen className="h-5 w-5" />} />
        <div className="space-y-4">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="rounded-xl border border-neutral-200 p-5 transition-all duration-300 hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
            >
              <h3 className="font-semibold text-neutral-900 dark:text-white">
                {isFr ? edu.degreeFr : edu.degreeEn}
              </h3>
              <p className="text-sm text-neutral-500">
                {isFr ? edu.schoolFr : edu.schoolEn} — {isFr ? edu.fieldFr : edu.fieldEn}
              </p>
              <p className="mt-1 text-sm text-neutral-400">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading title={t("experience.title")} icon={<PiBriefcase className="h-5 w-5" />} />
        <div className="space-y-4">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl border border-neutral-200 p-5 transition-all duration-300 hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
            >
              <h3 className="font-semibold text-neutral-900 dark:text-white">
                {isFr ? exp.roleFr : exp.roleEn}
              </h3>
              <p className="text-sm text-neutral-500">
                {isFr ? exp.companyFr : exp.companyEn}
              </p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {isFr ? exp.descFr : exp.descEn}
              </p>
              <p className="mt-1 text-sm text-neutral-400">{exp.period}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
