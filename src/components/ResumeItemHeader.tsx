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
        <div className="resume-experience headline-large">{experience}</div>
        <div className="resume-duration headline-medium">{duration}</div>
      </span>
    </div>
  );
}
