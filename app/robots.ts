import type { MetadataRoute } from "next";
import { basic } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${basic.url}/sitemap.xml`,
  };
}
