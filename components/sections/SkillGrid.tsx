"use client";

import SectionHeading from "./SectionHeading";
import { SKILL_CATEGORIES } from "@/lib/constants/skills";
import { PiCode } from "react-icons/pi";
import AnimatedSection from "./AnimatedSection";

export default function SkillGrid({ isFr }: { isFr: boolean }) {
  return (
    <AnimatedSection>
      <section className="space-y-8">
        <SectionHeading
          title={isFr ? "Competences" : "Skills"}
          icon={<PiCode className="h-5 w-5" />}
        />

        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.nameFr} className="space-y-3">
            <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {isFr ? cat.nameFr : cat.nameEn}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 transition-all duration-300 hover:border-primary-300 hover:text-primary-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:border-primary-700 dark:hover:text-primary-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </AnimatedSection>
  );
}
