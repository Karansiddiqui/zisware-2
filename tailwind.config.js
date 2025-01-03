/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebarColor: {
          DEFAULT: "#252b36",
          hover: "#454b54",
          header: "#212731",
          headerIcon: "#303741",
        },
        textColor: "#1f2937",
        borderColor: "#D1D5DB",
        upgradeCardColor: "rgb(36, 114, 151)",
      },
      boxShadow: {
        DEFAULT: "0px 1px 3px rgba(0, 0, 0, 0.125)",
        sm: "0 1px 2px rgba(0, 0, 0, 0.1)",
        lg: "0 6px 12px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};

// - -primary-rgb: 12, 131, 255;
// - -secondary-rgb: 36, 114, 151;
