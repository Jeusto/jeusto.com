const title = "Jeusto ― Arhun Saday";
const description =
  "Full stack developer in France and an undergraduate computer science.";

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
        url: "https://i.imgur.com/qSJ9ifH.png",
        alt: title,
        width: 1920,
        height: 1080,
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
