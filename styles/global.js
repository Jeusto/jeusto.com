import { Global, css } from "@emotion/react";

export default function GlobalStyle({ children }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
          }

          ${heading}
        `}
      />
      {children}
    </>
  );
}

// Gradient texts
const heading = `
.gradient_heading {
  width: fit-content;
  color: #fff;
  background: linear-gradient(
    271deg,
    #2ccdff 5%,
    #8736e1 50%,
    #e8608a 70%,
    #dea22b 94%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient_heading_dark {
  width: fit-content;
  color: #fff;
  background: linear-gradient(
    271deg,
    #a0e9ff 5%,
    #a162e8 50%,
    #f093b0 70%,
    #edca85 94%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient_text1 {
  width: fit-content;
  color: #fff;
  background: linear-gradient(
    271deg,
    #f093b0 0%,
    #edca85 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient_text2 {
  width: fit-content;
  color: #fff;
  background: linear-gradient(
    271deg,
  #a0e9ff 0%,
  #a162e8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;
