import React from 'react';
import { ExternalLink, Clock, Tag, Star } from 'lucide-react';
import { ResourceItem } from '../../types';

interface ResourceCardProps extends ResourceItem {
  onClick?: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  source,
  tags,
  imageUrl,
  link,
  category,
  difficulty,
  readTime,
  onClick
}) => {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
    intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
    advanced: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
  };

  const categoryIcons = {
    tools: '🛠️',
    articles: '📄',
    videos: '🎥',
    books: '📚',
    courses: '🎓'
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-700 dark:to-slate-600">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            {categoryIcons[category] || '📋'}
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-white/90 dark:bg-slate-800/90 text-gray-700 dark:text-gray-300 rounded-lg backdrop-blur-sm">
            {categoryIcons[category]} {category}
          </span>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-lg ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6" onClick={handleClick}>
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              by {source}
            </p>
          </div>
          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2" />
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
          {readTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3" />
            <span>4.5</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            >
              <Tag className="h-2.5 w-2.5 mr-1" />
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
              +{tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;