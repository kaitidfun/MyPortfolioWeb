export default function HeroClip({ src, poster, caption }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-navy-950 dark:border-navy-800">
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="aspect-video w-full"
      />
      {caption && (
        <p className="border-t border-navy-800 bg-navy-950 px-4 py-2 text-xs font-medium text-navy-300">
          {caption}
        </p>
      )}
    </div>
  );
}
