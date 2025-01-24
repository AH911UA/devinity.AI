import React, { FunctionComponent } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import { HeadCustom } from "../../components/Header/HeadCustom";

export default PrivacyPolicy;

export const Head: FunctionComponent = () => (
  <HeadCustom
    title={`Privacy policy | Devinity LLC: Solutions Web, App, Blockchain, AI`}
    description={`Discover Devinity: Your premier partner in software solutions. From apps to AI, transform your online presence with us. Contact for innovative solutions.`}
    titleShort={`Privacy policy | Devinity LLC`}
    type={`article`}
    url={`https://devinity.ai/privacy-policy/`}
    image={""}
    schema={`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Privacy policy | Devinity LLC: Solutions Web, App, Blockchain, AI",
      "url": "https://devinity.ai/privacy-policy/",
      "description": "Discover Devinity: Your premier partner in software solutions. From apps to AI, transform your online presence with us. Contact for innovative solutions.",
    }`}
  />
);
