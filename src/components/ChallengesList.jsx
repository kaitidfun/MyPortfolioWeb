export default function ChallengesList({ challenges }) {
  return (
    <div className="flex flex-col gap-4">
      {challenges.map((c) => (
        <div
          key={c.problem}
          className="rounded-xl border border-navy-100 bg-navy-50 p-4 dark:border-navy-700 dark:bg-navy-900"
        >
          <p className="text-xs font-semibold text-ink-900 dark:text-white">{c.problem}</p>
          <p className="mt-1.5 text-xs leading-relaxed text-ink-500 dark:text-navy-300">
            {c.solution}
          </p>
        </div>
      ))}
    </div>
  );
}
