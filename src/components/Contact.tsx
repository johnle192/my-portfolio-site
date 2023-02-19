import { Component } from "react"
import IconLink from "components/IconLink"
import icons from "icons.json"

type Icon = {
  link: string,
  iconName: string
}

class Contact extends Component {
  render() {
    return <div className="contact-container">
      <p> Connect With Me </p>
      <div className="contact-icons">
        {
          icons.map(
            (icon:Icon) => <IconLink link={icon.link} iconName={icon.iconName} />
          )
        }
      </div>
    </div>
  };
}

export default Contact;