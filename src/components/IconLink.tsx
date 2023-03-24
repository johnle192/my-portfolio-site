export interface IconLinkProps {
  link: string;
  iconName: string;
}

export default function IconLink({ link, iconName }: IconLinkProps) {
  return (
    <a
      className="icon-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`icon ${iconName} fa-lg`} />
    </a>
  );
}
