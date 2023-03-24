type ResumeItemHeaderProps = {
  experience: string;
  duration: string;
};

export default function ResumeItemHeader({
  experience,
  duration
}: ResumeItemHeaderProps) {
  return (
    <div role="button">
      <i className="resume-icon fa-solid fa-plus" />
      <span className="resume-content">
        <div className="resume-experience">{experience}</div>
        <div className="resume-duration">{duration}</div>
      </span>
    </div>
  );
}
