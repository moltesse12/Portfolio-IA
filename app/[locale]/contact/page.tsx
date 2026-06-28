import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { METADATA } from "@/lib/constants/metadata";
import ContactForm from "@/components/sections/ContactForm";
import { SOCIAL_MEDIA } from "@/lib/constants/socialMedia";
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
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return {
    title: `${t("title")} ${METADATA.exTitle}`,
    description: t("description"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ContactPage" });

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

      <div className="grid gap-8 md:grid-cols-[1fr_auto]">
        <AnimatedSection>
          <div className="max-w-lg">
            <ContactForm />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="space-y-3">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {t("title")}
            </p>
            {SOCIAL_MEDIA.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 text-sm text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-primary-700 dark:hover:text-primary-400"
                aria-label={social.name}
              >
                <span className="text-lg">{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
