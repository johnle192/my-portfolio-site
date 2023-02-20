import { Component } from "react"

export type IconLinkProps = {
  link: string,
  iconName: string
}

class IconLink extends Component<IconLinkProps> {
  render() {
    const { link, iconName } = this.props;

    return <a className="icon-link" href={link} target="_blank" rel="noopener noreferrer">
      <i className={`icon ${iconName} fa-lg`} />
    </a>
  }
}

export default IconLink;