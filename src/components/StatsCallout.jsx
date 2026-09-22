export default function StatsCallout({ stats }) {
  return (
    <div className="grid grid-cols-3 divide-x divide-navy-100 rounded-xl border border-navy-100 bg-navy-50 dark:divide-navy-700 dark:border-navy-700 dark:bg-navy-900">
      {stats.map((stat) => (
        <div key={stat.label} className="px-3 py-2.5 text-center">
          <p className="text-sm font-bold text-navy-800 dark:text-white">{stat.value}</p>
          <p className="mt-0.5 text-[10px] uppercase tracking-wide text-ink-500 dark:text-navy-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
