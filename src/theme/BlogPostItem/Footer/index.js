import React from "react";
import Footer from "@theme-original/BlogPostItem/Footer";
import Giscus from "@giscus/react";
import i18n from "@generated/i18n";
import { useColorMode } from "@docusaurus/theme-common";
import { useBlogPost } from "@docusaurus/theme-common/internal";

export default function FooterWrapper(props) {
  const { colorMode } = useColorMode();
  const { metadata, isBlogPostPage } = useBlogPost();

  if (!isBlogPostPage || metadata.source.match(/blog-work/)) {
    return <Footer {...props} />;
  }

  return (
    <>
      <Footer {...props} />
      <div className="margin-vert--xl">
        <Giscus
          id="comments"
          repo={`jeusto/jeusto.com`}
          repoId={`R_kgDOIrxUAg`}
          mapping="title"
          theme={colorMode}
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="top"
          lang={i18n.currentLocale}
          loading="eager"
        />
      </div>
    </>
  );
}
