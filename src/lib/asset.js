// Resolve a path that lives in /public against the app's base URL.
//
// On GitHub Pages the site is served from /chris-birthday/, so a bare
// "/photos/x.jpg" would point at the domain root and 404. Vite exposes the
// base as import.meta.env.BASE_URL ("/" locally, "/chris-birthday/" on Pages);
// prepend it. External URLs and data: URIs are left untouched.
//
// Use this EVERY time you render a src that comes from the data files.
export function asset(path) {
  if (!path) return path
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}/${path.replace(/^\//, '')}`
}
