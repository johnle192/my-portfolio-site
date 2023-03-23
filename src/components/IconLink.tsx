export type IconLinkProps = {
  link: string,
  iconName: string
}

function IconLink({link, iconName}: IconLinkProps) {
  return (
    <a className="icon-link" href={link} target="_blank" rel="noopener noreferrer">
      <i className={`icon ${iconName} fa-lg`} />
    </a>
  )
}

export default IconLink;