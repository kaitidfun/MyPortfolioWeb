import { ImageIcon } from "./Icons";

export default function CoverPlaceholder({
  label = "Cover image coming soon",
  className = "aspect-[16/9] w-full sm:aspect-[16/10]",
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-dashed border-navy-200 bg-navy-50 dark:border-navy-700 dark:bg-navy-800 ${className}`}
    >
      <div className="flex flex-col items-center gap-1 px-1 text-center text-navy-300 dark:text-navy-500">
        <ImageIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-[9px] font-medium leading-tight text-navy-400 sm:text-[10px]">{label}</span>
      </div>
    </div>
  );
}
