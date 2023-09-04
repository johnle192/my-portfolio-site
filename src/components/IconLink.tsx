export interface IconLinkProps {
  link: string;
  iconName: string;
}

export default function IconLink({ link, iconName }: IconLinkProps) {
  return (
    <a
      className="icon-link m-2 hover:text-white"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`icon ${iconName} fa-m`} />
    </a>
  );
}
