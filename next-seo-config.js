const title = "Arhun Saday";
const description =
  "Full stack developer in France, an undergraduate computer science student at the University of Strasbourg.";

const SEO = {
  title,
  description,
  canonical: "https://jeusto.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://jeusto.com",
    title,
    description,
    images: [
      {
        url: "https://danielwirtz.com/static/images/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@jeustoo",
    site: "@jeusto",
    cardType: "summary_large_image",
  },
};

export default SEO;
