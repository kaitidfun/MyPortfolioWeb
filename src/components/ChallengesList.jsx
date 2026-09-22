export default function ChallengesList({ challenges }) {
  return (
    <ul className="space-y-2">
      {challenges.map((c) => (
        <li
          key={c.problem}
          className="flex gap-3 text-sm leading-relaxed text-ink-700 dark:text-navy-200"
        >
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy-500" />
          <span>
            <span className="font-semibold text-ink-900 dark:text-white">{c.problem}</span>{" "}
            <span className="text-ink-500 dark:text-navy-300">{c.solution}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
