import IconLink from 'components/IconLink';
import type { IconLinkProps } from 'components/IconLink';
import icons from 'icons.json';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-icons flex justify-around">
        {icons.map((icon: IconLinkProps) => (
          <IconLink {...icon} />
        ))}
      </div>
    </div>
  );
}
