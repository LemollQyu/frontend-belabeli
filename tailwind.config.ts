import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        green: {
          50: "#EEFBF8", //bg-app
          100: "#DEF7F0", //warna components tombol, inputs
          200: "#B9EFDF",
          300: "#97E7D1",
          400: "#72DFC0",
          500: "#51D7B1",
          600: "#2CBF95",
          700: "#219171",
          800: "#165F4B",
          900: "#0B3227",
          950: "#061913",
        },
      },
    },
  },
};
