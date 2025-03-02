import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoiding the inability to read standard fonts
  serverExternalPackages: ["pdfkit"],
};

export default nextConfig;
