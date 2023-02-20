import { Component } from "react"

export type ResumeItemProps = {
  id: string,
  experience: string,
  duration: string,
  descriptions: string[]
}

class ResumeItem extends Component<ResumeItemProps, {}> {
  render() {
    const { id, experience, duration, descriptions } = this.props
    
    return <div className="resume-item" key={id}>
      <div role="button">
        <div className="resume-experience">{experience}</div>
        <div className="resume-duration">{duration}</div>
      </div>
      <ul>
        {
          descriptions.map(
            (description: string, index) => <li key={`${id}.${index}`}> {description} </li>
          )
        }
      </ul>
    </div> 
  };
}

export default ResumeItem;