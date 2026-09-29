export default function sitemap() {
  const base = "https://nabiladib.vercel.app";

  const routes = [
    { url: base, priority: 1 },
    { url: `${base}/resume`, priority: 0.9 },
    { url: `${base}/projects`, priority: 0.9 },
    { url: `${base}/solutions`, priority: 0.8 },
    { url: `${base}/contacts`, priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
