import { skillCategories, softSkills } from "../data/resumeData";

export default function TechStack() {
  return (
    <section id="skills" className="bg-navy-50/60 py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-600">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Tech Stack &amp; Skills
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy-800">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-600">
            Soft Skills
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {softSkills.map((skill) => (
              <div key={skill.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-ink-900">{skill.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
