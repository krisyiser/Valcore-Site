import { MetadataRoute } from "next";
import { routesData } from "@/lib/routesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://valcore.com";
  
  // Base static paths
  const staticPaths = [
    "",
    "/tecnologia",
    "/implementaciones",
    "/recursos",
    "/nosotros",
    "/demo",
    "/soluciones/crm",
    "/soluciones/erp",
    "/soluciones/pos",
    "/soluciones/business-intelligence",
    "/soluciones/sistemas-especializados",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Dynamic root paths (sub-solutions & industries)
  const dynamicPaths = Object.keys(routesData).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPaths, ...dynamicPaths];
}
