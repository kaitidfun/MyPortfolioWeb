export default function ArchitectureDiagram({ nodes }) {
  return (
    <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
      {nodes.map((node, i) => (
        <div key={node.label} className="contents">
          <div className="flex-1 rounded-xl border border-navy-100 bg-navy-50 px-4 py-3 text-center dark:border-navy-700 dark:bg-navy-900">
            <p className="text-sm font-bold text-navy-800 dark:text-white">{node.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-500 dark:text-navy-400">
              {node.detail}
            </p>
          </div>
          {i < nodes.length - 1 && (
            <span
              aria-hidden="true"
              className="flex-shrink-0 self-center text-lg text-navy-400 sm:-rotate-90 dark:text-navy-500"
            >
              &darr;
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
