import { Component } from "react"

class Contact extends Component {
  render() {
    return <div className="contact">
      <p> Connect With Me </p>
      <div className="contact-icons">
        <a
          className="icon-link"
          href="https://github.com/johnle192"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon fa-brands fa-github fa-lg" />
        </a>
        <a
          className="icon-link"
          href="https://www.instagram.com/johnle192/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon fa-brands fa-instagram fa-lg" />
        </a>
        <a
          className="icon-link"
          href="https://www.linkedin.com/in/john-le-3bb9bb93/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon fa-brands fa-linkedin fa-lg" />
        </a>
        <a
          className="icon-link"
          href="mailto:john.le192@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon fa-solid fa-envelope fa-lg" />
        </a>
      </div>
    </div>
  };
}

export default Contact;