import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Zenko Brand Colors
        primary: {
          DEFAULT: '#4d8af0',
          light: '#6ba3f5',
          dark: '#3b7ae0',
          contrast: '#ffffff'
        },
        secondary: {
          DEFAULT: '#1a1a2e',
          light: '#2a2a4e',
          dark: '#0f0f1e',
          contrast: '#ffffff'
        },
        accent: {
          DEFAULT: '#e8f4fc',
          light: '#f0f7fc',
          dark: '#d0e8f7',
          contrast: '#1a1a2e'
        },
        neutral: {
          DEFAULT: '#6b7280',
          light: '#9ca3af',
          dark: '#4b5563',
          contrast: '#ffffff'
        },
        
        // Shadcn UI Colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Times New Roman', 'Times', 'serif'],
        mono: ['Fira Code', 'monospace'],
        shrikhand: ['Shrikhand', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'fade-in-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;