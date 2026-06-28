"use client";

import { PiCode } from "react-icons/pi";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

export default function ProjectCard({ title, description, tags, index }: ProjectCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-neutral-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:border-neutral-800 dark:hover:border-primary-700"
      style={{
        animation: `fadeIn 0.5s ease-out ${index * 0.08}s both`,
      }}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
        <PiCode className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 transition-colors group-hover:bg-primary-50 group-hover:text-primary-700 dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:bg-primary-900/30 dark:group-hover:text-primary-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
