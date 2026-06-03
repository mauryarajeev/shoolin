import { useEffect } from 'react';

const SITE_URL = 'https://www.shoolinsecurityservices.com';

// Updates an existing <meta>/<link> in <head> (matched by selector), or creates
// it once if missing. Mutating in place avoids duplicate tags vs. index.html.
const upsert = (selector, create) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

/**
 * Per-page SEO for this client-rendered SPA.
 * - title:        document <title>
 * - description:  <meta name="description">
 * - path:         route path used to build the canonical / og:url (e.g. "/services")
 * - jsonLd:       array of schema.org objects injected as <script type="application/ld+json">
 */
export const useSeo = ({ title, description, path = '', jsonLd = [] }) => {
  // Serialize jsonLd so the effect only re-runs when its content actually changes
  // (page components pass a fresh array literal on every render).
  const jsonLdKey = JSON.stringify(jsonLd);

  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    if (title) {
      document.title = title;
      upsert('meta[property="og:title"]', () => {
        const m = document.createElement('meta');
        m.setAttribute('property', 'og:title');
        return m;
      }).setAttribute('content', title);
    }

    if (description) {
      upsert('meta[name="description"]', () => {
        const m = document.createElement('meta');
        m.setAttribute('name', 'description');
        return m;
      }).setAttribute('content', description);
      upsert('meta[property="og:description"]', () => {
        const m = document.createElement('meta');
        m.setAttribute('property', 'og:description');
        return m;
      }).setAttribute('content', description);
    }

    upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    }).setAttribute('href', url);

    upsert('meta[property="og:url"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:url');
      return m;
    }).setAttribute('content', url);

    // Inject page-specific JSON-LD; remove on unmount / route change.
    const scripts = (jsonLd || []).map((obj) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-seo-jsonld', 'true');
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
      return s;
    });

    return () => {
      scripts.forEach((s) => s.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, jsonLdKey]);
};

export default useSeo;
