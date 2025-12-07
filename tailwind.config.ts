import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium Color Palette - Black, Orange, Light Gray, White
        black: {
          DEFAULT: '#000000',
          soft: '#0A0A0A',
          light: '#1A1A1A',
        },
        orange: {
          DEFAULT: '#FF6B35',
          dark: '#E55A2B',
          light: '#FF8C5A',
          vibrant: '#FF5722',
        },
        gray: {
          light: '#E5E5E5',
          medium: '#D3D3D3',
          dark: '#B0B0B0',
        },
        white: {
          DEFAULT: '#FFFFFF',
          soft: '#FAFAFA',
        },
        // Semantic Colors
        primary: {
          DEFAULT: '#000000',
          dark: '#0A0A0A',
          light: '#1A1A1A',
        },
        secondary: {
          DEFAULT: '#FF6B35',
          dark: '#E55A2B',
          light: '#FF8C5A',
        },
        accent: {
          DEFAULT: '#FF5722',
          dark: '#E55A2B',
          light: '#FF8C5A',
        },
        neutral: {
          DEFAULT: '#E5E5E5',
          dark: '#B0B0B0',
          medium: '#D3D3D3',
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#FAFAFA',
        },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'zoom-in': 'zoomIn 0.6s ease-out',
        'zoom-out': 'zoomOut 0.6s ease-out',
        'float': 'floating 6s ease-in-out infinite',
        'float-slow': 'floating 8s ease-in-out infinite',
        'float-fast': 'floating 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { opacity: '0', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(2deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'premium-lg': '0 30px 80px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'glow': '0 0 40px rgba(13, 148, 136, 0.3)',
        'glow-blue': '0 0 40px rgba(30, 58, 95, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config

