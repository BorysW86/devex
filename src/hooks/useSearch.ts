import { useState, useMemo, useCallback } from 'react';
import { SearchFilters, ResourceItem } from '../types';

export const useSearch = (items: ResourceItem[]) => {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    tags: [],
    category: '',
    difficulty: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Text search
      if (filters.query) {
        const searchTerms = filters.query.toLowerCase();
        const searchableText = `${item.title} ${item.description} ${item.tags.join(' ')}`.toLowerCase();
        if (!searchableText.includes(searchTerms)) return false;
      }

      // Category filter
      if (filters.category && item.category !== filters.category) return false;

      // Difficulty filter
      if (filters.difficulty && item.difficulty !== filters.difficulty) return false;

      // Tags filter
      if (filters.tags.length > 0) {
        const hasAllTags = filters.tags.every(tag => 
          item.tags.some(itemTag => itemTag.toLowerCase().includes(tag.toLowerCase()))
        );
        if (!hasAllTags) return false;
      }

      return true;
    });
  }, [items, filters]);

  const updateQuery = useCallback((query: string) => {
    setIsLoading(true);
    // Simulate search delay
    setTimeout(() => {
      setFilters(prev => ({ ...prev, query }));
      setIsLoading(false);
    }, 300);
  }, []);

  const updateFilters = useCallback((newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      query: '',
      tags: [],
      category: '',
      difficulty: ''
    });
  }, []);

  return {
    filters,
    filteredItems,
    isLoading,
    updateQuery,
    updateFilters,
    clearFilters
  };
};