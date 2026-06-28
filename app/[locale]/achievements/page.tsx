import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { METADATA } from "@/lib/constants/metadata";
import { PiCertificate } from "react-icons/pi";

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

const ACHIEVEMENTS = [
  {
    titleFr: "Certification Data Science",
    titleEn: "Data Science Certification",
    issuer: "Coursera",
    date: "2024",
  },
  {
    titleFr: "Kaggle Competition",
    titleEn: "Kaggle Competition",
    issuer: "Kaggle",
    date: "2024",
  },
];

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
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          {t("title")}
        </h1>
        <p className="mt-2 text-neutral-500">{t("description")}</p>
      </div>

      <div className="space-y-4">
        {ACHIEVEMENTS.map((achievement, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
              <PiCertificate className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">
                {isFr ? achievement.titleFr : achievement.titleEn}
              </h3>
              <p className="text-sm text-neutral-500">{achievement.issuer}</p>
              <p className="text-sm text-neutral-400">{achievement.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
