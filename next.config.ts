import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Permissions-Policy",
            value:
              "private-state-token-redemption=(), private-state-token-issuance=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
