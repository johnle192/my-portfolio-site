import ResumeItem from 'components/ResumeItem';
import type { ResumeItemProps } from 'components/ResumeItem';
import resumeItems from 'resume.json';
import React, { useState } from 'react';

const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' }
];

export default function Resume() {
  const [resumeSection, setResumeSection] = useState<string>('experience');
  const { name, duration, major } = resumeItems.education;

  return (
    <div className="resume-container">
      <h1 className="font-headline-large text-headline-large font-bold">
        Resume
      </h1>
      <div className="mt-6 flex gap-6 border-b border-outline-variant">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`-mb-px pb-2 border-b-2 font-title-medium text-title-medium ${
              resumeSection === id
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
            onClick={() => setResumeSection(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="pt-2">
        {resumeSection === 'experience' &&
          resumeItems.experience.map((resumeItem: ResumeItemProps) => (
            <ResumeItem key={resumeItem.id} {...resumeItem} />
          ))}

        {resumeSection === 'skills' &&
          resumeItems.skills.map(({ focus, skills }) => (
            <div
              key={focus}
              className={`resume-skills-${focus} py-4 border-b border-outline-variant last:border-b-0`}
            >
              <h2 className="font-title-large text-title-large">{focus}</h2>
              <ul className="resume-skills mt-2 list-disc columns-2 py-0 pl-5 m-0 font-body-medium text-body-medium">
                {skills.map((skill: string) => (
                  <li key={skill} className="leading-relaxed">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        {resumeSection === 'education' && (
          <div className="resume-education py-4">
            <h2 className="resume-education-name font-title-large text-title-large">
              {name}
            </h2>
            <div className="resume-education-major mt-1 font-title-medium text-title-medium text-on-surface-variant">
              {major}
            </div>
            <div className="resume-education-duration mt-1 font-body-medium text-body-medium text-on-surface-variant">
              {duration}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
