import ResumeItem from 'components/ResumeItem';
import type { ResumeItemProps } from 'components/ResumeItem';
import resumeItems from 'resume.json';
import { useState } from 'react';

export default function Resume() {
  const [resumeSection, setResumeSection] = useState<string>('experience');

  return (
    <div className="resume-container m-20 max-w-3xl">
      <h2 className="headline-large"> Resume </h2>
      <div className="flex space-x-4">
        <div
          className="hover:text-white cursor-pointer"
          onClick={() => setResumeSection('experience')}
        >
          Experience
        </div>
        <div
          className="hover:text-white cursor-pointer"
          onClick={() => setResumeSection('skils')}
        >
          Skills
        </div>
        <div
          className="hover:text-white cursor-pointer"
          onClick={() => setResumeSection('education')}
        >
          Education
        </div>
      </div>
      {resumeSection === 'experience' &&
        resumeItems.map((resumeItem: ResumeItemProps) => (
          <ResumeItem {...resumeItem} />
        ))}
    </div>
  );
}
