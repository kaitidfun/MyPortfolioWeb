export default function ProfilePlaceholder() {
  return (
    <div className="flex aspect-square w-40 flex-shrink-0 items-center justify-center rounded-full border border-dashed border-navy-200 bg-navy-50 sm:w-56 dark:border-navy-700 dark:bg-navy-900">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-16 w-16 text-navy-300 sm:h-20 sm:w-20 dark:text-navy-600"
      >
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20c1.5-4 4.5-6 7.5-6s6 2 7.5 6" strokeLinecap="round" />
      </svg>
    </div>
  );
}
