'use client';

import { useState, useRef, useEffect } from 'react';
import { Share2, Mail, MessageCircle, Copy, ChevronDown } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  description: string;
  url: string;
}

export default function ShareButton({ title, description, url }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const shareText = `${title}\n\n${description}\n\nRead more: ${url}`;
  const encodedText = encodeURIComponent(shareText);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: () => window.open(`https://wa.me/?text=${encodedText}`, '_blank'),
      color: 'text-green-600 bg-green-50 hover:bg-green-100'
    },
    {
      name: 'Gmail',
      icon: Mail,
      action: () => window.open(`mailto:?subject=${encodedTitle}&body=${encodedText}`, '_blank'),
      color: 'text-red-600 bg-red-50 hover:bg-red-100'
    },
    {
      name: copied ? 'Copied!' : 'Copy Link',
      icon: Copy,
      action: handleCopyLink,
      color: copied ? 'text-green-600 bg-green-50' : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:scale-105 active:scale-95"
      >
        <div className="relative">
          <Share2 className="w-4 h-4 transition-transform group-hover:rotate-12" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
        <span>Share Article</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
          {shareOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <button
                key={option.name}
                onClick={() => {
                  option.action();
                  if (option.name !== 'Copy Link' && !copied) {
                    setIsOpen(false);
                  }
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${option.color}`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span>{option.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
