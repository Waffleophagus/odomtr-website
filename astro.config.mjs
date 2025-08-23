import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://waffleophagus.github.io',
  base: '/odomtr-website',
  integrations: [tailwind(), react()],
});
