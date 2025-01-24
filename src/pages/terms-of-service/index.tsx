import React, { FunctionComponent } from "react";
import TermsOfService from "./TermsOfService";
import { HeadCustom } from "../../components/Header/HeadCustom";

export default TermsOfService;

export const Head: FunctionComponent = () => (
  <HeadCustom
    title={`Terms of service | Devinity LLC: Solutions Web, App, Blockchain, AI`}
    description={`Discover Devinity: Your premier partner in software solutions. From apps to AI, transform your online presence with us. Contact for innovative solutions.`}
    titleShort={`Terms of service | Devinity LLC`}
    type={`article`}
    url={`https://devinity.ai/terms-of-service/`}
    image={""}
    schema={`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Terms of service | Devinity LLC: Solutions Web, App, Blockchain, AI",
      "url": "https://devinity.ai/terms-of-service/",
      "description": "Discover Devinity: Your premier partner in software solutions. From apps to AI, transform your online presence with us. Contact for innovative solutions.",
    }`}
  />
);
