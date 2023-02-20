import { Component } from "react"
import Collapsible from "react-collapsible"

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
      <Collapsible
        trigger={
          <div role="button">
            <i className="resume-icon fa-solid fa-plus" />
            <span className="resume-content">
              <div className="resume-experience">{experience}</div>
              <div className="resume-duration">{duration}</div>
            </span>
          </div>
        }
      >
        <div className="resume-description">
          <ul>
            {
              descriptions.map(
                (description: string, index) => <li key={`${id}.${index}`}> {description} </li>
              )
            }
          </ul>
        </div>
      </Collapsible>
    </div> 
  };
}

export default ResumeItem;