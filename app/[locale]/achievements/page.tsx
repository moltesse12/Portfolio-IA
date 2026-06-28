import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { METADATA } from "@/lib/constants/metadata";
import { ACHIEVEMENTS } from "@/lib/constants/achievements";
import AnimatedSection from "@/components/sections/AnimatedSection";
import SectionHeading from "@/components/sections/SectionHeading";
import { PiCertificate, PiStar } from "react-icons/pi";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AchievementsPage" });

  return {
    title: `${t("title")} ${METADATA.exTitle}`,
    description: t("description"),
  };
}

export default async function AchievementsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AchievementsPage" });
  const isFr = locale === "fr";

  return (
    <div className="space-y-8">
      <AnimatedSection>
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
            {t("title")}
          </h1>
          <p className="mt-2 text-neutral-500">{t("description")}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((achievement) => (
            <div
              key={achievement.id}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:border-neutral-800 dark:hover:border-primary-700"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                <PiCertificate className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                {isFr ? achievement.titleFr : achievement.titleEn}
              </h3>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <span className="text-neutral-500">{achievement.issuer}</span>
                <span className="text-neutral-300">•</span>
                <span className="flex items-center gap-1 text-neutral-400">
                  <PiStar className="h-3 w-3" />
                  {achievement.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
