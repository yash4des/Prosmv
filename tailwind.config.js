module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        "gray-300": "var(--gray-300)",
        "gray-50": "var(--gray-50)",
        "gray-500": "var(--gray-500)",
        "gray-700": "var(--gray-700)",
        "gray-800": "var(--gray-800)",
        "gray-900": "var(--gray-900)",
        "green-100": "var(--green-100)",
        "green-500": "var(--green-500)",
        "green-800": "var(--green-800)",
        "red-500": "var(--red-500)",
        white: "var(--white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "leading-none-text-2xl-font-bold":
          "var(--leading-none-text-2xl-font-bold-font-family)",
        "leading-none-text-3xl-font-bold":
          "var(--leading-none-text-3xl-font-bold-font-family)",
        "leading-none-text-base-font-normal":
          "var(--leading-none-text-base-font-normal-font-family)",
        "leading-none-text-sm-font-medium":
          "var(--leading-none-text-sm-font-medium-font-family)",
        "leading-none-text-sm-font-normal":
          "var(--leading-none-text-sm-font-normal-font-family)",
        "leading-none-text-xl-font-bold":
          "var(--leading-none-text-xl-font-bold-font-family)",
        "leading-none-text-xs-font-medium":
          "var(--leading-none-text-xs-font-medium-font-family)",
        "leading-tight-text-base-font-medium":
          "var(--leading-tight-text-base-font-medium-font-family)",
        "leading-tight-text-sm-font-normal":
          "var(--leading-tight-text-sm-font-normal-font-family)",
        "leading-tight-text-sm-font-semibold":
          "var(--leading-tight-text-sm-font-semibold-font-family)",
        "leading-tight-text-xl-font-bold":
          "var(--leading-tight-text-xl-font-bold-font-family)",
        "text-2xl-font-bold": "var(--text-2xl-font-bold-font-family)",
        "text-base-font-medium": "var(--text-base-font-medium-font-family)",
        "text-base-font-normal": "var(--text-base-font-normal-font-family)",
        "text-lg-font-semibold": "var(--text-lg-font-semibold-font-family)",
        "text-sm-font-medium": "var(--text-sm-font-medium-font-family)",
        "text-sm-font-normal": "var(--text-sm-font-normal-font-family)",
        "text-sm-font-semibold": "var(--text-sm-font-semibold-font-family)",
        "text-xs-font-medium": "var(--text-xs-font-medium-font-family)",
        "text-xs-font-normal": "var(--text-xs-font-normal-font-family)",
        "underline-text-xs-font-medium":
          "var(--underline-text-xs-font-medium-font-family)",
        "uppercase-text-sm-font-semibold":
          "var(--uppercase-text-sm-font-semibold-font-family)",
        "uppercase-text-xs-font-semibold":
          "var(--uppercase-text-xs-font-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        shadow: "var(--shadow)",
        "shadow-lg": "var(--shadow-lg)",
        "shadow-sm": "var(--shadow-sm)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
