export default function StatsCallout({ stats }) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-navy-100 bg-navy-50 px-3 py-3 text-center dark:border-navy-700 dark:bg-navy-900"
        >
          <p className="text-base font-bold text-navy-800 sm:text-lg dark:text-white">
            {stat.value}
          </p>
          <p className="mt-0.5 text-[10px] uppercase tracking-wide text-ink-500 sm:text-xs dark:text-navy-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
