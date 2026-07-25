import React from 'react';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';

interface AuthorBioProps {
  name?: string;
  role?: string;
  bio?: string;
  linkedinUrl?: string;
  imageUrl?: string;
}

export const AuthorBio: React.FC<AuthorBioProps> = ({
  name = "SpaceCapture Engineering Team",
  role = "Construction Technology Engineers",
  bio = "The SpaceCapture team consists of civil engineers, software architects, and construction veterans dedicated to digitizing the field. We write about construction technology, efficiency, and the future of work.",
  linkedinUrl = "https://www.linkedin.com/company/spaceai-capture/",
  imageUrl = "/images/avatar-placeholder.jpg" // Ensure you have a placeholder or use a generic icon if this missing
}) => {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 my-12 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
      <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-white shadow-md">
         {/* Using a fallback if image is missing is good practice, but for next/image strictly need src */}
         <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-2xl">
            {name.charAt(0)}
         </div>
      </div>
      
      <div className="flex-1">
        <h4 className="text-lg font-bold text-slate-900 mb-1">
            About the Author: {name}
        </h4>
        <p className="text-blue-600 text-sm font-medium mb-3">{role}</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {bio}
        </p>
        
        {linkedinUrl && (
            <a 
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0077b5] transition-colors text-sm font-semibold"
            >
                <Linkedin className="w-4 h-4" /> Connect on LinkedIn
            </a>
        )}
      </div>
    </div>
  );
};
