import { skillCategories, softSkills } from "../data/resumeData";
import Reveal from "./Reveal";

export default function TechStack() {
  return (
    <div className="flex h-full w-full flex-col justify-center bg-navy-50 py-16 sm:py-20">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 sm:text-sm">
            Capabilities
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink-900 sm:mt-3 sm:text-4xl">
            Tech Stack &amp; Skills
          </h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-3 shadow-sm sm:p-6">
                <h3 className="text-xs font-bold uppercase tracking-wide text-navy-800 sm:text-sm">
                  {category.title}
                </h3>
                <ul className="mt-2 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-navy-50 px-2 py-0.5 text-[10px] font-medium text-navy-700 sm:px-3 sm:py-1 sm:text-xs"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 sm:mt-12">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-navy-600 sm:text-sm">
            Soft Skills
          </h3>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-6">
            {softSkills.map((skill, index) => (
              <Reveal key={skill.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl bg-white p-3 shadow-sm sm:p-6">
                  <p className="text-xs font-bold text-ink-900 sm:text-sm">
                    {skill.title}
                  </p>
                  <p className="mt-1 hidden text-sm leading-relaxed text-ink-500 sm:mt-2 sm:block">
                    {skill.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
