import { Component } from "react"

type IconLinkProps = {
  link: string,
  iconName: string
}

class IconLink extends Component<IconLinkProps, {}> {
  constructor(props: IconLinkProps) {
    super(props);
  }

  render() {
    return <a className="icon-link" href={this.props.link} target="_blank" rel="noopener noreferrer">
      <i className={`icon ${this.props.iconName} fa-lg`} />
    </a>
  };
}

export default IconLink;