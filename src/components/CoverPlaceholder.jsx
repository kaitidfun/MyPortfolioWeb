import { ImageIcon } from "./Icons";

export default function CoverPlaceholder({ label = "Cover image coming soon" }) {
  return (
    <div className="flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-dashed border-navy-200 bg-navy-50">
      <div className="flex flex-col items-center gap-2 text-navy-300">
        <ImageIcon className="h-8 w-8" />
        <span className="text-xs font-medium text-navy-400">{label}</span>
      </div>
    </div>
  );
}
