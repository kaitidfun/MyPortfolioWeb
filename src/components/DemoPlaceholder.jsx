import { PlayIcon, ImageIcon } from "./Icons";

export default function DemoPlaceholder({ type, label }) {
  if (type === "gallery") {
    return (
      <div className="grid aspect-[16/10] grid-cols-2 gap-2 rounded-2xl border border-dashed border-navy-200 bg-navy-50 p-3 sm:grid-cols-3 dark:border-navy-700 dark:bg-navy-800">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-lg border border-navy-100 bg-white dark:border-navy-700 dark:bg-navy-900"
          >
            <ImageIcon className="h-6 w-6 text-navy-300 dark:text-navy-600" />
          </div>
        ))}
        <p className="col-span-full mt-1 text-center text-xs font-medium text-navy-400 dark:text-navy-400">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-navy-200 bg-navy-50 dark:border-navy-700 dark:bg-navy-800">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm dark:bg-navy-900">
        <PlayIcon className="h-6 w-6 text-navy-400" />
      </div>
      <p className="text-sm font-medium text-navy-400">{label}</p>
    </div>
  );
}
