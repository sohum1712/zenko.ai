import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
        colors: {
          border: "var(--border)",
          input: "var(--input)",
          ring: "var(--ring)",
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: {
            DEFAULT: "var(--primary)",
            foreground: "var(--primary-foreground)",
            light: "var(--primary-light)",
            dark: "var(--primary-dark)",
          },
          secondary: {
            DEFAULT: "var(--secondary)",
            foreground: "var(--secondary-foreground)",
            light: "var(--secondary-light)",
            dark: "var(--secondary-dark)",
          },
          accent: {
            DEFAULT: "var(--accent)",
            foreground: "var(--accent-foreground)",
            light: "var(--accent-light)",
            dark: "var(--accent-dark)",
          },
          destructive: {
            DEFAULT: "var(--destructive)",
            foreground: "var(--destructive-foreground)",
          },
          muted: {
            DEFAULT: "var(--muted)",
            foreground: "var(--muted-foreground)",
          },
          popover: {
            DEFAULT: "var(--popover)",
            foreground: "var(--popover-foreground)",
          },
          card: {
            DEFAULT: "var(--card)",
            foreground: "var(--card-foreground)",
          },
          success: {
            DEFAULT: '#38A169',
            light: '#68D391',
            dark: '#2F855A',
          },
          warning: {
            DEFAULT: '#DD6B20',
            light: '#F6AD55',
            dark: '#C05621',
          },
          error: {
            DEFAULT: '#E53E3E',
            light: '#FC8181',
            dark: '#C53030',
          },
          chart: {
            "1": "var(--chart-1)",
            "2": "var(--chart-2)",
            "3": "var(--chart-3)",
            "4": "var(--chart-4)",
            "5": "var(--chart-5)",
          },
          sidebar: {
            DEFAULT: "var(--sidebar)",
            foreground: "var(--sidebar-foreground)",
            primary: "var(--sidebar-primary)",
            "primary-foreground": "var(--sidebar-primary-foreground)",
            accent: "var(--sidebar-accent)",
            "accent-foreground": "var(--sidebar-accent-foreground)",
            border: "var(--sidebar-border)",
            ring: "var(--sidebar-ring)",
          },
        },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Fira Code', 'Menlo', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      opacity: {
        '15': '0.15',
        '85': '0.85',
      },
      scale: {
        '102': '1.02',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevate': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'scroll-horizontal': 'scroll-horizontal 20s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'slide-right': 'slide-right 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
        'neon-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px var(--zenko-neon-green)' },
          '50%': { boxShadow: '0 0 40px var(--zenko-neon-green), 0 0 60px var(--zenko-neon-green)' },
        },
        'scroll-horizontal': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'glow-pulse': {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.2)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
} satisfies Config;
