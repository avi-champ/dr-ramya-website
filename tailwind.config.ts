import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',      // Small mobile
      'sm': '640px',      // Mobile landscape / Large mobile
      'md': '768px',      // Tablet portrait
      'lg': '1024px',     // Tablet landscape / Small laptop
      'xl': '1280px',     // Laptop / Desktop
      '2xl': '1536px',    // Large desktop
      '3xl': '1920px',    // Ultra-wide
      // Custom breakpoints for specific devices
      'mobile': {'max': '767px'},      // Mobile only
      'tablet': {'min': '768px', 'max': '1023px'},  // Tablet only
      'laptop': {'min': '1024px', 'max': '1279px'}, // Laptop only
      'desktop': {'min': '1280px'},     // Desktop and above
    },
    extend: {
      colors: {
        'dark': {
          900: '#0a0a0b',
          800: '#1a1a1d',
          700: '#2d2d30',
          600: '#404043',
        },
        'accent-gold': '#d4af37',
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Responsive font sizes
        'mobile-h1': ['1.875rem', { lineHeight: '2.25rem' }],  // 3xl on mobile
        'mobile-h2': ['1.5rem', { lineHeight: '2rem' }],       // 2xl on mobile
        'tablet-h1': ['2.25rem', { lineHeight: '2.5rem' }],    // 4xl on tablet
        'tablet-h2': ['1.875rem', { lineHeight: '2.25rem' }],  // 3xl on tablet
        'desktop-h1': ['3rem', { lineHeight: '1' }],           // 5xl on desktop
        'desktop-h2': ['2.25rem', { lineHeight: '2.5rem' }],   // 4xl on desktop
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
        '144': '36rem',
        // Mobile-specific spacing
        'mobile-section': '3rem',  // 48px
        'tablet-section': '4rem',  // 64px
        'desktop-section': '5rem', // 80px
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      maxWidth: {
        'mobile': '375px',    // iPhone SE
        'mobile-lg': '414px', // iPhone Pro Max
        'tablet': '768px',    // iPad
        'tablet-lg': '1024px', // iPad Pro
        'laptop': '1366px',   // Common laptop
        'desktop': '1920px',  // Full HD
      },
      minHeight: {
        'mobile-screen': '100vh',
        'mobile-content': 'calc(100vh - 60px)', // Accounting for mobile header
        'tablet-content': 'calc(100vh - 80px)',  // Accounting for tablet header
        'desktop-content': 'calc(100vh - 100px)', // Accounting for desktop header
      }
    },
  },
  plugins: [],
}

export default config