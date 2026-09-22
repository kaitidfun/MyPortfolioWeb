export default function StatsCallout({ stats }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1">
      {stats.map((stat) => (
        <p key={stat.label} className="text-sm text-ink-500 dark:text-navy-400">
          <span className="font-bold text-navy-800 dark:text-white">{stat.value}</span>{" "}
          <span className="text-xs uppercase tracking-wide">{stat.label}</span>
        </p>
      ))}
    </div>
  );
}
