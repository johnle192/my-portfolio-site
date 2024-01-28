import ResumeItem from 'components/ResumeItem';
import type { ResumeItemProps } from 'components/ResumeItem';
import resumeItems from 'resume.json';
import React, { useState } from 'react';

export default function Resume() {
  const [resumeSection, setResumeSection] = useState<string>('experience');
  const { name, duration, major } = resumeItems.education;

  return (
    <div className="resume-container m-20 max-w-3xl">
      <h2 className="headline-large"> Resume </h2>
      <div className="flex space-x-4 text-primary">
        <button
          className={`hover:bg-surface-variant body-large font-bold py-2 px-4 rounded ${
            resumeSection === 'experience'
              ? 'bg-surface-variant'
              : 'bg-transparent '
          }`}
          onClick={() => setResumeSection('experience')}
        >
          Experience
        </button>
        <button
          className={`hover:bg-surface-variant body-large font-bold py-2 px-4 rounded ${
            resumeSection === 'skills'
              ? 'bg-surface-variant'
              : 'bg-transparent '
          }`}
          onClick={() => setResumeSection('skills')}
        >
          Skills
        </button>
        <button
          className={`hover:bg-surface-variant body-large font-bold py-2 px-4 rounded ${
            resumeSection === 'education'
              ? 'bg-surface-variant'
              : 'bg-transparent '
          }`}
          onClick={() => setResumeSection('education')}
        >
          Education
        </button>
      </div>
      <div className="py-2">
        {resumeSection === 'experience' &&
          resumeItems.experience.map((resumeItem: ResumeItemProps) => (
            <ResumeItem {...resumeItem} />
          ))}

        {resumeSection === 'skills' && (
          <div className="">
            {resumeItems.skills.map(({ focus, skills }) => (
              <div className={`resume-skills-${focus} py-2`}>
                <div className={`resume-skills-${focus}-name headline-small`}>
                  {focus}
                </div>
                <ul className="resume-skills list-disc columns-2 py-0 px-4 m-0">
                  {skills.map((skill: string) => (
                    <li key={skill} className="leading-relaxed">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {resumeSection === 'education' && (
          <div className="resume-education">
            <div className="resume-education-name headline-small">{name}</div>
            <div className="resume-education-duration body-medium">
              {duration}
            </div>
            <div className="resume-education-major body-medium">{major}</div>
          </div>
        )}
      </div>
    </div>
  );
}
