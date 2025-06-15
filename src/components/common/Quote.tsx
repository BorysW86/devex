import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

interface QuoteProps {
  text: string;
  author?: string;
  source?: string;
  className?: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author, source, className = '' }) => {
  return (
    <div className={`relative bg-gray-50 dark:bg-gray-800 rounded-lg p-8 ${className}`}>
      <QuoteIcon className="absolute top-4 left-4 h-8 w-8 text-gray-300 dark:text-gray-600" />
      <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed pl-12">
        "{text}"
      </blockquote>
      {(author || source) && (
        <footer className="mt-4 pl-12">
          <cite className="text-sm text-gray-600 dark:text-gray-400 not-italic">
            {author && <span className="font-medium">— {author}</span>}
            {source && <span className="ml-2">({source})</span>}
          </cite>
        </footer>
      )}
    </div>
  );
};

export default Quote;