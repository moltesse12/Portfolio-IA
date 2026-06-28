import { PiCode } from "react-icons/pi";

export default function SectionHeading({
  title,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-xl font-medium text-neutral-800 dark:text-neutral-300">
      {icon ?? <PiCode className="h-5 w-5" />}
      <h2>{title}</h2>
    </div>
  );
}
