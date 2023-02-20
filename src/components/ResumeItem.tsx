import { Component } from "react"
import Collapsible from "react-collapsible"
import ResumeItemHeader from "components/ResumeItemHeader"

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
        trigger={<ResumeItemHeader experience={experience} duration={duration}/>}
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