import { ImageIcon } from "./Icons";

export default function CoverPlaceholder({ label = "Cover image coming soon" }) {
  return (
    <div className="flex aspect-[16/9] w-full items-center justify-center rounded-xl border border-dashed border-navy-200 bg-navy-50 sm:aspect-[16/10]">
      <div className="flex flex-col items-center gap-1 text-navy-300 sm:gap-2">
        <ImageIcon className="h-6 w-6 sm:h-8 sm:w-8" />
        <span className="text-[10px] font-medium text-navy-400 sm:text-xs">{label}</span>
      </div>
    </div>
  );
}
