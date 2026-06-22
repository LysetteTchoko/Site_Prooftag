import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://site-prooftag.vercel.app";
  const routes = [
    "",
    "/a-propos",
    "/solutions",
    "/processus",
    "/technologie",
    "/contact",
    "/reglementation",
    "/mentions-legales",
    "/politique-de-confidentialite"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));
}
