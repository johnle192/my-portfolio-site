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
  const borderClass = isOpen
    ? 'border-b border-on-primary-container border-solid'
    : '';

  return (
    <div className="resume-item flex" key={id}>
      <div
        role="button"
        className=""
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <div
          className={`m-4 text-center align-middle icon ${iconRotationClass}`}
        >
          <i className="resume-icon fa-solid fa-plus" />
        </div>
      </div>
      <div>
        <div className={`resume-content py-2 ${borderClass}`}>
          <div className="resume-experience headline-small">{experience}</div>
          <div className="resume-duration body-medium">{duration}</div>
        </div>
        {isOpen && (
          <div className="resume-description ml-4 my-2">
            <ul className="resume-description-items list-disc p-0 m-0">
              {descriptions.map((description: string, index) => (
                <li key={`${id}.${index}`} className="leading-relaxed">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
