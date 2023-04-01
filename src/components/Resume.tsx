import ResumeItem from 'components/ResumeItem';
import type { ResumeItemProps } from 'components/ResumeItem';
import resumeItems from 'resume.json';

export default function Resume() {
  return (
    <div className="resume-container m-20">
      <h2 className="headline-large"> Resume </h2>
      {resumeItems.map((resumeItem: ResumeItemProps) => (
        <ResumeItem {...resumeItem} />
      ))}
    </div>
  );
}
