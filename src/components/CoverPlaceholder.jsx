import { ImageIcon } from "./Icons";

export default function CoverPlaceholder({
  label = "Cover image coming soon",
  className = "aspect-[16/9] w-full sm:aspect-[16/10]",
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-dashed border-navy-200 bg-navy-50 dark:border-navy-700 dark:bg-navy-800 ${className}`}
    >
      <div className="flex flex-col items-center gap-1 text-navy-300 sm:gap-2 dark:text-navy-500">
        <ImageIcon className="h-6 w-6 sm:h-8 sm:w-8" />
        <span className="text-[10px] font-medium text-navy-400 sm:text-xs">{label}</span>
      </div>
    </div>
  );
}
