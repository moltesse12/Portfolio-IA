import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { METADATA } from "@/lib/constants/metadata";
import { PROJECTS } from "@/lib/constants/projects";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return {
    title: `${t("title")} ${METADATA.exTitle}`,
    description: t("description"),
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
  const isFr = locale === "fr";

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          {t("title")}
        </h1>
        <p className="mt-2 text-neutral-500">{t("description")}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group rounded-xl border border-neutral-200 p-6 transition-all hover:border-neutral-400 hover:shadow-md dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              {isFr ? project.titleFr : project.titleEn}
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {isFr ? project.descFr : project.descEn}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
