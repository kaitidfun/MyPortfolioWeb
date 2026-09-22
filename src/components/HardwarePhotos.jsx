export default function HardwarePhotos({ photos }) {
  const [primary] = photos;
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
      <img
        src={primary.src}
        alt={primary.caption}
        className="aspect-[4/3] w-full flex-shrink-0 rounded-xl object-cover sm:w-56"
      />
      <ul className="space-y-2">
        {photos.map((photo) => (
          <li
            key={photo.src}
            className="flex gap-3 text-sm leading-relaxed text-ink-700 dark:text-navy-200"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy-500" />
            <span>{photo.caption}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
