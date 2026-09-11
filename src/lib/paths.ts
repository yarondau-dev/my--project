export const basePath = "/my--project";
export function assetPath(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  // strip accidental double prefix
  if (p.startsWith(`${basePath}/`)) return p;
  return `${basePath}${p}`;
}
