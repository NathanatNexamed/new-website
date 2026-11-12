// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://nexamed.us",
  trailingSlash: "always",
  integrations: [
    sitemap({
      // Thank-you pages are noindex and where conversions fire; keep them out of the sitemap.
      filter: (page) => !page.includes("/thank-you/"),
    }),
  ],
});
