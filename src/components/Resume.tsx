import ResumeItem from 'components/ResumeItem';
import type { ResumeItemProps } from 'components/ResumeItem';
import resumeItems from 'resume.json';

export default function Resume() {
  return (
    <div className="resume-container">
      <p> Resume </p>
      {resumeItems.map((resumeItem: ResumeItemProps) => (
        <ResumeItem {...resumeItem} />
      ))}
    </div>
  );
}
