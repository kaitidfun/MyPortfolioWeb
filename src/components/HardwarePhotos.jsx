export default function HardwarePhotos({ photo, description }) {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={photo.src}
        alt={description || photo.caption}
        className="aspect-[4/3] w-full rounded-xl object-cover object-top"
      />
      {description && (
        <p className="text-sm leading-relaxed text-ink-500 dark:text-navy-300">{description}</p>
      )}
    </div>
  );
}
