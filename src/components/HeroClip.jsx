export default function HeroClip({ src, caption }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-navy-950 dark:border-navy-800">
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        className="aspect-[3/4] w-full object-cover"
      />
      {caption && (
        <p className="border-t border-navy-800 bg-navy-950 px-4 py-2 text-xs font-medium text-navy-300">
          {caption}
        </p>
      )}
    </div>
  );
}
