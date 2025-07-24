'use client';

import { useEffect } from 'react';

interface SEOAnalyticsProps {
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  trackPageViews?: boolean;
}

export default function SEOAnalytics({
  googleAnalyticsId,
  googleTagManagerId,
  trackPageViews = true
}: SEOAnalyticsProps) {
  useEffect(() => {
    // Google Analytics 4
    if (googleAnalyticsId && typeof window !== 'undefined') {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleAnalyticsId}', {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {
            'dimension1': 'medical_specialty',
            'dimension2': 'service_area'
          }
        });
        
        // Track medical practice specific events
        gtag('config', '${googleAnalyticsId}', {
          'medical_specialty': 'Pediatrics',
          'service_area': 'Perumbakkam, Chennai',
          'business_type': 'Medical Practice'
        });
      `;
      document.head.appendChild(script2);
    }

    // Google Tag Manager
    if (googleTagManagerId && typeof window !== 'undefined') {
      const script3 = document.createElement('script');
      script3.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${googleTagManagerId}');
      `;
      document.head.appendChild(script3);

      // GTM noscript fallback
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;
      document.body.appendChild(noscript);
    }

    // Enhanced page view tracking for medical practice
    if (trackPageViews && typeof window !== 'undefined') {
      const trackPageView = () => {
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
            medical_specialty: 'Pediatrics',
            business_location: 'Perumbakkam, Chennai',
            content_group1: 'Medical Practice',
            content_group2: 'Pediatrician Website'
          });
        }
      };

      // Track initial page view
      trackPageView();

      // Track navigation changes
      const handleRouteChange = () => {
        setTimeout(trackPageView, 100);
      };

      window.addEventListener('popstate', handleRouteChange);
      
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, [googleAnalyticsId, googleTagManagerId, trackPageViews]);

  useEffect(() => {
    // Track medical practice specific interactions
    if (typeof window !== 'undefined' && window.gtag) {
      // Track appointment booking clicks
      const trackAppointmentClick = (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.textContent?.includes('Appointment') || target.textContent?.includes('Book')) {
          window.gtag('event', 'appointment_click', {
            event_category: 'Medical Practice',
            event_label: 'Book Appointment Button',
            value: 1
          });
        }
      };

      // Track phone number clicks
      const trackPhoneClick = (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.getAttribute('href')?.includes('tel:')) {
          window.gtag('event', 'phone_click', {
            event_category: 'Medical Practice',
            event_label: 'Phone Number',
            value: 1
          });
        }
      };

      // Track service page visits
      const trackServiceView = () => {
        if (window.location.pathname.includes('/services/')) {
          const serviceName = window.location.pathname.split('/services/')[1];
          window.gtag('event', 'service_view', {
            event_category: 'Medical Services',
            event_label: serviceName,
            value: 1
          });
        }
      };

      // Track health article views
      const trackArticleView = () => {
        if (window.location.pathname.includes('/health-articles/')) {
          const articleName = window.location.pathname.split('/health-articles/')[1];
          window.gtag('event', 'article_view', {
            event_category: 'Health Education',
            event_label: articleName,
            value: 1
          });
        }
      };

      document.addEventListener('click', trackAppointmentClick);
      document.addEventListener('click', trackPhoneClick);
      
      trackServiceView();
      trackArticleView();

      return () => {
        document.removeEventListener('click', trackAppointmentClick);
        document.removeEventListener('click', trackPhoneClick);
      };
    }
  }, []);

  return null;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: Record<string, unknown>[];
  }
}
