import { Component } from "react"
import IconLink from "./iconLink"

class Contact extends Component {
  render() {
    return <div className="contact">
      <p> Connect With Me </p>
      <div className="contact-icons">
        <IconLink link="https://github.com/johnle192" iconName="fa-brands fa-github" />
        <IconLink link="https://www.instagram.com/johnle192/" iconName="fa-brands fa-instagram" />
        <IconLink link="https://www.linkedin.com/in/john-le-3bb9bb93/" iconName="fa-brands fa-linkedin" />
        <IconLink link="mailto:john.le192@gmail.com" iconName="fa-solid fa-envelope" />
      </div>
    </div>
  };
}

export default Contact;