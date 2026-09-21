import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FullSection({
  id,
  zIndex = 10,
  className = "",
  children,
  fadeOut = true,
}) {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const inner = innerRef.current;
    if (!section || !inner || !fadeOut) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.to(inner, {
      opacity: 0.2,
      scale: 0.94,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [fadeOut]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`sticky top-0 flex h-screen w-full flex-col overflow-hidden ${className}`}
      style={{ zIndex }}
    >
      <div ref={innerRef} className="flex h-full w-full flex-col">
        {children}
      </div>
    </section>
  );
}
