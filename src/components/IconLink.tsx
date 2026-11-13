export interface IconLinkProps {
  link: string;
  label: string;
  iconName: string;
}

export default function IconLink({ link, label, iconName }: IconLinkProps) {
  return (
    <a
      className="icon-link p-2 text-on-surface-variant hover:text-primary"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <i className={`icon ${iconName} fa-m`} aria-hidden="true" />
    </a>
  );
}
