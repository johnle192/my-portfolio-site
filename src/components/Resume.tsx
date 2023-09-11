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
      <div className="flex space-x-4 on-primary-container-text">
        <div
          className={`hover:text-primary cursor-pointer headline-small ${
            resumeSection === 'experience' && 'primary-text'
          }`}
          onClick={() => setResumeSection('experience')}
        >
          Experience
        </div>
        <div
          className={`hover:text-primary cursor-pointer headline-small ${
            resumeSection === 'skills' && 'primary-text'
          }`}
          onClick={() => setResumeSection('skills')}
        >
          Skills
        </div>
        <div
          className={`hover:text-primary cursor-pointer headline-small ${
            resumeSection === 'education' && 'primary-text'
          }`}
          onClick={() => setResumeSection('education')}
        >
          Education
        </div>
      </div>
      {resumeSection === 'experience' &&
        resumeItems.experience.map((resumeItem: ResumeItemProps) => (
          <ResumeItem {...resumeItem} />
        ))}

      {resumeSection === 'skills' && (
        <div className="pl-8">
          <ul className="resume-skills">
            {resumeItems.skills.map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
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
  );
}
