import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  linkUrl: string;
}

function ProjectCard({ src, title, description, linkUrl }: Props) {
  return (
    <a
      href={linkUrl}
      target="blank"
      rel="noopener noreferrer"
      className="max-w-[calc(33% -20px)]"
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title} </h1>
          <p className="mt-2 text-gray-300"> {description} </p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
