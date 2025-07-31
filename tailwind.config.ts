import type { Config } from 'tailwindcss'
import tailwindcssAnimated from 'tailwindcss-animated'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        mobileScreen: 'calc(100dvh - 64px)',
      },
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(0, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(0, 0) scale(1)' },
        },
        overlayShow2: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow2: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        layer1: 'layer1 3.5s ease-in',
        layer1Objects: 'layer1 2.5s ease-in',
        layer2: 'layer2 6s ease-in',
        layer2image: 'layer2image 5s ease-in',

        'fade-in': 'fade-in 1s ease-in-out',
        'fade-out': 'fade-out 1.5s ease-in-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        overlayShow: 'overlayShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow2: 'overlayShow2 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow2: 'contentShow2 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [tailwindcssAnimated],
} satisfies Config
