import { Component } from "react";

type ResumeItemHeaderProps = {
  experience: string,
  duration: string
}

class ResumeItemHeader extends Component<ResumeItemHeaderProps> {
  render() {
    const { experience, duration } = this.props

    return <div role="button">
      <i className="resume-icon fa-solid fa-plus" />
      <span className="resume-content">
        <div className="resume-experience">{experience}</div>
        <div className="resume-duration">{duration}</div>
      </span>
    </div>
  }
}

export default ResumeItemHeader