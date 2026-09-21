import HeroVisual from "./HeroVisual";
import { ArrowDownIcon } from "./Icons";

export default function Hero() {
  return (
    <div className="relative h-full w-full bg-navy-950">
      <HeroVisual />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-navy-300 sm:text-sm">
          Chanagun Khunphet
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Code<span className="text-navy-300">.</span> Creativity
          <span className="text-navy-300">.</span>
        </h1>
      </div>

      <div className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 text-navy-300 sm:bottom-28">
        <ArrowDownIcon className="h-5 w-5 animate-bounce" />
      </div>
    </div>
  );
}
