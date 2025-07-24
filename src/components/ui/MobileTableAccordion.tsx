'use client';

import { useState, useEffect } from 'react';

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export default function MobileTableAccordion({ children, className = '' }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Add click handlers to accordion headers
    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach((header, index) => {
      const handleClick = () => {
        const content = header.nextElementSibling as HTMLElement;
        const isOpen = openItems.has(index);
        
        if (isOpen) {
          setOpenItems(prev => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
          });
          content.style.display = 'none';
        } else {
          setOpenItems(prev => new Set(prev).add(index));
          content.style.display = 'block';
        }
      };
      
      header.addEventListener('click', handleClick);
      
      // Cleanup
      return () => {
        header.removeEventListener('click', handleClick);
      };
    });
  }, [openItems]);

  return (
    <div className={`mobile-table-accordion ${className}`}>
      {children}
    </div>
  );
}

// Hook to make tables mobile-responsive
export function useMobileTable() {
  useEffect(() => {
    const addDataLabels = () => {
      const tables = document.querySelectorAll('.prose table');
      
      tables.forEach(table => {
        const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent?.trim() || '');
        
        table.querySelectorAll('tbody tr').forEach(row => {
          const cells = row.querySelectorAll('td');
          cells.forEach((cell, index) => {
            if (headers[index]) {
              cell.setAttribute('data-label', headers[index]);
            }
          });
        });
      });
    };

    // Add data labels when component mounts
    addDataLabels();
    
    // Re-add data labels if content changes
    const observer = new MutationObserver(addDataLabels);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);
}
