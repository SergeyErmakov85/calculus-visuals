import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
}

const setMeta = (name: string, content: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const setLink = (rel: string, href: string) => {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

export const SEOHead = ({ title, description, canonical }: SEOHeadProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title.length > 60 ? title.slice(0, 57) + "..." : title;
    setMeta("description", description.slice(0, 160));
    if (canonical) setLink("canonical", canonical);
    return () => {
      document.title = prevTitle;
    };
  }, [title, description, canonical]);
  return null;
};
