import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'Roboto', 'Arial', 'sans-serif'],
				'body': ['Inter', 'Roboto', 'Arial', 'sans-serif'],
				'heading': ['Roboto', 'Inter', 'Arial', 'sans-serif'],
			},
			fontSize: {
				'xs': ['12px', { lineHeight: '1.5' }],
				'sm': ['14px', { lineHeight: '1.5' }],
				'base': ['16px', { lineHeight: '1.6' }], // WCAG compliant base size
				'lg': ['18px', { lineHeight: '1.6' }],
				'xl': ['20px', { lineHeight: '1.5' }],
				'2xl': ['24px', { lineHeight: '1.4' }],
				'3xl': ['30px', { lineHeight: '1.3' }],
				'4xl': ['36px', { lineHeight: '1.2' }],
				'5xl': ['48px', { lineHeight: '1.1' }],
				'6xl': ['60px', { lineHeight: '1.0' }],
				'7xl': ['72px', { lineHeight: '1.0' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Accessible military theme colors
				'military-gold': 'hsl(var(--military-gold))',
				'military-green': 'hsl(var(--military-green))',
				'military-bronze': 'hsl(var(--military-bronze))',
				'whatsapp-green': 'hsl(var(--whatsapp-green))',
				'elite-gold': 'hsl(var(--elite-gold))',
				'combat-green': 'hsl(var(--combat-green))',
				'tactical-orange': 'hsl(var(--tactical-orange))',
				'stealth-gray': 'hsl(var(--stealth-gray))',
				'night-ops': 'hsl(var(--night-ops))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;