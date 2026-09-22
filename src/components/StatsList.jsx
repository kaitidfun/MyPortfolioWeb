export default function StatsList({ stats }) {
  return (
    <ul className="flex flex-1 flex-col justify-center gap-5">
      {stats.map((stat) => (
        <li key={stat.label} className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy-500" />
          <p>
            <span className="block text-lg font-bold text-navy-800 sm:text-xl dark:text-white">
              {stat.value}
            </span>
            <span className="block text-xs uppercase tracking-wide text-ink-500 dark:text-navy-400">
              {stat.label}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}
