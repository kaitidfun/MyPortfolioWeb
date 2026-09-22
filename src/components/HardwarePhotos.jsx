export default function HardwarePhotos({ photos, description }) {
  const [primary] = photos;
  return (
    <div className="flex flex-col gap-4">
      <img
        src={primary.src}
        alt={description || primary.caption}
        className="aspect-[16/9] w-full rounded-xl object-cover"
      />
      {description && (
        <p className="text-sm leading-relaxed text-ink-500 dark:text-navy-300">{description}</p>
      )}
    </div>
  );
}
