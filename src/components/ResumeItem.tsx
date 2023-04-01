import Collapsible from 'react-collapsible';
import ResumeItemHeader from 'components/ResumeItemHeader';

export type ResumeItemProps = {
  id: string;
  experience: string;
  duration: string;
  descriptions: string[];
};

export default function ResumeItem({
  id,
  experience,
  duration,
  descriptions
}: ResumeItemProps) {
  return (
    <div className="resume-item primary-container" key={id}>
      <Collapsible
        trigger={
          <ResumeItemHeader experience={experience} duration={duration} />
        }
      >
        <div className="resume-description">
          <ul>
            {descriptions.map((description: string, index) => (
              <li key={`${id}.${index}`}> {description} </li>
            ))}
          </ul>
        </div>
      </Collapsible>
    </div>
  );
}
