// src/components/History.tsx
import { experiencesData } from "@/data/experiences";
import { awardsData } from "@/data/awards";

export default function History() {
  return (
    <section className="bg-gray-50 text-black pb-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
        {/* Kolom Experiences */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">Experiences</h2>
          <div className="space-y-8">
            {experiencesData.map((exp, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg">
                  {exp.role} @ {exp.company}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{exp.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Awards */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">Certificate</h2>
          <div className="space-y-8">
            {awardsData.map((award, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg">{award.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{award.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
