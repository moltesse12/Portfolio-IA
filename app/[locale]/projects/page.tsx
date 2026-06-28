import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { METADATA } from "@/lib/constants/metadata";
import { PROJECTS } from "@/lib/constants/projects";
import ProjectCard from "@/components/sections/ProjectCard";
import AnimatedSection from "@/components/sections/AnimatedSection";

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
      <AnimatedSection>
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
            {t("title")}
          </h1>
          <p className="mt-2 text-neutral-500">{t("description")}</p>
        </div>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={isFr ? project.titleFr : project.titleEn}
            description={isFr ? project.descFr : project.descEn}
            tags={project.tags}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
