import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION_HOLD_VH, SECTION_TOTAL_VH } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const HOLD_PCT = (SECTION_HOLD_VH / SECTION_TOTAL_VH) * 100;

export default function FullSection({
  zIndex = 10,
  className = "",
  children,
  transitionIn = true,
  transitionOut = true,
}) {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tweens = [];

    // Section slides up to cover the previous one "for free" via sticky
    // stacking; this adds blur/scale/position choreography on top of that
    // native motion during the ~100vh right before it locks into place.
    if (transitionIn) {
      tweens.push(
        gsap.fromTo(
          inner,
          { opacity: 0.25, scale: 0.92, y: 60, filter: "blur(14px)" },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "none",
            overwrite: false,
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          }
        )
      );
    }

    // Holds fully still for the first HOLD_PCT of this section's scroll
    // range (the "aim lock"), then animates out during the final ~100vh
    // right before the next section takes over.
    if (transitionOut) {
      tweens.push(
        gsap.to(inner, {
          opacity: 0.15,
          scale: 0.9,
          y: -60,
          filter: "blur(14px)",
          ease: "none",
          overwrite: false,
          scrollTrigger: {
            trigger: wrapper,
            start: `${HOLD_PCT}% top`,
            end: "bottom top",
            scrub: true,
          },
        })
      );
    }

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, [transitionIn, transitionOut]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      style={{ height: `${SECTION_TOTAL_VH}vh` }}
    >
      <section
        className={`sticky top-0 flex h-screen w-full flex-col overflow-hidden ${className}`}
        style={{ zIndex }}
      >
        <div ref={innerRef} className="flex h-full w-full flex-col">
          {children}
        </div>
      </section>
    </div>
  );
}
