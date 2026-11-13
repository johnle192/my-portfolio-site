import React, { useState } from 'react';

export type ResumeItemProps = {
  id: string;
  experience: string;
  duration: string;
  descriptions: string[];
};

export default function ResumeItem({
  id,
  experience,
  duration,
  descriptions
}: ResumeItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const iconRotationClass = isOpen ? 'is-open' : 'is-closed';
  const [role, ...place] = experience.split(' | ');

  return (
    <div className="resume-item py-4 border-b border-outline-variant last:border-b-0">
      <h2 className="resume-experience font-title-large text-title-large">
        <button
          type="button"
          className="flex w-full items-baseline gap-4 text-left"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <span
            aria-hidden="true"
            className={`w-4 shrink-0 text-center text-primary icon ${iconRotationClass}`}
          >
            <i className="resume-icon fa-solid fa-plus" />
          </span>
          <span>{role}</span>
        </button>
      </h2>
      <div className="pl-8">
        <div className="resume-content">
          {place.length > 0 && (
            <div className="font-title-medium text-title-medium text-on-surface-variant">
              {place.join(' | ')}
            </div>
          )}
          <div className="resume-duration mt-1 font-body-medium text-body-medium text-on-surface-variant">
            {duration}
          </div>
        </div>
        {isOpen && (
          <ul className="resume-description-items mt-3 list-disc pl-5 m-0 font-body-medium text-body-medium">
            {descriptions.map((description: string, index) => (
              <li key={`${id}.${index}`} className="leading-relaxed">
                {description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
