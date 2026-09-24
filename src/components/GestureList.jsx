import SilentLoopVideo from "./SilentLoopVideo";

export default function GestureList({ gestures }) {
  return (
    <div className="divide-y divide-navy-100 border-y border-navy-100 dark:divide-navy-800 dark:border-navy-800">
      {gestures.map((g) => (
        <div key={g.action} className="flex items-center gap-4 py-4 sm:gap-5">
          <SilentLoopVideo
            src={g.clip}
            className="aspect-[4/3] w-44 flex-shrink-0 rounded-lg border border-navy-100 bg-navy-50 sm:w-64 dark:border-navy-700 dark:bg-navy-900"
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink-900 sm:text-base dark:text-white">
              {g.emoji} {g.action}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ink-500 sm:text-sm dark:text-navy-300">
              {g.howTo}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
