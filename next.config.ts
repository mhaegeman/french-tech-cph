import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// GitHub Pages serves project sites under /<repo>/. The deploy workflow sets
// BASE_PATH from actions/configure-pages. For a custom domain, leave it unset.
const basePath = process.env.BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "v5.airtableusercontent.com" },
      { protocol: "https", hostname: "dl.airtable.com" },
    ],
  },
};

export default withNextIntl(nextConfig);
