type ResumeItemHeaderProps = {
  experience: string;
  duration: string;
};

export default function ResumeItemHeader({
  experience,
  duration
}: ResumeItemHeaderProps) {
  return (
    <div role="button" className="flex flex-row">
      <div className="m-4 text-center align-middle">
        <i className="resume-icon fa-solid fa-plus" />
      </div>
      <div className="resume-content">
        <div className="resume-experience headline-small">{experience}</div>
        <div className="resume-duration body-medium">{duration}</div>
      </div>
    </div>
  );
}
