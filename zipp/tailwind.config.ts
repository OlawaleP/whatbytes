import type { Config } from 'tailwindcss';

const config: Config = {
        content: [
          "./app/**/*.{js,ts,jsx,tsx}",
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
        
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {
            colors: {
              primary: "#4F46E5",
              secondary: "#10B981",
              dark: "#1F2937",
              light: "#F9FAFB",
              textPrimary: "#000000"
            },
          },
        },
        plugins: [],
};

export default config;