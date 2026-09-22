export default function GestureShowcase({ heroClip, gestures }) {
  return (
    <div className="flex flex-col gap-6">
      {heroClip && (
        <div className="overflow-hidden rounded-2xl border border-navy-100 bg-navy-950 dark:border-navy-800">
          <video
            src={heroClip}
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full"
          />
          <p className="border-t border-navy-800 bg-navy-950 px-4 py-2 text-xs font-medium text-navy-300">
            Controlling a PC and an iPad at the same time, live
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {gestures.map((g) => (
          <div
            key={g.action}
            className="overflow-hidden rounded-xl border border-navy-100 bg-navy-50 dark:border-navy-700 dark:bg-navy-900"
          >
            <video
              src={g.clip}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-navy-100 object-cover dark:bg-navy-800"
            />
            <div className="px-2.5 py-2 sm:px-3">
              <p className="text-xs font-semibold text-ink-900 sm:text-sm dark:text-white">
                {g.emoji} {g.action}
              </p>
              <p className="mt-0.5 text-[11px] text-ink-500 dark:text-navy-400">
                {g.gesture}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
