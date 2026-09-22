export default function HardwarePhotos({ photos }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {photos.map((photo) => (
        <figure
          key={photo.src}
          className="overflow-hidden rounded-xl border border-navy-100 dark:border-navy-800"
        >
          <img src={photo.src} alt={photo.caption} className="aspect-[4/3] w-full object-cover" />
          <figcaption className="bg-navy-50 px-3 py-2 text-[11px] leading-relaxed text-ink-500 sm:text-xs dark:bg-navy-900 dark:text-navy-400">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
